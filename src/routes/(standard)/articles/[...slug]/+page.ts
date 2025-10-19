import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Article } from '@/lib/types';
import type { Component } from 'svelte';

export const load: PageLoad = async ({ params, url }) => {
	try {
		const post: {
			default: Component<object, object, ''>;
			metadata: Article;
		} = await import(`$content/articles/${params.slug}.mdx`);

		return {
			content: post.default,
			meta: post.metadata,
			baseURL: url.origin
		};
	} catch (err) {
		console.log(err);
		error(404, `Could not find ${params.slug}`);
	}
};
