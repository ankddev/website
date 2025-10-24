<script lang="ts">
	import { PROJECTS, sortProjectsByRolePriority } from '$data/projects';
	import { FAQ } from '$data/faq';
	import { SKILLS } from '$data/skills';
	import ListingArticle from '$components/Listing/ListingArticle.svelte';
	import ListingHeader from '$components/Listing/ListingHeader.svelte';
	import ListingProject from '$components/Listing/ListingProject.svelte';
	import type { PageProps } from './$types';
	import type { ArticlesResponse } from '$lib/types';
	import Greeting from '$components/Greeting.svelte';
	import { animate } from 'animejs';
	import { fadeUp } from '@/lib/animations/fadeUp';
	import QA from '$components/QA.svelte';
	import SkillGroup from '$components/SkillGroup.svelte';

	let { data }: PageProps = $props();
	const posts = $derived((data as ArticlesResponse).articles);
	const amount = $derived((data as ArticlesResponse).amount);

	let articlesRef: HTMLElement;
	let projectsRef: HTMLElement;
	let faqRef: HTMLElement;
	let skillsRef: HTMLElement;
	let greetingRef: HTMLElement;

	$effect(() => {
		animate(greetingRef, {
			...fadeUp
		});
		animate(skillsRef, {
			...fadeUp,
			delay: 50
		});
		animate(articlesRef, {
			...fadeUp,
			delay: 100
		});
		animate(projectsRef, {
			...fadeUp,
			delay: 150
		});
		animate(faqRef, {
			...fadeUp,
			delay: 200
		});
	});

	let projects = sortProjectsByRolePriority(PROJECTS);
</script>

<div id="greeting" class="opacity-0" bind:this={greetingRef}>
	<Greeting class="mt-12" />
</div>

<div id="skills" bind:this={skillsRef} class="flex opacity-0 flex-col gap-2 mt-12">
	<ListingHeader>Skills</ListingHeader>
	{#each SKILLS as skillGroup (skillGroup.category)}
		<SkillGroup {skillGroup} />
	{/each}
</div>

<div id="articles" bind:this={articlesRef} class="flex opacity-0 flex-col gap-2 mt-12">
	<ListingHeader counter={amount} href="/articles">Articles</ListingHeader>
	{#each posts as post (post.slug)}
		<ListingArticle {...post}>{post.title}</ListingArticle>
	{/each}
</div>

<div id="projects" bind:this={projectsRef} class="flex opacity-0 flex-col gap-1 mt-12">
	<ListingHeader description="Some of projects that I develop, maintain or have founded"
		>Projects</ListingHeader
	>
	<div class="flex items-center gap-x-8 gap-y-2 flex-wrap">
		{#each projects as project (project.name)}
			<ListingProject
				name={project.name}
				description={project.description}
				roles={project.roles}
				repo={project.repo}
				website={project.website}
			/>
		{/each}
	</div>
</div>

<div id="faq" bind:this={faqRef} class="flex opacity-0 flex-col gap-1 mt-12">
	<ListingHeader description="Some intereseting things about me in format of questions and answers"
		>FAQ</ListingHeader
	>
	<div class="flex items-center gap-x-8 gap-y-2 flex-wrap">
		{#each FAQ as faq (faq)}
			<QA question={faq.question} answer={faq.answer} />
		{/each}
	</div>
</div>
