import { projects } from "#lib/content.ts";

export const prerender = true;

export const load = () => ({ projects: projects.list() });
