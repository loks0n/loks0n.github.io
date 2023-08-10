import { posts } from '$lib/server/posts';

export const prerender = true;

const PAGE_SIZE = 5;

export async function load({ url }) {
	const page = parseInt(url.searchParams.get('page') || '0');
	const pagePosts = posts.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

	return { posts: pagePosts, pageSize: PAGE_SIZE, total: posts.length, page };
}
