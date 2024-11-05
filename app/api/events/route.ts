import { google } from "googleapis";

export async function GET() {
	try {
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
			scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
		});

		const sheets = google.sheets({ version: "v4", auth });
		const range = "Events!A2:I";
		const data = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.GOOGLE_SHEET_ID,
			range: range,
		});

		const values = data.data.values;
		const events = values?.map((value) => {
			let agenda = [];
			let oldResources = [];
			if (value[7]) {
				agenda = JSON.parse(value[7]);
			}
			if (value[6]) {
				oldResources = JSON.parse(value[6]);
			}
			return {
				title: value[0] ?? "",
				date: value[1] ?? "",
				hosts: value[2].split(",") ?? [],
				location: value[3] ?? "",
				eventLink: value[4] ?? "",
				description: value[5] ?? "",
				oldResources,
				agenda,
				isOld: value[8],
			};
		});

		return Response.json(events);
	} catch (error) {
		console.error("Error fetching events:", error);
		return Response.json({ error: "Failed to fetch events" }, { status: 500 });
	}
}
