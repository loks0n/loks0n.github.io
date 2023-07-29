import path from 'path';

type GlobEntry = {
	metadata: Project;
	default: unknown;
};

export interface Project {
	name: string;
	description: string;
	github: string;
}

export const projects = Object.entries(
	import.meta.glob<GlobEntry>('/content/projects/*/index.svx', { eager: true })
).map(([filePath, { metadata }]) => {
	const dirname = path.dirname(filePath);
	return {
		...metadata,
		slug: path.basename(dirname)
	};
});
