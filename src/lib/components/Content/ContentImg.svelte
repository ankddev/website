<script>
	import zoom from 'medium-zoom';
	const { src, alt } = $props();
	let imageRef = $state();

	const handleClick = () => {
		zoom(imageRef);
	};

	const handleKeyDown = (/** @type {{ key: string; preventDefault: () => void; }} */ event) => {
		// Activate zoom on Enter or Space key press
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			zoom(imageRef);
		}
	};
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
<img
	bind:this={imageRef}
	role="button"
	tabindex="0"
	onclick={handleClick}
	onkeydown={handleKeyDown}
	class="w-full block rounded-md mt-4 mb-6"
	{src}
	{alt}
/>

<style>
	:global {
		.medium-zoom-overlay {
			z-index: 1000;
			background: theme('colors.frangipani.50') !important;
		}

		.medium-zoom-image {
			z-index: 1001;
		}
	}
</style>
