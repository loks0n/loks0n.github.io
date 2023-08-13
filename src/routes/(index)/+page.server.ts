import { posts } from '$lib/server/posts';

export const prerender = true;

export async function load() {
	return { posts };
}
