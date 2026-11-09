
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "ওপেন সোর্স শিক্ষা পথ",
	tagline:
		"আপনার ওপেন সোর্স যাত্রাকে শক্তিশালী করুন: প্রথম অবদান থেকে প্রজেক্টের নেতৃত্ব পর্যন্ত",
	favicon: "img/favicon.png",

	// Set the production url of your site here
	url: "https://osscommunities.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "OpenSource-Communities", // Usually your GitHub org/user name.
	projectName: "Open Source Learning Path", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Client modules - scripts that run on the client side
	clientModules: [
		require.resolve('./src/js/mobileWordWrap.js'),
	],

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "bn",
		locales: ["bn"],
		localeConfigs: {
			bn: {
				label: "বাংলা (বাংলাদেশ)",
				direction: "ltr",
				htmlLang: "bn-BD",
			},
		},
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js",
					// Dynamic editUrl construction
					editUrl: ({ versionDocsDirPath, docPath }) =>
						`https://github.com/OpenSource-Communities/intro/edit/main/${versionDocsDirPath}/${docPath}`,
					routeBasePath: "/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/docusaurus-social-card.jpg",
			metadata: [
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
				},
			],
			navbar: {
				title: "ওপেন সোর্স শিক্ষা পথ",
				logo: {
					alt: "ওপেন সোর্স কমিউনিটিজ লোগো",
					src: "img/favicon.png",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "introToOSS",
						position: "left",
						label: "ওপেন সোর্স পরিচিতি",
					},
					{
						type: "docSidebar",
						sidebarId: "becomingAMaintainer",
						position: "left",
						label: "মেইনটেইনার হওয়ার পথে",
					},
					{
						to: "/progress",
						label: "আমার অগ্রগতি",
						position: "right",
					},
					{
						href: "https://github.com/OpenSource-Communities/intro",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				logo: {
					alt: "ওপেন সোর্স কমিউনিটিজ লোগো",
					src: "img/favicon.png",
					href: "https://osscommunities.com/",
					height: 100,
				},
				style: "light",
				links: [
					{
						title: "শিখুন",
						items: [
							{
								label: "অবদান রাখার নির্দেশিকা",
								to: "https://github.com/OpenSource-Communities/intro/blob/main/contributing/CONTRIBUTING.md",
							},
							{
								label: "ওপেন সোর্স কোর্সসমূহ",
								to: "https://intro.opensauced.pizza/#/",
							},
						],
					},
					{
						title: "কমিউনিটি",
						items: [
							{
								label: "GitHub",
								href: "https://github.com/orgs/OpenSource-Communities/discussions",
							},
						],
					},
				],
				copyright: `কপিরাইট © ${new Date().getFullYear()} ওপেন সোর্স কমিউনিটিজ। Docusaurus দিয়ে তৈরি।`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
}

export default config;
