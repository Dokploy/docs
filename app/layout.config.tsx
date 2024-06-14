import type { BaseLayoutProps } from "fumadocs-ui/layout";
import { Book, GlobeIcon } from "lucide-react";
import Image from "next/image";

export const baseOptions: BaseLayoutProps = {
	githubUrl: "https://github.com/dokploy/dokploy",
	nav: {
		title: (
			<>
				<Image
					alt="Fumadocs"
					src={"/assets/favicon.png"}
					sizes="100px"
					width={24}
					height={24}
					className="size-10 [.uwu_&]:block"
					aria-label="Fumadocs"
				/>

				<span className="[.uwu_&]:hidden max-md:[nav_&]:hidden">Dokploy</span>
			</>
		),
	},
	links: [
		{
			text: "Documentation",
			url: "/docs",
			active: "nested-url",
			icon: <Book />,
		},
		{
			text: "Website",
			url: "https://dokploy.com",
			active: "nested-url",
			icon: <GlobeIcon />,
		},
	],
};
