import { projects } from "#lib/content.ts";

export const prerender = true;
export const entries = () => projects.slugs();
export const load = ({ params }) => projects.bySlug(params.slug);
