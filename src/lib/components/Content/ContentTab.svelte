<script>
	import { getContext } from 'svelte';
	const TABS_CONTEXT = 'tabs';

	const { children, title = '(Empty)', class: className = '' } = $props();

	const { register, isActive } = getContext(TABS_CONTEXT);

	const idx = register({
		title
	});
</script>

<div class={['grow shrink-0 w-full', !isActive(idx) && 'hidden', className]}>
	{@render children?.()}
</div>
