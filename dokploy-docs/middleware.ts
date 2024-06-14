import { createI18nMiddleware } from "fumadocs-core/middleware";
import { defaultLanguage, languages } from "./i18n";

export default createI18nMiddleware({
	languages,
	defaultLanguage,
});

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: [
		"/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)",
	],
};
