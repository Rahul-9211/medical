import { NextRequest, NextResponse } from 'next/server';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  country: string;
  treatment: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const leadData: LeadData = await request.json();
    
    // Validate required fields
    if (!leadData.name || !leadData.email || !leadData.phone || !leadData.country) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const rowData = [
      timestamp,
      leadData.name,
      leadData.email,
      leadData.phone,
      leadData.country,
      leadData.treatment || 'Not specified',
      leadData.message || 'No additional information',
      'WhatsApp Modal Form'
    ];

    // Send to Google Sheets using Google Sheets API
    const response = await sendToGoogleSheets(rowData);

    if (response.success) {
      return NextResponse.json(
        { message: 'Lead submitted successfully' },
        { status: 200 }
      );
    } else {
      console.error('Google Sheets API error:', response.error);
      return NextResponse.json(
        { error: 'Failed to save lead data' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing lead submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function sendToGoogleSheets(rowData: string[]) {
  try {
    // Google Sheets configuration
    const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_ID;
    const SHEET_NAME = 'Leads';
    const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

    if (!SPREADSHEET_ID || !API_KEY) {
      console.error('Missing Google Sheets configuration');
      return { success: false, error: 'Configuration missing' };
    }

    // For now, we'll use a simple approach with Google Sheets API
    // You can also use Google Apps Script or other methods
    
    // Option 1: Using Google Sheets API v4
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A:H:append?valueInputOption=USER_ENTERED&key=${API_KEY}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [rowData]
      })
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.text();
      return { success: false, error: errorData };
    }

  } catch (error) {
    console.error('Error sending to Google Sheets:', error);
    return { success: false, error: error };
  }
}

// Alternative method using Google Apps Script (uncomment if you prefer this approach)
/*
async function sendToGoogleSheetsViaAppsScript(rowData: string[]) {
  try {
    const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;
    
    if (!APPS_SCRIPT_URL) {
      console.error('Missing Google Apps Script URL');
      return { success: false, error: 'Configuration missing' };
    }

    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: rowData
      })
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.text();
      return { success: false, error: errorData };
    }

  } catch (error) {
    console.error('Error sending to Google Sheets via Apps Script:', error);
    return { success: false, error: error };
  }
}
*/
