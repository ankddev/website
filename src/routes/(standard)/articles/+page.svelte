<script lang="ts">
	import ListingArticle from '$components/Listing/ListingArticle.svelte';
	import { animate } from 'animejs';
	import type { PageProps } from './$types';
	import { fadeUp } from '$lib/animations/fadeUp';
	import Input from '@/lib/components/Input.svelte';
	import type { Article } from '@/lib/types';
	import { debounce } from '@/lib/utils/debounce';

	let { data }: PageProps = $props();
	let posts = $state<Article[] | null>(data.posts);
	let query = $state(data.q || '');
	let postsRef: HTMLElement[] = $state([]);
	let notFoundRef: HTMLElement | null = $state(null);

	$effect(() => {
		animate([...postsRef, notFoundRef], {
			...fadeUp,
			delay: (_, i) => i * 100
		});
	});

	const refetchPosts = debounce(async (query: string) => {
		const req = await fetch(`/api/articles?q=${query}`);
		const data = await req.json();
		posts = data.articles;
	}, 200);

	$effect(() => {
		const normalizedQuery = query.toLowerCase().trim();
		refetchPosts(normalizedQuery);
	});
</script>

<main class="mt-10">
	<div class="text-xs text-driftwood-900/50">Search posts or tags</div>
	<Input bind:value={query} class="w-full" placeholder="Type something..." />
	{#if posts != null && posts.length === 0}
		<div bind:this={notFoundRef} class="text-center text-driftwood-900/70 mt-8">
			Nothing was found!
		</div>
	{:else}
		<div class="flex items-center gap-8 flex-wrap mt-4">
			{#each posts as post, index (post.slug + index)}
				<div class="opacity-0 w-full" bind:this={postsRef[index]}>
					<ListingArticle {...post}>{post.title}</ListingArticle>
				</div>
			{/each}
		</div>
	{/if}
</main>
