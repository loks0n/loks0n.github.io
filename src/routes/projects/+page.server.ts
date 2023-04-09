export const prerender = true;

import { projects } from '$lib/server/projects';

export async function load() {
	return { projects };
}
