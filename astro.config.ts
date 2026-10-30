import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import UnoCSS from "unocss/astro";
import { SITE_BASE } from "./src/consts";
import { transformerColorizedBrackets } from '@shikijs/colorized-brackets';
import { transformerRenderLineNumber, transformerNotationDiff, transformerNotationHighlight, transformerMetaHighlight, transformerNotationFocus } from '@shikijs/transformers';
import { satteri } from "@astrojs/markdown-satteri";
import { satteriEmoji } from "satteri-emoji";
import { readingTime } from '@xsynaptic/satteri-reading-time';

export default defineConfig({
  site: SITE_BASE,
  integrations: [mdx(), sitemap(), UnoCSS()],
  redirects: {
    // It's easter egg time! I used to love this one on GH, so why not
    "/pi": "/π",
    "/profile/gh": "https://github.com/ankddev",
    "/profile/tngl": "https://tangled.org/ankddev.fyi",
    "/profile/bsky": "https://bsky.app/profile/ankddev.fyi",
    // todo) decide what to do with leaflet
    "/profile/leaflet": "https://posts.ankddev.fyi",
  },
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
      transformers: [
        transformerColorizedBrackets(),
        transformerRenderLineNumber(),
        // [!code --] and [!code ++]
        transformerNotationDiff(),
        // [!code highlight]
        transformerNotationHighlight(),
        // ```lang {1,3-4}
        transformerMetaHighlight(),
        // [!code focus]
        transformerNotationFocus()
      ],
      wrap: false,
    },
    processor: satteri({
      features: {
        gfm: {
          footnotes: {
            backContent: "↩",
            backLabel: "Back to reference {reference}",
            label: "Footnotes",
          },
        },
      },
      mdastPlugins: [
        // Emojis with gh-like shortcodes
        satteriEmoji({ shortcodes: ["github"] }),
        // todo)
        readingTime()
      ]
    }),
  },
  // todo) decide on fonts. atm i think that lexend for titles, outfit as
  // primary font, maple mono as monospace, and smth pixel for animated hero
  // on landing page (todo, ofc). and i think about changing everyhting to
  // fredoka, i really like it from ente pages; the only problem with it is that
  // it doesn't support cyrillic symbols, so i i decide to add i18n to website,
  // i'll need to choose another font.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Lexend",
      cssVariable: "--font-lexend",
      fallbacks: ["Outfit", "sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Outfit",
      cssVariable: "--font-outfit",
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Fredoka",
      cssVariable: "--font-fredoka",
      fallbacks: ["sans-serif"],
      // todo) decide on weights
      weights: ["400 500 600 700"]
    },
    {
      provider: fontProviders.fontsource(),
      name: "Pixelify Sans",
      cssVariable: "--font-pixelify-sans",
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Maple Mono",
      cssVariable: "--font-maple-mono",
      fallbacks: ["mono"],
    },
  ],
});
