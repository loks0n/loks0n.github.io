import { posts } from '$lib/content';

export const prerender = true;

export const load = () => ({ posts: posts.list() });
