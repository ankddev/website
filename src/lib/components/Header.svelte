<script lang="ts">
	import Link from '$components/Link.svelte';
	import { LINKS } from '$lib/data/links';
	import Logo from './Logo.svelte';

	interface Props {
		class?: string | string[];
		onmenu: () => void;
	}
	const { class: className = '', onmenu }: Props = $props();
</script>

<header class={['pr-2 xl:pr-0 flex items-center justify-between', className]}>
	<Logo />
	<div class="hidden sm:flex flex-col gap-1">
		<nav>
			<ul class="flex gap-5 justify-end items-center">
				<li>
					<Link class="relative" darker href="/articles">
						Articles
						<div
							class="outer-icon absolute -top-0.55 -right-3 i-tabler-arrow-up-right text-xs"
						></div>
					</Link>
				</li>
				<li>
					<Link class="relative" darker href="https://github.com/ankddev/dotfiles">
						Dotfiles
						<div
							class="outer-icon absolute -top-0.55 -right-3 i-tabler-arrow-up-right text-xs"
						></div>
					</Link>
				</li>
			</ul>
		</nav>
		<div class="border-b-1 border-dashed border-driftwood-800/70"></div>
		<aside>
			<ul class="flex text-xl gap-3 justify-end items-center">
				{#each LINKS as link (link.link)}
					<li>
						<Link darker target="_blank" aria-label={link.title} title={link.title} href={link.link}
							><span class={link.icon_class}></span></Link
						>
					</li>
				{/each}
			</ul>
		</aside>
	</div>
	<div class="sm:hidden">
		<button aria-label="Menu" onclick={onmenu} class="py-1 pl-3 text-xl cursor-pointer">
			<div class="i-tabler-menu-2"></div>
		</button>
	</div>
</header>
