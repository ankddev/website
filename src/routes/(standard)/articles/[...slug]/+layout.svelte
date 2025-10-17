<script lang="ts">
	import ArticleNav from '$components/Article/ArticleNav.svelte';
	const { children } = $props();
</script>

<ArticleNav>
	{@render children?.()}
</ArticleNav>
