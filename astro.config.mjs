import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://erica-iris.github.io/',
	integrations: [mdx(), sitemap()],
	base: '/Bloga',
	port: 3000,
});