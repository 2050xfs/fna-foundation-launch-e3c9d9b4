import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";
import { componentTagger } from "lovable-tagger";

const svgComponentPlugin = (): Plugin => ({
  name: "inline-svg-react-component",
  enforce: "pre",
  load(id) {
    if (!id.endsWith(".svg") || id.includes("?")) {
      return null;
    }

    const source = fs.readFileSync(id, "utf8");
    const withoutHeader = source.replace(/<\?xml[^>]*?>\s*/i, "");
    const match = withoutHeader.match(/<svg([^>]*)>([\s\S]*?)<\/svg>/i);

    if (!match) {
      return null;
    }

    const [, attributes, inner] = match;
    const innerContent = inner.trim();
    const attributePairs = Array.from(
      attributes.matchAll(/([^\s=]+)="([^"]*)"/g)
    );
    const attributeEntries = attributePairs.map(
      ([, key, value]) => `${JSON.stringify(key)}: ${JSON.stringify(value)}`
    );

    return {
      code: `
import * as React from "react";

const svgBaseProps = ${attributeEntries.length ? `{ ${attributeEntries.join(", ")} }` : "{}"};

const SvgComponent = React.forwardRef(({ title, ...props }, ref) => {
  const innerHtml = title
    ? "<title>" + title + "</title>" + ${JSON.stringify(innerContent)}
    : ${JSON.stringify(innerContent)};

  return React.createElement(
    "svg",
    Object.assign({}, svgBaseProps, props, {
      ref,
      dangerouslySetInnerHTML: { __html: innerHtml }
    })
  );
});

export const ReactComponent = SvgComponent;
export default ${JSON.stringify(withoutHeader)};
`,
      map: null,
    };
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), svgComponentPlugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
