import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...defaultComponents,
		...components,
		ImageZoom,
		p: ({ children }) => <p className="text-muted-foreground">{children}</p>,
		li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
	};
}
