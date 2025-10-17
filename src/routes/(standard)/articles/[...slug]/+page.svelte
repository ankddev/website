<script lang="ts">
	import '@/styles/content.css';
	import ArticleHeader from '$components/Article/ArticleHeader.svelte';
	import { fadeRight } from '$lib/animations/fadeRight';
	import { animate } from 'animejs';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const meta = $derived(data.meta);

	let contentRef = $state<Element>();

	$effect(() => {
		animate(contentRef!, {
			...fadeRight,
			x: { from: '-1.25em', ease: 'outCirc' },
			duration: 400
		});
	});
</script>

<svelte:head>
	<title>/dev/ankddev: {meta.title}</title>
</svelte:head>

<article class="mt-16">
	<ArticleHeader {meta} />

	<div bind:this={contentRef} class="opacity-0 mt-8">
		<data.content />
	</div>
</article>
