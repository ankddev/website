<script>
	const { children, class: className = '' } = $props();
</script>

<ul class={['list', className]}>
	{@render children()}
</ul>

<style scoped>
	.list {
		--at-apply: mt-2 ml-4 flex flex-col gap-1;
	}

	:global(.list ul, .list ol) {
		--at-apply: '!mt-0.5';
	}
</style>
