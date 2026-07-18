var COURSE_PRODUCTS = [
  {
    referencePrefix: "CAJ-CURSO-TEST-",
    name: "Curso de prueba",
    folderId: "1T1l6-11l7LR0X9MntAS82OfwQCdh5xL_",
    priceInCents: 2000000
  },
  {
    referencePrefix: "CAJ-NEUROCALMA-444-",
    name: "Neurocalma 444",
    folderId: "1haJPsNSXJ0WVFm9saZodkWe6mycG173u",
    priceInCents: 3000000
  },
  {
    referencePrefix: "CAJ-CEREBROS-INTERACTIVO-",
    name: "Biblioteca interactiva Cerebros digitales",
    folderId: "1zvGKwEMDJhY_u-mvnMd7PYl6FlKbbELs",
    priceInCents: 5000000
  }
];

function configurarSecreto() {
  var properties = PropertiesService.getScriptProperties();
  var secret = properties.getProperty("COURSE_AUTOMATION_SECRET");

  if (!secret) {
    secret = Utilities.getUuid() + Utilities.getUuid();
    properties.setProperty("COURSE_AUTOMATION_SECRET", secret);
  }

  console.log(secret);
}

function doGet() {
  return jsonResponse({
    ok: true,
    service: "course-access"
  });
}

function doPost(event) {
  var lock = LockService.getScriptLock();

  try {
    var data = JSON.parse(event.postData.contents);
    var properties = PropertiesService.getScriptProperties();
    var expectedSecret = properties.getProperty(
      "COURSE_AUTOMATION_SECRET"
    );

    if (!expectedSecret || data.secret !== expectedSecret) {
      throw new Error("Solicitud no autorizada.");
    }

    var course = findCourseByReference(data.reference);

    if (!course) {
      throw new Error("La referencia no pertenece a un curso.");
    }

    if (Number(data.amountInCents) !== course.priceInCents) {
      throw new Error("El valor del pago no coincide.");
    }

    if (data.currency !== "COP") {
      throw new Error("La moneda del pago no coincide.");
    }

    var transactionId = String(data.transactionId || "");

    if (!/^[a-zA-Z0-9-]{8,100}$/.test(transactionId)) {
      throw new Error("La transaccion no es valida.");
    }

    var email = normalizeCourseEmail(data.email);
    var deliveryKey = "delivered_" + transactionId;

    lock.waitLock(20000);

    if (properties.getProperty(deliveryKey) === "COMPLETED") {
      lock.releaseLock();

      return jsonResponse({
        ok: true,
        duplicate: true
      });
    }

    DriveApp
      .getFolderById(course.folderId)
      .addViewer(email);

    sendCourseWelcomeEmail(email, course);

    properties.setProperty(deliveryKey, "COMPLETED");
    lock.releaseLock();

    return jsonResponse({
      ok: true,
      delivered: true
    });

  } catch (error) {
    if (lock.hasLock()) {
      lock.releaseLock();
    }

    console.error(error);

    return jsonResponse({
      ok: false,
      error: String(error.message || error).slice(0, 300)
    });
  }
}

function findCourseByReference(reference) {
  var value = String(reference || "");

  for (var index = 0; index < COURSE_PRODUCTS.length; index++) {
    var course = COURSE_PRODUCTS[index];

    if (value.indexOf(course.referencePrefix) === 0) {
      return course;
    }
  }

  return null;
}

function normalizeCourseEmail(value) {
  var email = String(value || "")
    .trim()
    .toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("El correo del comprador no es valido.");
  }

  return email;
}

function sendCourseWelcomeEmail(email, course) {
  var courseUrl =
    "https://drive.google.com/drive/folders/" +
    course.folderId;

  MailApp.sendEmail({
    to: email,
    subject:
      "Tu acceso a " +
      course.name +
      " ya esta habilitado",
    body:
      "Tu pago fue aprobado y ya puedes entrar a " +
      course.name +
      ".\n\n" +
      "Usa esta misma cuenta de Google: " +
      email +
      "\n\n" +
      "Entrar al curso: " +
      courseUrl,
    htmlBody:
      "<h2>Tu acceso a " +
      course.name +
      " ya esta habilitado</h2>" +
      "<p>Tu pago fue aprobado y ya puedes entrar al curso.</p>" +
      "<p>Usa esta misma cuenta de Google: <strong>" +
      email +
      "</strong></p>" +
      '<p><a href="' +
      courseUrl +
      '">Entrar al curso</a></p>'
  });
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
