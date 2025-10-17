import type { ArticlesResponse } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const query = url.searchParams.get('q') || '';
	const apiUrl =
		query && query.length >= 3 ? `/api/articles?q=${encodeURIComponent(query)}` : '/api/articles';
	const response = await fetch(apiUrl);
	const data: ArticlesResponse = await response.json();

	return {
		posts: data.articles,
		q: query
	};
};
