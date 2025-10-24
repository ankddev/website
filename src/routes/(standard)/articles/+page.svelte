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
	let countRef: HTMLElement | null = $state(null);

	$effect(() => {
		animate([...postsRef, countRef], {
			...fadeUp,
			delay: (_, i) => i * 50
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
	<Input
		id="search"
		bind:value={query}
		role="search"
		class="w-full"
		placeholder="Type something..."
	/>
	<div bind:this={countRef} class="text-center text-driftwood-900/70 mt-2">
		{#if posts != null && posts.length !== 0}
			Found {posts.length} {posts.length == 1 ? 'post' : 'posts'}
		{:else}
			Nothing was found!
		{/if}
	</div>

	{#if posts == null || posts.length !== 0}
		<div class="flex items-center gap-8 flex-wrap mt-4">
			{#each posts as post, index (post.slug + index)}
				<div id="post-{post}" class="opacity-0 w-full" bind:this={postsRef[index]}>
					<ListingArticle {...post}>{post.title}</ListingArticle>
				</div>
			{/each}
		</div>
	{/if}
</main>
