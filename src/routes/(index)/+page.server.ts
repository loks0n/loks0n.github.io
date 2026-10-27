import { posts } from "#lib/content.ts";

export const prerender = true;

export const load = () => ({ posts: posts.list() });
