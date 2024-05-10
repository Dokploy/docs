import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
// const accent = { 200: '#dcc5a1', 600: '#8e6200', 900: '#442d00', 950: '#322000' };
// const gray = { 100: '#f6f6f6', 200: '#edeeee', 300: '#c2c2c2', 400: '#8b8b8c', 500: '#585858', 700: '#383838', 800: '#262727', 900: '#181818' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		// extend: {
		// 	colors: { accent, gray },
		// },
	},
	// plugins: [starlightPlugin()],
};