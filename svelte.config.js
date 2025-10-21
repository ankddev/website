import adapterVercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { join } from 'node:path';
import { highlighter } from './src/lib/data/highlighter.js';
import { transformerNotationFocus } from '@shikijs/transformers';

const ContentLayout = join(
	import.meta.dirname,
	'./src/lib/components/Content/ContentContext.svelte'
);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: {
				_: ContentLayout
			},
			extensions: ['.mdx'],
			highlight: {
				highlighter: async (code, lang, meta) => {
					const html = escapeSvelte(
						highlighter.codeToHtml(code, {
							lang,
							theme: 'vitesse-light',
							transformers: [transformerNotationFocus()]
						})
					);

					return `<Components.pre
						  meta=${JSON.stringify(encodeURI(meta))}
							language=${lang}
						>{@html \`${html}\`}</Components.pre>`;
				}
			}
		})
	],
	kit: {
		adapter: adapterVercel(),
		alias: {
			'@/*': 'src/*',
			'$components/*': 'src/lib/components/*',
			$unoconfig: './uno.config.ts',
			'$content/*': './content/*',
			'$data/*': './src/lib/data/*'
		}
	},
	inlineStyleThreshold: 1024,
	extensions: ['.svelte', '.mdx']
};

export default config;
