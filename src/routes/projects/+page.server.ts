import { projects } from "$lib/content";

export const prerender = true;

export const load = () => ({ projects: projects.list() });
