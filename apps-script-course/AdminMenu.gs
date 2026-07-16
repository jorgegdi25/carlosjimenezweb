function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Curso")
    .addItem("Probar configuracion", "testConfiguration")
    .addItem("Probar acceso manual", "testManualAccess")
    .addItem("Verificar acceso de prueba", "testVerifyManualAccess")
    .addToUi();
}

function testConfiguration() {
  const result = {
    folderId: COURSE_CONFIG.folderId,
    folderName: DriveApp.getFolderById(COURSE_CONFIG.folderId).getName(),
    spreadsheetUrl: setupCourseAutomation(),
    remainingEmailQuota: MailApp.getRemainingDailyQuota(),
  };
  console.log(JSON.stringify(result));
  return result;
}

function testVerifyManualAccess() {
  const email = normalizeEmail(getRequiredProperty("TEST_STUDENT_EMAIL"));
  const result = { email: email, hasAccess: verifyCourseAccess(email) };
  console.log(JSON.stringify(result));
  return result;
}
