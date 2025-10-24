import { type Project, ProjectRole } from '$lib/types';

// Define priority order of roles (same as enum order)
const rolePriority = [
	ProjectRole.Developer,
	ProjectRole.Maintainer,
	ProjectRole.CoreTeam,
	ProjectRole.Founder,
	ProjectRole.CoFounder,
	ProjectRole.Contributor
];

// Helper function to find the highest priority role index within a project's roles
function getHighestPriorityRoleIndex(project: Project): number {
	for (const role of rolePriority) {
		if (project.roles.includes(role)) {
			return rolePriority.indexOf(role);
		}
	}
	return rolePriority.length; // If no role found, place at the end
}

// Sorting function for array of projects
export function sortProjectsByRolePriority(projects: Project[]): Project[] {
	return projects.slice().sort((a, b) => {
		const aPriority = getHighestPriorityRoleIndex(a);
		const bPriority = getHighestPriorityRoleIndex(b);
		return aPriority - bPriority;
	});
}

export const PROJECTS: Project[] = [
	{
		name: 'Gleam',
		website: 'https://gleam.run',
		description: 'Gleam is a friendly language for building type-safe systems that scale.',
		repo: 'https://github.com/gleam-lang/gleam/',
		roles: [ProjectRole.Contributor]
	},
	{
		name: 'GitHub Desktop',
		website: 'https://github.com/apps/desktop',
		description: 'GitHub’s official desktop client',
		roles: [ProjectRole.Contributor],
		repo: 'https://github.com/desktop/desktop/'
	},
	{
		name: 'Zed',
		website: 'https://zed.dev',
		description:
			'Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter.',
		roles: [ProjectRole.Contributor],
		repo: 'https://github.com/zed-industries/zed/'
	},
	{
		name: 'GitHub CLI (aka gh)',
		website: 'https://cli.github.com',
		description: 'GitHub’s official command line tool',
		roles: [ProjectRole.Contributor],
		repo: 'https://github.com/cli/cli/'
	},
	{
		name: 'Catppuccin port for Eza',
		description: '📂 Soothing pastel theme for eza',
		roles: [ProjectRole.Maintainer],
		repo: 'https://github.com/catppuccin/eza'
	},
	{
		name: 'envfetch',
		description: 'Lightweight cross-platform CLI tool for working with environment variables.',
		roles: [ProjectRole.Developer],
		repo: 'https://github.com/ankddev/envfetch/'
	},
	{
		name: '/dev/ankddev',
		description: 'This website :)',
		roles: [ProjectRole.Developer],
		repo: 'https://github.com/ankddev/website/'
	}
];
