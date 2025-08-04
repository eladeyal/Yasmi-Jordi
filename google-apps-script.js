// Google Apps Script for Wedding RSVP Form
// Copy this code to script.google.com

function doPost(e) {
  try {
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet (or create a new one)
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // If this is the first entry, add headers
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 3).setValues([['Name', 'Guests', 'Timestamp']]);
      sheet.getRange(1, 1, 1, 3).setFontWeight('bold');
      sheet.getRange(1, 1, 1, 3).setBackground('#0f598b');
      sheet.getRange(1, 1, 1, 3).setFontColor('white');
    }
    
    // Add the new data
    sheet.appendRow([
      data.name,
      data.guests,
      data.timestamp
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("Wedding RSVP Script is running!")
    .setMimeType(ContentService.MimeType.TEXT);
}