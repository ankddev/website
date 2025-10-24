<script lang="ts">
	import ListingTag from '$components/Listing/ListingTag.svelte';
	import { animate } from 'animejs';
	import type { PageProps } from './$types';
	import { fadeUp } from '$lib/animations/fadeUp';
	import type { Tag } from '@/lib/types';

	let { data }: PageProps = $props();
	let tags = $state<Tag[] | null>(data.posts);
	let tagsRef: HTMLElement[] = $state([]);
	let countRef: HTMLElement | null = $state(null);

	$effect(() => {
		animate([...tagsRef, countRef], {
			...fadeUp,
			delay: (_, i) => i * 50
		});
	});
</script>

<main class="mt-10">
	<div bind:this={countRef} class="text-center text-driftwood-900/70 mt-2">
		{#if tags != null && tags.length !== 0}
			There {tags.length == 1 ? 'is' : 'are'} {tags.length} {tags.length == 1 ? 'tag' : 'tags'}
		{/if}
	</div>

	<div class="flex items-center gap-3 flex-wrap mt-4">
		{#each tags as tag, index (tag)}
			<div id="tag-{tag}" class="opacity-0 w-full" bind:this={tagsRef[index]}>
				<ListingTag {...tag} />
			</div>
		{/each}
	</div>
</main>
