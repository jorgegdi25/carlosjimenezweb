function summarizeError(error) {
  if (!error) return "Error desconocido";
  return String(error.message || error).slice(0, 1000);
}

function notifyAdministrator(context) {
  const adminEmail = getOptionalProperty("ADMIN_EMAIL", "");
  if (!adminEmail) return;

  MailApp.sendEmail({
    to: adminEmail,
    subject: "Error en acceso automatico al curso",
    body: [
      "Transaccion: " + (context.transactionId || "Sin dato"),
      "Referencia: " + (context.reference || "Sin dato"),
      "Correo: " + (context.email || "Sin dato"),
      "Paso: " + (context.step || "UNKNOWN"),
      "Error: " + (context.message || "Error desconocido"),
      "Hoja: " + getSpreadsheet().getUrl(),
    ].join("\n"),
  });
}
