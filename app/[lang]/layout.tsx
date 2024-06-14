import { pageTree } from "../source";
import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { I18nProvider } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import { baseOptions } from "../layout.config";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import {
	LayoutIcon,
	LibraryIcon,
	PaperclipIcon,
	type LucideIcon,
} from "lucide-react";
const inter = Inter({
	subsets: ["latin"],
});

export interface Mode {
	param: string;
	name: string;
	package: string;
	description: string;
	icon: LucideIcon;
}

export const modes: Mode[] = [
	{
		param: "get-started/introduction",
		name: "Core",
		package: "Dokploy",
		description: "The core",
		icon: LibraryIcon,
	},
	{
		param: "get-started/introduction",
		name: "CLI (Soon)",
		package: "fumadocs-ui",
		description: "The CLI",
		icon: LayoutIcon,
	},
	{
		param: "get-started/introduction",
		name: "API (Soon)",
		package: "fumadocs-mdx",
		description: "The API",
		icon: PaperclipIcon,
	},
];

export default function Layout({
	params,
	children,
}: {
	params: { lang: string };
	children: ReactNode;
}) {
	return (
		<html
			lang={params.lang}
			className={inter.className}
			suppressHydrationWarning
		>
			<body>
				<I18nProvider
					locale={params.lang}
					translations={{
						en: {
							name: "English",
						},
						cn: {
							name: "Chinese",
							toc: "目錄",
							search: "搜尋文檔",
							lastUpdate: "最後更新於",
							searchNoResult: "沒有結果",
							previousPage: "上一頁",
							nextPage: "下一頁",
							chooseLanguage: "選擇語言",
						},
					}}
				>
					<RootProvider>
						<DocsLayout
							i18n
							tree={pageTree[params.lang]}
							nav={{
								title: params.lang === "cn" ? "目錄" : "Dokploy",
								url: `/${params.lang}`,
								transparentMode: "none",
							}}
							sidebar={{
								defaultOpenLevel: 0,
								banner: (
									<RootToggle
										options={modes.map((mode) => ({
											url: `/${mode.param}`,
											icon: (
												<mode.icon
													className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
													style={{
														backgroundColor: `hsl(var(--${mode.param}-color)/.3)`,
														color: `hsl(var(--${mode.param}-color))`,
													}}
												/>
											),
											title: mode.name,
											description: mode.description,
										}))}
									/>
								),
							}}
							{...baseOptions}
						>
							{children}
						</DocsLayout>
					</RootProvider>
				</I18nProvider>
			</body>
		</html>
	);
}
