function doPost(e) {
  // Check if we're receiving form data
  if (e.parameter && e.parameter.id && e.parameter.name) {
    // Process form data from e.parameter
    const id = e.parameter.id;
    const name = e.parameter.name;
    
    // Check if required fields exist
    if (!id || !name) {
      return ContentService.createTextOutput(JSON.stringify({
        error: 'Missing ID or name'
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Invitations');
    if (!sheet) {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const newSheet = ss.insertSheet('Invitations');
      newSheet.appendRow(['ID', 'Name', 'Created Date']);
    }
    
    sheet.appendRow([id, name, new Date()]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Saved successfully'
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
  
  // Try parsing as JSON if not form data
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      error: 'Invalid JSON data'
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }

  const id = data.id;
  const name = data.name;
  
  if (!id || !name) {
    return ContentService.createTextOutput(JSON.stringify({
      error: 'Missing ID or name'
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Invitations');
  if (!sheet) {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const newSheet = ss.insertSheet('Invitations');
    newSheet.appendRow(['ID', 'Name', 'Created Date']);
  }
  
  sheet.appendRow([id, name, new Date()]);
  
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: 'Saved successfully'
  }))
  .setMimeType(ContentService.MimeType.JSON);
} 