<script lang="ts">
	import Link from '$components/Link.svelte';
	import type { Article } from '$lib/types';
	import Badge from '$components/Badge.svelte';
	import type { Snippet } from 'svelte';
	import { resolve } from '$app/paths';

	interface Props extends Article {
		children: Snippet;
	}

	const { slug: href, description, tags, date: rawDate, pinned, children }: Props = $props();

	const date = $derived(new Date(rawDate));
	const formattedDate = $derived(
		date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);
</script>

<div class="w-full block">
	{#if pinned}<div title="Pinned" class="i-tabler-pin-filled"></div>{/if}
	<a class="font-bold" {href}>{@render children()}</a>
	<div class="text-driftwood-900">
		{description}
	</div>
	{#if tags}
		<div class="flex mt-1 gap-1">
			{#each tags as tag (tag)}
				<Link href={`${resolve('/articles')}?q=${tag}`} darker><Badge>{tag}</Badge></Link>
			{/each}
		</div>
	{/if}
	<div class="flex mt-1 text-sm justify-between">
		<Link class="font-medium flex gap-1 items-center text-driftwood-900" {href}>
			Read more <div class="i-tabler-arrow-right"></div>
		</Link>
		<div class="text-driftwood-800/40">
			{formattedDate}
		</div>
	</div>
</div>
