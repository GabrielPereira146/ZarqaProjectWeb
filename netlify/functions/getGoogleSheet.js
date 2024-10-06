import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

export async function handler() {
  try {
    // Autenticação via JWT

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth: serviceAccountAuth });

    const response = await sheets.spreadsheets.values.get({
      
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Team!A1:D10', 
    });

    const rows = response.data.values;
    return {
      statusCode: 200,
      body: JSON.stringify(rows),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
}




