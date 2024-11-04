import { google } from "googleapis";

export async function POST(request: Request) {
	try {
		const { email } = await request.json();

		const auth = await google.auth.getClient({
			projectId: "scios-website",
			credentials: {
				type: "service_account",
				project_id: "scios-website",
				private_key_id: process.env.PRIVATE_KEY_ID,
				private_key: process.env.GOOGLE_PRIVATE_KEY,
				client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
				client_id: process.env.CLIENT_ID,
				token_url: process.env.TOKEN_URL,
				universe_domain: "googleapis.com",
			},
			scopes: ["https://www.googleapis.com/auth/spreadsheets"], // Note: changed scope to allow writing
		});

		const sheets = google.sheets({ version: "v4", auth });

		// Append the email and timestamp to the sheet
		await sheets.spreadsheets.values.append({
			spreadsheetId: process.env.GOOGLE_SHEET_SUBSCRIBERS_ID,
			range: "Subscribers!A:B", // Assumes you have a sheet named "Subscribers"
			valueInputOption: "USER_ENTERED",
			requestBody: {
				values: [[new Date().toISOString(), email]],
			},
		});

		return Response.json({ success: true });
	} catch (error) {
		console.error("Subscription error:", error);
		return Response.json(
			{ success: false, error: "Subscription failed" },
			{ status: 500 }
		);
	}
}
