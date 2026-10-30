import presetIcons from "@unocss/preset-icons";
import presetWind4 from "@unocss/preset-wind4";
import transformerDirectives from "@unocss/transformer-directives";
import { defineConfig } from "unocss";
import { SOCIAL_LINKS } from "./src/consts";

export default defineConfig({
  theme: {
    colors: {
			// Catppuccin Mocha colors
			rosewater: "#f5e0dc",
			flamingo: "#f2cdcd",
			pink: "#f5c2e7",
			mauve: "#cba6f7",
			red: "#f38ba8",
			maroon: "#eba0ac",
			peach: "#fab387",
			yellow: "#f9e2af",
			green: "#a6e3a1",
			teal: "#94e2d5",
			sky: "#89dceb",
			sapphire: "#74c7ec",
			blue: "#89b4fa",
			lavender: "#b4befe",
			text: "#cdd6f4",
			subtext1: "#bac2de",
			subtext0: "#a6adc8",
			overlay2: "#9399b2",
			overlay1: "#7f849c",
			overlay0: "#6c7086",
			surface2: "#585b70",
			surface1: "#45475a",
			surface0: "#313244",
			base: "#1e1e2e",
			mantle: "#181825",
			crust: "#11111b",
		},
  },
  safelist: [
    // Icons used for social links
    () => SOCIAL_LINKS.map((link) => link.icon)
  ],
  presets: [
    presetIcons({
      warn: true,
   	  extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			}
    }),
    presetWind4({
      // preflights: {
      //   reset: false
      // }
    }),
  ],
  // Extend theme with special role colors
  extendTheme: (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
  			// todo) decide on accent
        accent: theme.colors.lavender,
      },
    }
  },
  transformers: [
    transformerDirectives(),
  ],
});
