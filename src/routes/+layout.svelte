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

	function viewportHeight() {
		return window.innerHeight;
	}

	function handleKeyDown(event: KeyboardEvent) {
		const { key } = event;
		switch (key) {
			case 'j':
				window.scrollBy(0, 0.5 * viewportHeight());
				break;
			case 'k':
				window.scrollBy(0, -0.5 * viewportHeight());
				break;
		}
	}
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="keywords" content={meta.keywords} />
</svelte:head>

<svelte:window onkeydown={handleKeyDown} />

{@render children()}
