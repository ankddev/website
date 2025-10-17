<script lang="ts">
	import Link from '$components/Link.svelte';
	import { DISCORD } from '$lib/data/links';

	interface Props {
		class?: string;
	}

	const currentYear = new Date().getFullYear();

	const { class: className }: Props = $props();
</script>

<footer class={['flex pt-4 flex-col items-center', className]}>
	<div class="flex justify-center items-center">
		Made with &nbsp;<span class="h-4 i-tabler-heart-filled text-red-500"></span>&nbsp;and&nbsp;
		<a href="https://svelte.dev" target="_blank">
			<img
				class="h-4"
				alt="svelte icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"
			/>
		</a>
	</div>
	<div class="text-sm mt-1">© Andrey Kozhev, {currentYear}</div>
	<div
		class="flex flex-col border-t border-driftwood-800/20 justify-center w-full border-dashed md:border-0 pt-2 md:pt-0 md:flex-row items-center gap-1 mt-3 md:gap-2 md:mt-2"
	>
		<Link href={DISCORD.link}>Write me on Discord</Link>
		<span class="md:block hidden"> • </span>
		<Link target="_blank" href="https://github.com/ankddev/dotfiles">My dotfiles</Link>
		<span class="md:block hidden"> • </span>
		<Link target="_blank" href="https://github.com/ankddev/website">Source code</Link>
	</div>
</footer>
