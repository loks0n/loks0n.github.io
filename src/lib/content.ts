import { error } from "@sveltejs/kit";
import type { Component } from "svelte";

type Module = { default: Component; frontmatter: Record<string, unknown> };

/** '/content/posts/my-post/index.markdoc' -> 'my-post' */
const slugOf = (filePath: string) => filePath.split("/").at(-2)!;

/**
 * A content collection: markdoc entries under /content/<name>/*\/index.markdoc.
 * Pass the two globs in (don't create them here) so tests can drive it with
 * in-memory maps. Frontmatter is eager and imported on its own (needed for
 * lists/feed, without pulling every entry's compiled body into the shared
 * bundle); the component is lazy (code-split, loaded per page).
 */
export function collection<T>(
  frontmatters: Record<string, T>,
  loaders: Record<string, () => Promise<Module>>,
  options: { label: string; sort?: (a: T & { slug: string }, b: T & { slug: string }) => number },
) {
  const paths = new Map(Object.keys(frontmatters).map((f) => [slugOf(f), f]));
  const entries = Object.entries(frontmatters).map(([f, frontmatter]) => ({
    ...frontmatter,
    slug: slugOf(f),
  }));
  if (options.sort) entries.sort(options.sort);

  return {
    list: () => entries,
    slugs: () => entries.map(({ slug }) => ({ slug })),
    async bySlug(slug: string) {
      const path = paths.get(slug);
      const entry = entries.find((e) => e.slug === slug);
      if (!path || !entry) throw error(404, `${options.label} not found`);
      const { default: component } = await loaders[path]();
      return { entry, component };
    },
  };
}

export interface Post {
  title: string;
  excerpt: string;
  date: string;
}

export interface Project {
  name: string;
  description: string;
  github: string;
}

export const posts = collection<Post>(
  import.meta.glob("/content/posts/*/index.markdoc", { eager: true, import: "frontmatter" }),
  import.meta.glob<Module>("/content/posts/*/index.markdoc"),
  { label: "Post", sort: (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() },
);

export const projects = collection<Project>(
  import.meta.glob("/content/projects/*/index.markdoc", { eager: true, import: "frontmatter" }),
  import.meta.glob<Module>("/content/projects/*/index.markdoc"),
  { label: "Project" },
);
