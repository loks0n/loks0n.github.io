import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ data }) => {
	// load the markdown file based on slug
	const component = await import(`$content/projects/${data.project.slug}/index.svx`);

	return {
		project: data.project,
		component: component.default
	};
};
