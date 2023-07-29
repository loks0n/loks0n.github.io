import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ data }) => {
	// load the markdown file based on slug
	const component = await import(`../../../../content/posts/${data.post.slug}/index.svx`);

	return {
		post: data.post,
		component: component.default
	};
};
