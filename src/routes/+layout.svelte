<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import 'virtual:uno.css';
	import '@/styles/app.css';
	import { type Snippet } from 'svelte';
	// Font for titles
	import '@fontsource-variable/lexend';
	// Font for main content
	import '@fontsource-variable/outfit';
	// Font for code blocks
	import '@fontsource-variable/martian-mono';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	const meta = {
		title: '/dev/ankddev',
		keywords: 'blog, ankddev, dev, tech, programming, it, rust, golang, gleam, go',
		description: '/dev/ankddev - personal site, blog and portfolio of ankddev'
	};
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="keywords" content={meta.keywords} />
</svelte:head>

{@render children()}
