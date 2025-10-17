import { createHighlighter } from 'shiki';

const THEME = 'vitesse-light';
const SUPPORTED_LANGS = [
	'vue',
	'yaml',
	'javascript',
	'typescript',
	'dockerfile',
	'go',
	'gleam',
	'json',
	'lua',
	'jsonc',
	'tsx',
	'jsx',
	'bash',
	'html',
	'svelte',
	'zig',
	'rust',
	'css'
];

const highlighter = await createHighlighter({
	themes: [THEME],
	langs: SUPPORTED_LANGS
});

export { highlighter };
