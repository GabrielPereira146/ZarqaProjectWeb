import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

export async function handler() {
  try {
    // Autenticação via JWT

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });


    console.log('Spreadsheet ID:', process.env.SPREADSHEET_ID); // Para verificar se está sendo lido corretamente
    console.log('GOOGLE_SERVICE_ACCOUNT_EMAIL:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
    console.log('GOOGLE_PRIVATE_KEY:', process.env.GOOGLE_PRIVATE_KEY);
    const sheets = google.sheets({ version: 'v4', auth: serviceAccountAuth });

    const response = await sheets.spreadsheets.values.get({
      
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1!A1:D10', 
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




