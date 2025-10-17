<script lang="ts">
	import type { SkillGroup } from '$lib/types';

	export let skillGroup: SkillGroup;
	const { category, skills } = skillGroup;
</script>

<div>
	<span class="text-driftwood-700 font-semibold">{category}:</span>
	{#each skills as skill, idx (skill.name + skill.link)}
		{#if skill.link}
			<a
				class="hover:text-driftwood-900 transition-colors"
				href={skill.link}
				target="_blank"
				rel="noopener noreferrer"
			>
				{skill.name}
				<!-- eslint-disable-next-line svelte/no-useless-mustaches -->
			</a>{#if idx < skills.length - 1}<span>{', '}</span>{/if}
		{:else}
			<span>
				{skill.name}
				<!-- eslint-disable-next-line svelte/no-useless-mustaches -->
			</span>{#if idx < skills.length - 1}<span>{', '}</span>{/if}
		{/if}
	{/each}
</div>
