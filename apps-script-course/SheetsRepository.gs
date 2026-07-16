const PURCHASE_HEADERS = [
  "transaction_id",
  "reference",
  "customer_email",
  "amount_in_cents",
  "currency",
  "wompi_status",
  "processing_status",
  "permission_id",
  "email_sent_at",
  "retry_count",
  "error_step",
  "error_message",
  "created_at",
  "updated_at",
];

const ERROR_HEADERS = [
  "created_at",
  "transaction_id",
  "reference",
  "customer_email",
  "step",
  "message",
];

function ensureSheet(name, headers) {
  const spreadsheet = getSpreadsheet();
  let sheet = spreadsheet.getSheetByName(name);
  if (!sheet) sheet = spreadsheet.insertSheet(name);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function getPurchasesSheet() {
  return ensureSheet(COURSE_CONFIG.purchaseSheetName, PURCHASE_HEADERS);
}

function getErrorsSheet() {
  return ensureSheet(COURSE_CONFIG.errorSheetName, ERROR_HEADERS);
}

function findPurchaseByTransactionId(transactionId) {
  const sheet = getPurchasesSheet();
  if (sheet.getLastRow() < 2) return null;

  const match = sheet
    .getRange(2, 1, sheet.getLastRow() - 1, 1)
    .createTextFinder(String(transactionId))
    .matchEntireCell(true)
    .findNext();
  if (!match) return null;

  const rowNumber = match.getRow();
  const values = sheet.getRange(rowNumber, 1, 1, PURCHASE_HEADERS.length).getValues()[0];
  const record = {};
  PURCHASE_HEADERS.forEach(function (header, index) {
    record[header] = values[index];
  });
  return { rowNumber: rowNumber, record: record };
}

function createPurchaseRecord(transaction, email) {
  const now = new Date();
  const sheet = getPurchasesSheet();
  sheet.appendRow([
    transaction.id,
    transaction.reference,
    email,
    transaction.amount_in_cents,
    transaction.currency,
    transaction.status,
    "RECEIVED",
    "",
    "",
    0,
    "",
    "",
    now,
    now,
  ]);
  return sheet.getLastRow();
}

function updatePurchaseRecord(rowNumber, updates) {
  const sheet = getPurchasesSheet();
  const values = sheet.getRange(rowNumber, 1, 1, PURCHASE_HEADERS.length).getValues()[0];
  PURCHASE_HEADERS.forEach(function (header, index) {
    if (Object.prototype.hasOwnProperty.call(updates, header)) {
      values[index] = updates[header];
    }
  });
  values[PURCHASE_HEADERS.indexOf("updated_at")] = new Date();
  sheet.getRange(rowNumber, 1, 1, PURCHASE_HEADERS.length).setValues([values]);
}

function logProcessingError(context) {
  getErrorsSheet().appendRow([
    new Date(),
    context.transactionId || "",
    context.reference || "",
    context.email || "",
    context.step || "UNKNOWN",
    String(context.message || "Error desconocido").slice(0, 1000),
  ]);
}
