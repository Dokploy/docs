import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

import tailwind from "@astrojs/tailwind"

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
          autogenerate: { directory: "get-started" },
          translations: {
            "zh-CN": "开始",
          },
        },
        {
          label: "Domain",
          autogenerate: { directory: "domains" },
          translations: {
            "zh-CN": "域名",
          },
        },
        {
          label: "Server",
          autogenerate: { directory: "server" },
          translations: {
            "zh-CN": "服务器",
          },
        },
        {
          label: "Application",
          autogenerate: { directory: "application" },
          translations: {
            "zh-CN": "应用",
          },
        },
        {
          label: "Databases",
          autogenerate: { directory: "databases" },
          translations: {
            "zh-CN": "数据库",
          },
        },
        {
          label: "Traefik",
          autogenerate: { directory: "traefik" },
          translations: {
            "zh-CN": "Traefik",
          },
        },
        {
          label: "Docker",
          autogenerate: { directory: "docker" },
          translations: {
            "zh-CN": "Docker",
          },
        },
        {
          label: "Monitoring",
          autogenerate: { directory: "monitoring" },
          translations: {
            "zh-CN": "监控",
          },
        },
        {
          label: "Deployment",
          autogenerate: { directory: "deployment" },
          translations: {
            "zh-CN": "部署",
          },
        },
        {
          label: "Extra",
          autogenerate: { directory: "extra" },
          translations: {
            "zh-CN": "杂项",
          },
        },
      ],
    }),
    tailwind(),
  ],
})
