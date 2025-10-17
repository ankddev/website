<script lang="ts">
	import Link from '$components/Link.svelte';
	import { ProjectRole, type Project } from '$lib/types';
	import Badge from '$components/Badge.svelte';

	const { name, description, roles, repo, website }: Project = $props();
</script>

<div class="w-full block">
	<div class="font-bold">{name}</div>
	<div class="text-driftwood-900">
		{description}
	</div>
	<div class="flex mt-1 text-sm">
		{#if website}
			<Link class="font-medium flex gap-1 items-center text-driftwood-900" darker href={website}>
				Website <div class="i-tabler-arrow-right"></div>
			</Link>
			&nbsp;
		{/if}
		{#if repo}
			<Link class="font-medium flex gap-1 items-center text-driftwood-900" darker href={repo}>
				Repository <div class="i-tabler-arrow-right"></div>
			</Link>
		{/if}
	</div>
	<div class="flex mt-1 gap-1">
		{#if roles.includes(ProjectRole.Contributor)}
			<Badge title="I've contributed to this project">Contributor</Badge>
		{/if}
		{#if roles.includes(ProjectRole.Maintainer)}
			<Badge title="I maintain this project">Maintainer</Badge>
		{/if}
		{#if roles.includes(ProjectRole.CoreTeam)}
			<Badge title="I'm member of this project's core team">Core Team</Badge>
		{/if}
		{#if roles.includes(ProjectRole.Founder)}
			<Badge title="I'm founder of this project">Founder</Badge>
		{/if}
		{#if roles.includes(ProjectRole.CoFounder)}
			<Badge title="I'm co-founder of this project">Co-founder</Badge>
		{/if}
		{#if roles.includes(ProjectRole.Developer)}
			<Badge title="I'm developer of this project">Developer</Badge>
		{/if}
	</div>
</div>
