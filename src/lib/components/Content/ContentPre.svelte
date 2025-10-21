<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		meta?: string;
		language: string;
	}
	const { children, meta = '', language }: Props = $props();

	const parseMetaFields = (metaString: string): Record<string, string> => {
		const decodedMeta = decodeURI(metaString);
		const matches = decodedMeta.match(/\w+=([\w\d.]+|".+"|'.+')/g);

		if (!matches) return {};

		return matches.reduce(
			(acc, curr) => {
				const [key, value] = curr.split('=');
				const cleanedValue = value?.replace(/(^["'])|(["']$)/g, '');
				acc[key] = cleanedValue || '';
				return acc;
			},
			{} as Record<string, string>
		);
	};

	const parseFlags = (metaString: string): string[] => {
		const decodedMeta = decodeURI(metaString);
		const matches = decodedMeta.match(/(?<![=])\s?\w+\s?/g);
		return matches?.map((match) => match.trim()) || [];
	};

	const metaFields = $derived.by(() => parseMetaFields(meta));
	const flags = $derived.by(() => parseFlags(meta));

	let codeRef = $state<Element>();
	let lastCopiedTimerId = $state<ReturnType<typeof setTimeout> | null>(null);

	const copy = async () => {
		try {
			const codeElement = codeRef!.getElementsByTagName('code')[0];
			const sourceCode = codeElement.textContent;
			await navigator.clipboard.writeText(sourceCode!);

			if (lastCopiedTimerId) clearTimeout(lastCopiedTimerId);

			lastCopiedTimerId = setTimeout(() => {
				lastCopiedTimerId = null;
			}, 5000);
		} catch (err) {
			console.error('Failed to copy source code:', err);
		}
	};
</script>

<div class={['codesnippet w-full mt-4 mb-6']}>
	{#if metaFields['filename']}
		<div
			class="border-b pb-1 flex justify-between text-xs font-semibold border-dashed w-full mb-2 border-frangipani-800/80"
		>
			<div>
				{metaFields['filename']}
			</div>
			<div>
				{language}
			</div>
		</div>
	{/if}
	<div class="relative">
		<div bind:this={codeRef} class="codeblock">
			{@render children?.()}

			<!-- Copy button -->
			<button
				onclick={copy}
				aria-label="copy"
				class={[
					'copy hidden absolute z-10 cursor-pointer transition-colors top-0 right-0 p-2 rounded-md',
					flags.includes('error')
						? 'bg-rose-100 hover:bg-rose-200'
						: 'bg-frangipani-50 hover:bg-driftwood-200/30'
				]}
			>
				{#if lastCopiedTimerId}
					<div class="i-tabler-check"></div>
				{:else}
					<div class="i-tabler-copy"></div>
				{/if}
			</button>
		</div>
	</div>
</div>

<style>
	.codeblock {
		--at-apply: max-w-full overflow-x-auto;
		:global(pre) {
			background: transparent !important;

			& .line {
				line-height: 1.9;
			}
		}

		:global(pre.has-focused) {
			& :not(.focused).line {
				filter: blur(2px);
			}

			&:hover :not(.focused).line {
				filter: none;
			}
		}

		&:hover .copy {
			display: initial;
		}
	}
</style>
