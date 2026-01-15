# Google Sheets Integration Setup Guide

Follow these steps to connect your Contact Form to a Google Sheet.

## Step 1: Create the Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new **Blank spreadsheet**.
2. Name it "Aquaress Leads" (or anything you like).
3. In the first row (headers), add these exact column names:
   - **A1**: Date
   - **B1**: Name
   - **C1**: Location
   - **D1**: Email
   - **E1**: Mobile
   - **F1**: Size
   - **G1**: Quantity
   - **H1**: Consent

## Step 2: Add the Script
1. In your Google Sheet, click **Extensions** > **Apps Script**.
2. Delete any code in the `Code.gs` window and paste the following script:

```javascript
const SHEET_NAME = "Sheet1"; // Make sure this matches your tab name

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(SHEET_NAME);

    // Parse the data sent from the website
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    // Parse existing parameters
    let data;
    try {
        data = JSON.parse(e.postData.contents);
    } catch(err) {
        data = e.parameter;
    }

    const newRow = headers.map(function(header) {
      // Automatic timestamp for "Date" column
      if (header === 'Date') return new Date();
      
      // Match other columns to the form data keys
      // Keys: name, location, email, mobile, bottleSize, quantity, consent
      switch(header) {
          case 'Name': return data.name;
          case 'Location': return data.location;
          case 'Email': return data.email;
          case 'Mobile': return data.mobile;
          case 'Size': return data.bottleSize;
          case 'Quantity': return data.quantity;
          case 'Consent': return data.consent;
          default: return '';
      }
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": nextRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": e }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

## Step 3: Deploy as Web App
1. Click on the **Deploy** button (blue button, top right) > **New deployment**.
2. Click the gear icon (Select type) > **Web app**.
3. **Description**: "Aquaress Form Contact".
4. **Execute as**: `Me (your_email@gmail.com)`.
5. **Who has access**: `Anyone`. (**Important**: If you don't set this to Anyone, the website form will fail).
6. Click **Deploy**.
7. You might be asked to **Authorize access**. Click "Review permissions", choose your account, click "Advanced", and "Go to (Project Name) (unsafe)" (it is safe, it's your own script).
8. Copy the **Web app URL** (it ends with `/exec`).

## Step 4: Update Your Code
1. Open `src/services/googleSheets.js` in this project.
2. Paste your copied URL into the `SCRIPT_URL` variable.
3. Save the file.
