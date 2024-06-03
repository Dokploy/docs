import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
const googleAnalyticsId = "G-HZ71HG38HN";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.dokploy.com",
	server: {
		port: 3000,
		host: true,
	},
	integrations: [
		tailwind({
			// Disable the default base styles:
			applyBaseStyles: true,
		}),
		starlight({
			// customCss: [
			//     // Path to your Tailwind base styles:
			//     './src/tailwind.css',
			//   ],
			disable404Route: true,
			title: "Dokploy",
			defaultLocale: "root",
			favicon: "/favicon.svg",
			// customCss: ["./src/tailwind.css"],
			head: [
				{
					tag: "script",
					attrs: {
						src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
						async: true,
					},
				},
				{
					tag: "script",
					content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
              
            gtag('config', '${googleAnalyticsId}');
          `,
				},
			],
			locales: {
				root: {
					label: "English",
					lang: "en",
				},
				"zh-cn": {
					label: "简体中文",
					lang: "zh-CN",
				},
			},
			social: {
				github: "https://github.com/dokploy/dokploy",
			},
			sidebar: [
				{
					label: "Get Started",
					translations: {
						"zh-CN": "快速入门",
					},
					items: [
						{
							label: "Introduction",
							translations: {
								"zh-CN": "介绍",
							},
							link: "/get-started/introduction",
						},
						{
							label: "Installation",
							translations: {
								"zh-CN": "安装",
							},
							link: "/get-started/installation",
						},
						{
							label: "Reset Password",
							translations: {
								"zh-CN": "重置密码",
							},
							link: "/get-started/reset-password",
						},
						{
							label: "Uninstall",
							translations: {
								"zh-CN": "卸载",
							},
							link: "/get-started/uninstall",
						},
					],
				},
				{
					label: "Domain",
					translations: {
						"zh-CN": "域名",
					},
					items: [
						{
							label: "Web Domain Setup",
							translations: {
								"zh-CN": "Web 域名配置",
							},
							link: "/domains/web-domain-setup",
						},
						{
							label: "Application Domain Setup",
							translations: {
								"zh-CN": "应用域名配置",
							},
							link: "/domains/application-setup",
						},
					],
				},
				{
					label: "Server",
					translations: {
						"zh-CN": "服务器",
					},
					items: [
						{
							label: "Overview",
							translations: {
								"zh-CN": "概述",
							},
							link: "/server/overview",
						},
					],
				},
				{
					label: "Application",
					translations: {
						"zh-CN": "应用",
					},
					items: [
						{
							label: "Overview",
							translations: {
								"zh-CN": "概述",
							},
							link: "/application/overview",
						},
						{
							label: "Build Type",
							translations: {
								"zh-CN": "构建类型",
							},
							link: "/application/build-type",
						},
					],
				},
				{
					label: "Databases",
					translations: {
						"zh-CN": "数据库",
					},
					items: [
						{
							label: "Overview",
							translations: {
								"zh-CN": "概述",
							},
							link: "/databases/overview",
						},
						{
							label: "Backups",
							translations: {
								"zh-CN": "备份",
							},
							link: "/databases/backups",
						},
					],
				},
        {
					label: "Docker Compose",
					translations: {
						"zh-CN": "数据库",
					},
					items: [
						{
							label: "Overview",
							translations: {
								"zh-CN": "概述",
							},
							link: "/docker-compose/overview",
						},
            {
              label: "Example",
              translations: {
                "zh-CN": "概述",
              },
              link: "/docker-compose/example",
            }
					],
				},
				{
					label: "Traefik",
					items: [
						{
							label: "Overview",
							translations: {
								"zh-CN": "概述",
							},
							link: "/traefik/overview",
						},
					],
				},
				{
					label: "Docker",
					items: [
						{
							label: "Overview",
							translations: {
								"zh-CN": "概述",
							},
							link: "/docker/overview",
						},
					],
				},
				{
					label: "Monitoring",
					translations: {
						"zh-CN": "监控",
					},
					items: [
						{
							label: "Overview",
							translations: {
								"zh-CN": "概述",
							},
							link: "/monitoring/overview",
						},
					],
				},
				{
					label: "Cluster",
					translations: {
						"zh-CN": "监控",
					},
					items: [
						{
							label: "Cluster",
							translations: {
								"zh-CN": "概述",
							},
							link: "/cluster/overview",
						},
					],
				},
				{
					label: "Deployment",
					translations: {
						"zh-CN": "部署",
					},
					items: [
						{
							label: "Oracle Cloud",
							link: "/deployment/oracle-cloud",
						},
					],
				},
				{
					label: "Extra",
					translations: {
						"zh-CN": "其它",
					},
					items: [
						{
							label: "Comparison",
							translations: {
								"zh-CN": "对比",
							},
							link: "/extra/comparison",
						},
					],
				},
			],
		}),
		tailwind(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
});
