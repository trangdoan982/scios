import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				accent: "var(--color-accent-1)",
				"accent-2": "var(--color-accent-2)",
				"dark-grey": "var(--color-dark-grey)",
				"light-grey": "var(--color-light-grey)",
				snow: "var(--color-snow)",
				platinum: "var(--color-platinum)",
			},
		},
	},
	plugins: [],
};
export default config;
