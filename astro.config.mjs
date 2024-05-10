import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			disable404Route: true,
			title: 'Dokploy',
			defaultLocale: 'root',
			favicon: '/favicon.svg',
			locales: {
				root:{
					label: 'English',
					lang: 'en',
				},
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				  },
			},
			social: {
				github: 'https://github.com/dokploy/dokploy',
			},
			sidebar: [
				{
				  label: 'Get Started',
				  items: [
					{ label: 'Introduction', link: '/get-started/introduction' },
					{ label: 'Installation', link: '/get-started/installation' },
					{ label: 'Reset Password', link: '/get-started/reset-password' },
					{ label: 'Uninstall', link: '/get-started/uninstall' },
				  ],
				},
				{
				  label: 'Domain',
				  items: [
					{ label: 'Web Domain Setup', link: '/domains/web-domain-setup' },
					{ label: 'Application Setup', link: '/domains/application-setup' },
				  ],
				},
				{
				  label: 'Server',
				  items: [
					{ label: 'Overview', link: '/server/overview' },
				  ],
				},
				{
				  label: 'Application',
				  items: [
					{ label: 'Overview', link: '/application/overview' },
					{ label: 'Build Type', link: '/application/build-type' },
				  ],
				},
				{
				  label: 'Databases',
				  items: [
					{ label: 'Overview', link: '/databases/overview' },
					{ label: 'Backups', link: '/databases/backups' },
				  ],
				},
				{
				  label: 'Traefik',
				  items: [
					{ label: 'Overview', link: '/traefik/overview' },
				  ],
				},
				{
				  label: 'Docker',
				  items: [
					{ label: 'Overview', link: '/docker/overview' },
				  ],
				},
				{
				  label: 'Monitoring',
				  items: [
					{ label: 'Overview', link: '/monitoring/overview' },
				  ],
				},
				{
				  label: 'Deployment',
				  items: [
					{ label: 'Oracle Cloud', link: '/deployment/oracle-cloud' },
				  ],
				},
				{
				  label: 'Extra',
				  items: [
					{ label: 'Comparison', link: '/extra/comparison' },
				  ],
				},
			  ],
			}),
		  ],
		});