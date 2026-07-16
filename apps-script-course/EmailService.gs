function buildWelcomeEmailText(purchase) {
  return [
    "Hola" + (purchase.name ? ", " + purchase.name : "") + ":",
    "",
    "Tu pago fue aprobado y tu acceso al curso de prueba ya esta habilitado.",
    "",
    "IMPORTANTE",
    "Abre el curso usando esta misma cuenta de Google:",
    purchase.email,
    "",
    "ENTRAR AL CURSO",
    COURSE_CONFIG.folderUrl,
    "",
    "Dentro de la carpeta encontraras el video de prueba.",
    "Si aparece Solicitar acceso, comprueba que hayas iniciado sesion con el correo indicado.",
    "",
    "Soporte: " + getOptionalProperty("SUPPORT_EMAIL", ""),
    getOptionalProperty("SUPPORT_WHATSAPP", ""),
  ].join("\n");
}

function buildWelcomeEmailHtml(purchase) {
  const safeEmail = purchase.email.replace(/[<>&\"]/g, "");
  return [
    '<div style="font-family:Arial,sans-serif;line-height:1.6;color:#15233f;max-width:620px">',
    "<h2>Tu acceso al curso ya esta habilitado</h2>",
    "<p>El pago fue aprobado y ya puedes entrar al curso de prueba.</p>",
    '<div style="background:#eef5ff;padding:16px;border-left:4px solid #168ddd">',
    "<strong>Usa esta misma cuenta de Google:</strong><br>" + safeEmail,
    "</div>",
    '<p style="margin:28px 0"><a href="' + COURSE_CONFIG.folderUrl + '" style="background:#123f78;color:#fff;text-decoration:none;padding:14px 22px;border-radius:6px;font-weight:bold">Entrar al curso</a></p>',
    "<p>Dentro de la carpeta encontraras el video de prueba.</p>",
    "<p>Si aparece <strong>Solicitar acceso</strong>, revisa que hayas iniciado sesion con el correo indicado.</p>",
    "<p>Soporte: " + getOptionalProperty("SUPPORT_EMAIL", "") + "</p>",
    "</div>",
  ].join("");
}

function sendWelcomeEmail(purchase) {
  MailApp.sendEmail({
    to: purchase.email,
    subject: "Tu acceso al curso ya esta habilitado",
    body: buildWelcomeEmailText(purchase),
    htmlBody: buildWelcomeEmailHtml(purchase),
    name: "Carlos Alberto Jimenez",
  });
}
