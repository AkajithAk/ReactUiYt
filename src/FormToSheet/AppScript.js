function doPost(e) {
    const sheetUrl = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1V4KRS8J5CGostWXRA1jJB82rMQb1BiyoaxKuXpK8Spw/edit?gid=0#gid=0")
  
    const sheet = sheetUrl.getSheetByName('Sheet1')
  
    let data = e.parameter
    sheet.appendRow([data.Name,data.Email])
  
    return ContentService.createTextOutput('Added..')
  }
  