<script lang="ts">
	import Link from '$components/Link.svelte';
	import type { Tag } from '$lib/types';
	import Badge from '$components/Badge.svelte';

	const { amount, name }: Tag = $props();
</script>

<div class="flex items-center">
	<Link
		darker
		href={`/articles?q=${name}`}
		class="listing-link ml-4 relative text-xl text-driftwood-600 font-semibold"
	>
		<Badge>{name}</Badge>
	</Link>
	<div class="ml-4 border-b border-driftwood-600 border-b-dashed h-0 w-full"></div>
	<div
		class="ml-4 shrink-0 flex border-driftwood-600 items-center justify-center rounded-full border w-4 h-4 text-[9px]"
	>
		{amount}
	</div>
</div>
