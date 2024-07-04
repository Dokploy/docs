import type { MetadataRoute } from "next";
import { url } from "@/utils/metadata";
import { getPages } from "./source";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		...getPages().map<MetadataRoute.Sitemap[number]>((page) => {
			return {
				url: url(`/en${page.url}`),
				alternates: {
					languages: {
						zh: `${url("/")}cn${page.url}`,
						en: `${url("/")}en${page.url}`,
					},
				},
				lastModified: page.data.exports.lastModified
					? new Date(page.data.exports.lastModified)
					: undefined,
				changeFrequency: "weekly",
				priority: page.url === "/docs/core/get-started/introduction" ? 1 : 0.8,
			};
		}),
	];
}
