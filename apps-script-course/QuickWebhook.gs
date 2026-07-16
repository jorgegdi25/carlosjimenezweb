const COURSE_FOLDER_ID = "1T1l6-11l7LR0X9MntAS82OfwQCdh5xL_";
const COURSE_FOLDER_URL =
  "https://drive.google.com/drive/folders/" + COURSE_FOLDER_ID;
const COURSE_REFERENCE_PREFIX = "CAJ-CURSO-TEST-";
const COURSE_PRICE_IN_CENTS = 2000000;

function configurarSecreto() {
  const properties = PropertiesService.getScriptProperties();
  if (!properties.getProperty("COURSE_AUTOMATION_SECRET")) {
    properties.setProperty(
      "COURSE_AUTOMATION_SECRET",
      Utilities.getUuid() + Utilities.getUuid()
    );
  }
  console.log(properties.getProperty("COURSE_AUTOMATION_SECRET"));
}

function doGet() {
  return jsonResponse({ ok: true, service: "course-access" });
}

function doPost(event) {
  const lock = LockService.getScriptLock();
  try {
    const data = JSON.parse(event.postData.contents);
    const expectedSecret = PropertiesService.getScriptProperties()
      .getProperty("COURSE_AUTOMATION_SECRET");

    if (!expectedSecret || data.secret !== expectedSecret) {
      throw new Error("Solicitud no autorizada.");
    }
    if (!String(data.reference || "").startsWith(COURSE_REFERENCE_PREFIX)) {
      throw new Error("La referencia no pertenece al curso.");
    }
    if (Number(data.amountInCents) !== COURSE_PRICE_IN_CENTS) {
      throw new Error("El valor del pago no coincide.");
    }
    if (data.currency !== "COP") {
      throw new Error("La moneda del pago no coincide.");
    }

    const transactionId = String(data.transactionId || "");
    if (!/^[a-zA-Z0-9-]{8,100}$/.test(transactionId)) {
      throw new Error("La transaccion no es valida.");
    }
    const email = normalizeCourseEmail(data.email);
    const deliveryKey = "delivered_" + transactionId;

    lock.waitLock(20000);
    const properties = PropertiesService.getScriptProperties();
    if (properties.getProperty(deliveryKey) === "COMPLETED") {
      return jsonResponse({ ok: true, duplicate: true });
    }

    DriveApp.getFolderById(COURSE_FOLDER_ID).addViewer(email);
    sendCourseWelcomeEmail(email);
    properties.setProperty(deliveryKey, "COMPLETED");

    return jsonResponse({ ok: true, delivered: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({
      ok: false,
      error: String(error.message || error).slice(0, 300),
    });
  } finally {
    try {
      lock.releaseLock();
    } catch (_) {}
  }
}

function normalizeCourseEmail(value) {
  const email = String(value || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("El correo del comprador no es valido.");
  }
  return email;
}

function sendCourseWelcomeEmail(email) {
  MailApp.sendEmail({
    to: email,
    subject: "Tu acceso al curso ya esta habilitado",
    body:
      "Tu pago fue aprobado y ya puedes entrar al curso.\n\n" +
      "Usa esta misma cuenta de Google: " + email + "\n\n" +
      "Entrar al curso: " + COURSE_FOLDER_URL,
    htmlBody:
      "<h2>Tu acceso al curso ya esta habilitado</h2>" +
      "<p>Tu pago fue aprobado y ya puedes entrar al curso.</p>" +
      "<p>Usa esta misma cuenta de Google: <strong>" + email + "</strong></p>" +
      '<p><a href="' + COURSE_FOLDER_URL + '">Entrar al curso</a></p>',
  });
}

function jsonResponse(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
