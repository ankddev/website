import type { Article, Tag } from '$lib/types.ts';
import { json, type RequestHandler } from '@sveltejs/kit';

async function getArticles() {
	const articles: Article[] = [];
	const paths = import.meta.glob('$content/articles/*.mdx', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('content/').at(-1)?.replace('.mdx', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Article, 'slug'>;
			const article = { ...metadata, slug } satisfies Article;

			articles.push(article);
		}
	}

	return { articles };
}

async function getTags() {
	const articles = (await getArticles()).articles;
	const tagMap: Record<string, number> = {};

	articles.forEach((article) => {
		article.tags?.forEach((tag) => {
			if (tagMap[tag]) {
				tagMap[tag]++;
			} else {
				tagMap[tag] = 1;
			}
		});
	});

	const tags: Tag[] = Object.entries(tagMap).map(([name, amount]) => ({ name, amount }));

	return { tags };
}

export const GET: RequestHandler = async () => {
	const data = await getTags();
	const { tags } = data;

	return json({
		tags,
		amount: tags.length
	});
};
