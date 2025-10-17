<script>
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<div class="h-screen w-full flex flex-col items-center justify-center">
	<div class="text-center">
		<h5>Oops...</h5>
		<h1>
			{#if page.status === 404}
				Page not found :(
			{:else}
				Something went wrong :(
			{/if}
		</h1>
		<h4>
			{page.status}
			{page.error?.message}
		</h4>
		<a href={resolve('/')} class="mt-8 block">
			<button
				class="py-1.5 p-1 border-2 border-dashed rounded-md border-driftwood-800/30 hover:border-driftwood-800/50 transition-colors px-6"
			>
				Take me home</button
			>
		</a>
	</div>
</div>
