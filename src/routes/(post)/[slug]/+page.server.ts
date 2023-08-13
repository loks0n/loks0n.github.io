import { posts } from '$lib/server/posts';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	return posts.map((post) => ({
		slug: post.slug
	}));
}

export function load({ params }) {
	const { slug } = params;

	// get post with metadata
	const post = posts.find((post) => slug === post.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post
	};
}
