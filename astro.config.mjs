import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    host: true,
  },
  integrations: [
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
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
      head: [
        // {
        // 	// add google analyticis v4
        // 	tag:"script",
        // 	content:`
        // 		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        // 		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        // 		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        // 		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        // 			ga('create', 'G-V6R8RKTK9T', 'auto');
        // 			ga('send', 'pageview');
        // 	    `,
        // 		attrs: {
        // 			async: true,
        // 			defer: true,
        // 		},
        // }
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
          translations: { "zh-CN": "快速入门" },
          items: [
            {
              label: "Introduction",
              translations: { "zh-CN": "介绍" },
              link: "/get-started/introduction",
            },
            {
              label: "Installation",
              translations: { "zh-CN": "安装" },
              link: "/get-started/installation",
            },
            {
              label: "Reset Password",
              translations: { "zh-CN": "重置密码" },
              link: "/get-started/reset-password",
            },
            {
              label: "Uninstall",
              translations: { "zh-CN": "卸载" },
              link: "/get-started/uninstall",
            },
          ],
        },
        {
          label: "Domain",
          translations: { "zh-CN": "域名" },
          items: [
            {
              label: "Web Domain Setup",
              translations: { "zh-CN": "Web 域名配置" },
              link: "/domains/web-domain-setup",
            },
            {
              label: "Application Domain Setup",
              translations: { "zh-CN": "应用域名配置" },
              link: "/domains/application-setup",
            },
          ],
        },
        {
          label: "Server",
          translations: { "zh-CN": "服务器" },
          items: [
            {
              label: "Overview",
              translations: { "zh-CN": "概述" },
              link: "/server/overview",
            },
          ],
        },
        {
          label: "Application",
          translations: { "zh-CN": "应用" },
          items: [
            {
              label: "Overview",
              translations: { "zh-CN": "概述" },
              link: "/application/overview",
            },
            {
              label: "Build Type",
              translations: { "zh-CN": "构建类型" },
              link: "/application/build-type",
            },
          ],
        },
        {
          label: "Databases",
          translations: { "zh-CN": "数据库" },
          items: [
            {
              label: "Overview",
              translations: { "zh-CN": "概述" },
              link: "/databases/overview",
            },
            {
              label: "Backups",
              translations: { "zh-CN": "备份" },
              link: "/databases/backups",
            },
          ],
        },
        {
          label: "Traefik",
          items: [
            {
              label: "Overview",
              translations: { "zh-CN": "概述" },
              link: "/traefik/overview",
            },
          ],
        },
        {
          label: "Docker",
          items: [
            {
              label: "Overview",
              translations: { "zh-CN": "概述" },
              link: "/docker/overview",
            },
          ],
        },
        {
          label: "Monitoring",
          translations: { "zh-CN": "监控" },
          items: [
            {
              label: "Overview",
              translations: { "zh-CN": "概述" },
              link: "/monitoring/overview",
            },
          ],
        },
        {
          label: "Deployment",
          translations: { "zh-CN": "部署" },
          items: [
            {
              label: "Oracle Cloud",
              link: "/deployment/oracle-cloud",
            },
          ],
        },
        {
          label: "Extra",
          translations: { "zh-CN": "其它" },
          items: [
            {
              label: "Comparison",
              translations: { "zh-CN": "对比" },
              link: "/extra/comparison",
            },
          ],
        },
      ],
    }),
    tailwind(),
  ],
});
