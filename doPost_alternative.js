function doPost(e) {
  let data;
  
  // Check if we're receiving JSON data in a form field
  if (e.parameter && e.parameter.json) {
    try {
      data = JSON.parse(e.parameter.json);
    } catch (err) {
      return ContentService.createTextOutput(JSON.stringify({
        error: 'Invalid JSON data in form field'
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
  } else {
    // Try parsing postData as usual
    try {
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      return ContentService.createTextOutput(JSON.stringify({
        error: 'Invalid JSON data'
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
  }

  const id = data.id;
  const name = data.name;
  
  // Rest of the function remains the same
  // ...
} 