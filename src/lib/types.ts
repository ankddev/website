export interface Article {
	title: string;
	slug: string;
	description: string;
	tags: string[];
	date: string;
	pinned: boolean;
}

export interface Tag {
	name: string;
	amount: number;
}

export interface TagsResponse {
	amount: number;
	tags: Tag[];
}

export interface ArticlesResponse {
	amount: number;
	articles: Article[];
}

export enum ProjectRole {
	Developer,
	Maintainer,
	CoreTeam,
	Founder,
	CoFounder,
	Contributor
}

export interface Project {
	name: string;
	description: string;
	website?: string;
	repo?: string;
	roles: ProjectRole[];
}

export interface SkillGroup {
	category: string;
	skills: Array<{
		name: string;
		link?: string;
	}>;
}
