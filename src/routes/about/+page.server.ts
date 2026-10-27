import { projects } from "#lib/content.ts";

export const prerender = true;

export const load = () => ({
  work: projects.list().filter((p) => p.employer === "Appwrite"),
});
