import type { TagsResponse } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const apiUrl = '/api/tags';
	const response = await fetch(apiUrl);
	const data: TagsResponse = await response.json();

	return {
		posts: data.tags
	};
};
