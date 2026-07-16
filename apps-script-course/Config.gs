const COURSE_CONFIG = Object.freeze({
  folderId: "1T1l6-11l7LR0X9MntAS82OfwQCdh5xL_",
  folderUrl: "https://drive.google.com/drive/folders/1T1l6-11l7LR0X9MntAS82OfwQCdh5xL_",
  purchaseSheetName: "Compras",
  errorSheetName: "Errores",
  referencePrefix: "CAJ-CURSO-PRUEBA-",
  currency: "COP",
});

function getRequiredProperty(name) {
  const value = PropertiesService.getScriptProperties().getProperty(name);
  if (!value || !String(value).trim()) {
    throw new Error("Falta configurar la propiedad " + name + ".");
  }
  return String(value).trim();
}

function getOptionalProperty(name, fallback) {
  const value = PropertiesService.getScriptProperties().getProperty(name);
  return value && String(value).trim() ? String(value).trim() : fallback;
}

function getCoursePriceInCents() {
  const value = Number(getRequiredProperty("COURSE_PRICE_IN_CENTS"));
  if (!Number.isInteger(value) || value <= 0) {
    throw new Error("COURSE_PRICE_IN_CENTS debe ser un entero positivo.");
  }
  return value;
}

function getSpreadsheet() {
  const spreadsheetId = getRequiredProperty("SHEET_ID");
  return SpreadsheetApp.openById(spreadsheetId);
}
