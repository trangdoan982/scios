"use server";

import { ContributorProps } from "@/components/contributors";
import { google } from "googleapis";

export default async function getAllProjects() {
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
	const range = "Projects!A2:L";
	const data = await sheets.spreadsheets.values.get({
		spreadsheetId: process.env.GOOGLE_SHEET_ID,
		range: range,
	});

	const values = data.data.values;
	return values?.map((value) => {
		let hyperlinks = [];
		let contributors: ContributorProps[] = [];
		if (value[1]) {
			hyperlinks = JSON.parse(value[1]);
		}
		if (value[5]) {
			contributors = JSON.parse(value[5]);
		}

		return {
			title: value[0],
			hyperlinks,
			image: value[2],
			ctaText: value[3],
			ctaLink: value[4],
			contributors,
			description: value[6],
			status: value[7],
			previousWorkshops: value[10],
			upcomingWorkshops: value[11],
		};
	});
}
