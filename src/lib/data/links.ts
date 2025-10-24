interface Link {
	title: string;
	link: string;
	// CSS class for link
	icon_class: string;
}

export const DISCORD: Link = {
	title: 'Discord',
	link: 'https://discord.com/users/1026125665709342771',
	icon_class: 'i-simple-icons-discord'
};

export const GITHUB: Link = {
	title: 'GitHub',
	link: 'https://github.com/ankddev',
	icon_class: 'i-simple-icons-github'
};

export const GITLAB: Link = {
	title: 'GitLab',
	link: 'https://gitlab.com/ankddev',
	icon_class: 'i-simple-icons-gitlab'
};

export const STACKOVERFLOW: Link = {
	title: 'StackOverflow',
	link: 'https://stackoverflow.com/users/29685220/ankddev',
	icon_class: 'i-simple-icons-stackoverflow'
};

export const LINKS: Link[] = [DISCORD, GITHUB, GITLAB, STACKOVERFLOW];
