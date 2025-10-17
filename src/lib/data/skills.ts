import type { SkillGroup } from '$lib/types';

export const SKILLS: SkillGroup[] = [
	{
		category: 'Languages',
		skills: [
			{ name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
			{ name: 'TypeScript', link: 'https://www.typescriptlang.org' },
			{ name: 'Go', link: 'https://golang.org' },
			{ name: 'Rust', link: 'https://rust-lang.org' },
			{ name: 'Gleam', link: 'https://gleam.run' },
			{ name: 'C' }
		]
	},
	{
		category: 'Frontend & Backend',
		skills: [
			{ name: 'Svelte', link: 'https://svelte.dev' },
			{ name: 'SvelteKit', link: 'https://kit.svelte.dev' },
			{ name: 'Tauri', link: 'https://tauri.app' },
			{ name: 'Webpack', link: 'https://webpack.js.org' },
			{ name: 'UnoCSS', link: 'https://github.com/unocss/unocss' },
			{ name: 'Vite', link: 'https://vite.dev' },
			{ name: 'Gin', link: 'https://gin-gonic.com' },
			{ name: 'Bun', link: 'https://bun.sh' }
		]
	},
	{
		category: 'Linters and Formatters',
		skills: [
			{ name: 'ESLint', link: 'https://eslint.org' },
			{ name: 'Prettier', link: 'https://prettier.io' },
			{ name: 'Black', link: 'https://github.com/psf/black' },
			{ name: 'rustfmt', link: 'https://github.com/rust-lang/rustfmt' }
		]
	},
	{
		category: 'Build systems and friends',
		skills: [
			{
				name: 'Cargo',
				link: 'https://github.com/rust-lang/cargo'
			},
			{
				name: 'CMake',
				link: 'https://cmake.org'
			},
			{
				name: 'GNU Make',
				link: 'https://www.gnu.org/software/make'
			},
			{
				name: 'Just',
				link: 'https://just.systems'
			},
			{
				name: 'Vite',
				link: 'https://vite.dev'
			},
			{
				name: 'Webpack',
				link: 'https://webpack.js.org'
			}
		]
	},
	{
		category: 'Tools',
		skills: [
			{
				name: 'Git',
				link: 'https://git-scm.com'
			},
			{
				name: 'Chezmoi',
				link: 'https://www.chezmoi.io'
			},
			{
				name: 'fzf',
				link: 'https://github.com/junegunn/fzf'
			},
			{
				name: 'fd',
				link: 'https://github.com/sharkdp/fd'
			},
			{
				name: 'ripgrep',
				link: 'https://github.com/BurntSushi/ripgrep'
			},
			{
				name: 'GNU grep',
				link: 'https://www.gnu.org/software/grep/manual/grep.html'
			},
			{
				name: 'Starship',
				link: 'https://starship.rs'
			},
			{
				name: 'Nushell',
				link: 'https://www.nushell.sh'
			},
			{
				name: 'Yazi',
				link: 'https://yazi-rs.github.io'
			},
			{
				name: 'bat',
				link: 'https://github.com/sharkdp/bat'
			},
			{
				name: 'Difftastic',
				link: 'https://github.com/Wilfred/difftastic'
			}
		]
	},
	{
		category: 'Libraries and frameworks',
		skills: [
			{
				name: 'Tokio',
				link: 'https://tokio.rs'
			},
			{
				name: 'Lustre',
				link: 'https://github.com/lustre-labs/lustre'
			},
			{
				name: 'Svelte',
				link: 'https://svelte.dev'
			},
			{
				name: 'SvelteKit',
				link: 'https://kit.svelte.dev'
			},
			{
				name: 'Insta',
				link: 'https://insta.rs'
			},
			{
				name: 'Birdie',
				link: 'https://github.com/giacomocavalieri/birdie'
			},
			{
				name: 'Serde',
				link: 'https://serde.rs'
			},
			{
				name: 'thiserror',
				link: 'https://github.com/dtolnay/thiserror'
			},
			{
				name: 'anyhow',
				link: 'https://github.com/dtolnay/anyhow'
			},
			{
				name: 'Gin',
				link: 'https://gin-gonic.com'
			},
			{
				name: 'Cobra',
				link: 'https://github.com/spf13/cobra'
			},
			{
				name: 'clap',
				link: 'https://github.com/clap-rs/clap'
			},
			{
				name: 'Tracing',
				link: 'https://tracing.rs'
			},
			{
				name: 'log',
				link: 'https://github.com/rust-lang/log'
			},
			{
				name: 'Ratatui',
				link: 'https://ratatui.rs'
			},
			{
				name: 'Rayon',
				link: 'https://github.com/rayon-rs/rayon'
			}
		]
	}
];
