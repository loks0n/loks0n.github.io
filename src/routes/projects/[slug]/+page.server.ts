import { projects } from '$lib/server/projects';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const { slug } = params;

	// get post with metadata
	const project = projects.find((project) => slug === project.slug);

	if (!project) {
		throw error(404, 'Post not found');
	}

	return {
		project
	};
}
