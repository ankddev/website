<script lang="ts">
	import { untrack } from 'svelte';
	import ArticleTitle from './ArticleTitle.svelte';
	import { animate } from 'animejs';
	import type { Article } from '@/lib/types';
	import Link from '$components/Link.svelte';
	import Badge from '$components/Badge.svelte';
	import { resolve } from '$app/paths';

	interface Props {
		meta: Article;
	}

	const { meta }: Props = $props();
	const title = $derived(meta.title);
	const tags = $derived(meta.tags);
	const date = $derived(new Date(meta.date));
	const description = $derived(meta.description);

	let descriptionRef: HTMLElement;

	$effect(() => {
		if (!descriptionRef) return;
		animate(descriptionRef, { opacity: 1, duration: 400 });
		untrack(() => {});
	});

	const formattedDate = $derived(
		date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);
</script>

<hgroup class="pb-6 border-b border-b-dashed border-driftwood-300">
	<ArticleTitle {title} />
	<div bind:this={descriptionRef} class="opacity-0">
		<div class="whitespace-pre-line text-driftwood-700">{description}</div>
	</div>
	{#if tags}
		<div class="flex mt-1 gap-1">
			{#each tags as tag (tag)}
				<Link href={`${resolve('/articles')}?q=${tag}`} darker><Badge>{tag}</Badge></Link>
			{/each}
		</div>
	{/if}
	<div class="text-driftwood-800/40">
		{formattedDate}
	</div>
</hgroup>
