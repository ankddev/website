<script lang="ts">
	import type { QAEntry } from '$data/faq';

	const { question, answer }: QAEntry = $props();
</script>

<div class="w-full block">
	<div class="font-bold">Q: {question}</div>
	<div class="text-driftwood-900">
		<span class="font-bold text-brand-foreground">A:</span>
		{answer}
	</div>
</div>
