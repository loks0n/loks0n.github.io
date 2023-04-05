import { posts } from '$lib/server/posts';
import { error } from '@sveltejs/kit';

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
