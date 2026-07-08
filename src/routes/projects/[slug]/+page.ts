import { projects } from '$lib/content';

export const prerender = true;
export const entries = () => projects.slugs();
export const load = ({ params }) => projects.bySlug(params.slug);
