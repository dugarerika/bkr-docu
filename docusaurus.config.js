const remarkImages = require('remark-images');
const rehypeTruncate = require('rehype-truncate');

module.exports = {
	title: 'Bookr',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico.svg',
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'Bookr',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg'
			},
			items: [
				{
					to: 'docs/',
					activeBasePath: 'docs/',
					label: 'Customer App',
					position: 'left'
				},
				{
					to: 'wiki/',
					activeBasePath: 'wiki/',
					label: 'WIKI',
					position: 'left'
				},
				{ to: 'blog', label: 'Blog', position: 'left' },
				{
					href: 'https://github.com/facebook/docusaurus',
					label: 'GitHub',
					position: 'right'
				}
			]
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Style Guide',
							to: 'docs/'
						},
						{
							label: 'Second Doc',
							to: 'docs2/'
						}
					]
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Stack Overflow',
							href:
								'https://stackoverflow.com/questions/tagged/docusaurus'
						},
						{
							label: 'Discord',
							href:
								'https://discordapp.com/invite/docusaurus'
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/docusaurus'
						}
					]
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: 'blog'
						},
						{
							label: 'GitHub',
							href: 'https://github.com/facebook/docusaurus'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
		}
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					remarkPlugins: [
						remarkImages
					],
					rehypePlugins: [
						rehypeTruncate
					]
				},
				wiki: {
					sidebarPath: require.resolve('./sidebars.js'),
					remarkPlugins: [
						remarkImages
					],
					rehypePlugins: [
						rehypeTruncate
					]
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/edit/master/website/blog/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	]
};
