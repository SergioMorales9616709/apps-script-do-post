function doPost(e) {
  const data = JSON.parse(e.postData.contents);

  const email = data.email;
  const message = data.message;
  const phone = data.phone;
  const date = data.date;

  const row = [[date, email, phone, message]];
  const leadPage = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Hoja 1");

  const lastRow = leadPage.getLastRow();
  leadPage.insertRowsAfter(lastRow, 1)
  leadPage.getRange(lastRow + 1, 1, 1, row[0].length).setValues(row);
  leadPage.getRange(lastRow + 1, 1, 1, row[0].length).setFontWeight('normal');

  const status = JSON.stringify({'status': 'success'});
  const response = ContentService.createTextOutput(status).setMimeType(ContentService.MimeType.JSON);
  return response;
}