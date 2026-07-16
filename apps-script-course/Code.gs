function doGet() {
  return jsonResponse({ ok: true, service: "course-access" });
}

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents);
    const result = processWompiEvent(payload);
    return jsonResponse({ ok: true, result: result });
  } catch (error) {
    return jsonResponse({ ok: false, error: summarizeError(error) });
  }
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}

function setupCourseAutomation() {
  const properties = PropertiesService.getScriptProperties();
  let sheetId = properties.getProperty("SHEET_ID");
  if (!sheetId) {
    const spreadsheet = SpreadsheetApp.create("Compras curso - Carlos Alberto Jimenez");
    sheetId = spreadsheet.getId();
    properties.setProperty("SHEET_ID", sheetId);
  }
  ensureSheet(COURSE_CONFIG.purchaseSheetName, PURCHASE_HEADERS);
  ensureSheet(COURSE_CONFIG.errorSheetName, ERROR_HEADERS);
  return getSpreadsheet().getUrl();
}

function testManualAccess() {
  setupCourseAutomation();
  const email = normalizeEmail(getRequiredProperty("TEST_STUDENT_EMAIL"));
  const permission = grantCourseAccess(email);
  sendWelcomeEmail({ email: email, name: "Estudiante de prueba" });
  return {
    success: true,
    email: email,
    permissionId: permission.id,
    alreadyGranted: permission.alreadyGranted,
    courseUrl: COURSE_CONFIG.folderUrl,
  };
}
