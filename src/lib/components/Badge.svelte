<script>
	const { children, class: className = '', title = '' } = $props();
</script>

<div {title} class={['w-fit text-sm rounded-sm bg-frangipani-800/10 py-0.25 px-2', className]}>
	{@render children()}
</div>
