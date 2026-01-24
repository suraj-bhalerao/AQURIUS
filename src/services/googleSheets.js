/**
 * Service to handle Google Sheets integration.
 * 
 * To make this work:
 * 1. Create a Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Copypaste a script that accepts POST requests and appends rows.
 * 4. Deploy as Web App (Anyone can access).
 * 5. Paste the Deployment URL below.
 */

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwGgdiDTF5vCOl9328Ev2XN35swcrxIwukD3lbEjllSeAkY-C5MyX0fJujrQian-_A5/exec';
// https://script.google.com/macros/s/AKfycbwGgdiDTF5vCOl9328Ev2XN35swcrxIwukD3lbEjllSeAkY-C5MyX0fJujrQian-_A5/exec

export const submitToGoogleSheets = async (data) => {
    // If URL is still the placeholder, return warning
    if (SCRIPT_URL.includes('YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE')) {
        console.warn("Please configure the Google Apps Script URL in src/services/googleSheets.js");
        return new Promise(resolve => setTimeout(() => resolve({ success: true, message: "Mock Mode (Config required)" }), 1000));
    }

    try {
        console.log('Submitting data to Google Sheets:', data);

        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'no-cors', // Important for Google Apps Script to avoid CORS errors
            headers: {
                // 'Content-Type': 'text/plain;charset=utf-8' // explicit text/plain avoids preflight
                'Content-Type': 'application/json;charset=utf-8'
            }
        });

        console.log('Response received:', response.status);
        // With no-cors, we get an opaque response, but it usually means it went through if no error thrown.
        return { success: true };
    } catch (error) {
        console.error('Submission Error:', error);
        return { success: false, error: error.message };
    }
};
