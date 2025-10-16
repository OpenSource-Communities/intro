
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Open Source Education Path",
	tagline:
		"Empowering Your Open Source Journey: From First Contribution to Project Leadership",
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

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
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
			navbar: {
				title: "Open Source Education Path",
				logo: {
					alt: "Open Source Communities Logo",
					src: "img/favicon.png",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "introToOSS",
						position: "left",
						label: "Intro to Open Source",
					},
					{
						type: "docSidebar",
						sidebarId: "becomingAMaintainer",
						position: "left",
						label: "Becoming a Maintainer",
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
					alt: "Open Source Communities logo",
					src: "img/favicon.png",
					href: "https://osscommunities.com/",
					height: 100,
				},
				style: "light",
				links: [
					{
						title: "Learn",
						items: [
							{
								label: "Contributing guide",
								to: "https://github.com/OpenSource-Communities/intro/blob/main/contributing/CONTRIBUTING.md",
							},
							{
								label: "Open Source Courses",
								to: "https://intro.opensauced.pizza/#/",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "GitHub",
								href: "https://github.com/orgs/OpenSource-Communities/discussions",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Open Source Communities. Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
}

export default config;
