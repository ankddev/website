import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import unocss from 'unocss/vite';
import extractorSvelte from '@unocss/extractor-svelte';
import { fileURLToPath } from 'node:url';
import unoConfig from './uno.config';

const resolve = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
	server: {
		fs: {
			allow: [resolve('./content'), resolve('./uno.config.ts')]
		}
	},
	define: {
		unotheme: unoConfig.theme
	},
	resolve: {
		alias: [
			{
				find: '$content',
				replacement: resolve('./content')
			}
		]
	},
	plugins: [
		sveltekit(),
		unocss({
			extractors: [extractorSvelte()]
		})
	]
});
