# Google Sheets Integration Setup

To enable the WhatsApp modal form to send leads to Google Sheets, you need to set up the following:

## 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Medical Leads" or similar
4. Create a sheet named "Leads" (or update the SHEET_NAME in the API route)
5. Add the following headers in row 1:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Phone
   - E1: Country
   - F1: Treatment
   - G1: Message
   - H1: Source

## 2. Get Google Sheets API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the Google Sheets API
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. Copy the API key

## 3. Get Spreadsheet ID

From your Google Sheet URL:
`https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`

Copy the `SPREADSHEET_ID` part.

## 4. Set Environment Variables

Create a `.env.local` file in your project root:

```env
GOOGLE_SHEETS_ID=your_spreadsheet_id_here
GOOGLE_SHEETS_API_KEY=your_google_api_key_here
```

## 5. Alternative: Google Apps Script Method

If you prefer using Google Apps Script (easier setup):

1. In your Google Sheet, go to Extensions → Apps Script
2. Replace the default code with:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents).data;
  sheet.appendRow(data);
  return ContentService.createTextOutput(JSON.stringify({success: true}));
}
```

3. Deploy as web app with execute permissions for "Anyone"
4. Copy the web app URL
5. Use `GOOGLE_APPS_SCRIPT_URL` instead of the API method

## 6. Test the Integration

1. Start your Next.js development server
2. Click the WhatsApp button
3. Fill out and submit the form
4. Check your Google Sheet for the new entry

## Troubleshooting

- Make sure your Google Sheets API is enabled
- Check that the API key has proper permissions
- Verify the spreadsheet ID is correct
- Ensure the sheet name matches exactly (case-sensitive)
