<script lang="ts">
	import type { QAEntry } from '$data/faq';

	const { question, answer }: QAEntry = $props();
</script>

<div class="w-full block">
	<div class="font-bold">Q: {question}</div>
	<span class="font-bold">A:</span>
	<span class="text-driftwood-900">
		{answer}
	</span>
</div>
