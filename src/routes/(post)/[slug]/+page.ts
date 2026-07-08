import { posts } from '$lib/content';

export const prerender = true;
export const entries = () => posts.slugs();
export const load = ({ params }) => posts.bySlug(params.slug);
