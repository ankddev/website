<script lang="ts">
	import { animate } from 'animejs';
	import { untrack } from 'svelte';
	interface Props {
		class?: string;
	}

	const { class: className }: Props = $props();

	let waveEmojiRef: Element;

	$effect(() => {
		animate(waveEmojiRef!, {
			delay: 3,
			easing: 'easeInOutQuad',
			duration: 1300,
			rotate: [{ to: 20 }, { to: -5 }, { to: 0 }]
		});
		untrack(() => {});
	});
</script>

<div class={['flex flex-col gap-1', className]}>
	<div class="text-xl font-semibold flex gap-1">
		Hello! <div bind:this={waveEmojiRef}>👋</div>
	</div>
	<div>
		<div>
			I'm Andrey, system and desktop developer. I mainly write code using Rust, Go and Gleam. I like
			playing chess and running.
		</div>
	</div>
</div>
