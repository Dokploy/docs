import { createPreset, presets } from "fumadocs-ui/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [
		createPreset({
			preset: {
				...presets.default,
				dark: {
					...presets.default.dark,
					background: "0 0% 2%",
					foreground: "0 0% 98%",
					popover: "0 0% 4%",
					card: "0 0% 4%",
					muted: "0 0% 8%",
					border: "0 0% 14%",
					accent: "0 0% 15%",
					"accent-foreground": "0 0% 100%",
					"muted-foreground": "0 0% 60%",
				},
			},
		}),
	],
	theme: {
		extend: {},
	},
	plugins: [],
	content: [
		"./node_modules/fumadocs-ui/dist/**/*.js",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./content/**/*.mdx",
		"./mdx-components.tsx",
		"mdx-components.tsx",
	],
};
