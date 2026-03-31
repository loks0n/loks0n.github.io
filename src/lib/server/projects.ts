import path from 'path';

type GlobEntry = {
	frontmatter: Project;
	default: unknown;
};

export interface Project {
	name: string;
	description: string;
	github: string;
}

export const projects = Object.entries(
	import.meta.glob<GlobEntry>('/content/projects/*/index.markdoc', { eager: true })
).map(([filePath, { frontmatter }]) => {
	const dirname = path.dirname(filePath);
	return {
		...frontmatter,
		slug: path.basename(dirname)
	};
});
