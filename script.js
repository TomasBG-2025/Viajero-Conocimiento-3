function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getDatosDashboard() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sedes = ss.getSheetByName('Sedes').getDataRange().getValues();
  const fases = ss.getSheetByName('Fases').getDataRange().getValues();
  const docentes = ss.getSheetByName('Docentes').getDataRange().getValues();
  
  return {
    sedes: sedes.slice(1),
    fases: fases.slice(1),
    docentes: docentes.slice(1),
    totalDocentes: docentes.length - 1,
    totalSedes: sedes.length - 1
  };
}
