# /dev/ankddev

[ankddev](https://github.com/ankddev)'s personal site, blog and portfolio.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ankddev/website
cd website
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run check` - Run type checking and linting
- `bun run check:watch` - Run type checking and linting in background
- `bun run format` - Format with Prettier
- `bun run lint` - Check formatting and linting

## Writing Articles

Articles are written in MDX format and stored in the `content/articles/` directory. Each article should include frontmatter with metadata:

```mdx
---
title: Your Article Title
description: Brief description of the article
date: 2024-01-15
tags:
  - tag1
  - tag2
pinned: false
---

Your article content here with support for:

- Markdown syntax
- Embedded Svelte components
- Code blocks with syntax highlighting
```

### Code Highlighting

The project uses Shiki for syntax highlighting with custom transformer:

- Focus notation: `// [!code focus]`

## Styling

The project uses UnoCSS with:

- Custom presets for icons and styling
- CSS variables for theming
- Responsive design utilities
- Variable fonts

## Configuration

Key configuration files:

- `svelte.config.js` - SvelteKit and MDsveX configuration
- `uno.config.ts` - UnoCSS configuration
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration

## Deployment

The site is automatically deployed to Vercel on push to the main branch. The deployment configuration is handled by the Vercel adapter in `svelte.config.js`.

## Manual Deployment

To deploy manually:

```bash
# Build the project:
bun run build
# Deploy to Vercel:
vercel --prod
```

## Contributing

While this is a personal website and blog, suggestions and bug reports are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is available under the [MIT License](LICENSE).
