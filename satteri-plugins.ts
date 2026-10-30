import { defineHastPlugin } from "satteri";

// Add `tabindex` to <abbr>'s
export const accessibleAbbr = defineHastPlugin({
  name: "accessible-abbr",
  element: {
    filter: ["abbr"],
    visit(node, ctx) {
      if (node.properties.title && node.properties.tabIndex === undefined) {
        ctx.setProperty(node, "tabIndex", 0);
      }
    },
  },
});

export default [accessibleAbbr];
