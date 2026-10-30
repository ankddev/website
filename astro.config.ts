import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import UnoCSS from "unocss/astro";
import { SITE_BASE } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: SITE_BASE,
  integrations: [mdx(), sitemap(), UnoCSS()],
  redirects: {
    "/profile/gh": "https://github.com/ankddev",
    "/profile/tngl": "https://tangled.org/ankddev.fyi",
    "/profile/bsky": "https://bsky.app/profile/ankddev.fyi",
    // todo) decide what to do with leaflet
    "/profile/leaflet": "https://posts.ankddev.fyi",
  },
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
  },
  // todo) decide on fonts
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Lexend",
      cssVariable: "--font-lexend",
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Outfit",
      cssVariable: "--font-outfit",
      fallbacks: ["sans-serif"],
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
