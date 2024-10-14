// lib/getLogos.ts
import fs from "fs";
import path from "path";

export const getLogos = () => {
	const bannerDir = path.join(process.cwd(), "public/banner");
	const files = fs.readdirSync(bannerDir);

	// Only return files with valid image extensions
	const logoFiles = files.filter((file) =>
		/\.(png|jpg|jpeg|svg|webp)$/.test(file)
	);

	return logoFiles;
};
