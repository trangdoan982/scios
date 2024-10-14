import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const lastik = localFont({
	src: "./fonts/Lastik.otf",
	variable: "--font-geist-mono",
});
const openSans = Open_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
	title: "SciOS",
	description: "Facilitating infrastructure for open science",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${lastik.variable} ${openSans.className} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
