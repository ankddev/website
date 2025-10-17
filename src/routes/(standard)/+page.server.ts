import type { ArticlesResponse } from '$lib/types';
import type { PageServerLoad } from './$types';

// Maximum number of articles to show on main page
const LIMIT: number = 5;

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch(`/api/articles?limit=${LIMIT}`);
	const data: ArticlesResponse = await response.json();
	return data;
};
