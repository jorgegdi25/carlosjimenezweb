function processWompiEvent(payload) {
  validateWompiSignature(payload, getRequiredProperty("WOMPI_EVENTS_SECRET"));
  const validation = validateTransaction(payload);
  if (validation.ignored) return validation;

  const transaction = validation.transaction;
  const email = validation.email;
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);

  let purchase = null;
  let rowNumber = null;
  let step = "CHECK_IDEMPOTENCY";
  try {
    purchase = findPurchaseByTransactionId(transaction.id);
    if (purchase && purchase.record.processing_status === "COMPLETED") {
      return { duplicate: true, completed: true };
    }

    rowNumber = purchase
      ? purchase.rowNumber
      : createPurchaseRecord(transaction, email);

    step = "CREATE_DRIVE_PERMISSION";
    const permission = grantCourseAccess(email);
    updatePurchaseRecord(rowNumber, {
      processing_status: "ACCESS_GRANTED",
      permission_id: permission.id,
      error_step: "",
      error_message: "",
    });

    step = "SEND_EMAIL";
    sendWelcomeEmail({
      name: "",
      email: email,
      transactionId: transaction.id,
      reference: transaction.reference,
    });

    updatePurchaseRecord(rowNumber, {
      processing_status: "COMPLETED",
      email_sent_at: new Date(),
      error_step: "",
      error_message: "",
    });

    return { completed: true };
  } catch (error) {
    const message = summarizeError(error);
    if (rowNumber) {
      const retryCount = purchase ? Number(purchase.record.retry_count || 0) + 1 : 1;
      updatePurchaseRecord(rowNumber, {
        processing_status: "FAILED",
        retry_count: retryCount,
        error_step: step,
        error_message: message,
      });
    }
    const context = {
      transactionId: transaction.id,
      reference: transaction.reference,
      email: email,
      step: step,
      message: message,
    };
    logProcessingError(context);
    notifyAdministrator(context);
    throw error;
  } finally {
    lock.releaseLock();
  }
}
