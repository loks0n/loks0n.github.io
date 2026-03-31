import path from 'path';

type GlobEntry = {
	frontmatter: Post;
	default: unknown;
};

export interface Post {
	title: string;
	excerpt: string;
	date: string;
}

export const posts = Object.entries(
	import.meta.glob<GlobEntry>('/content/posts/*/index.markdoc', { eager: true })
)
	.map(([filePath, { frontmatter }]) => {
		const dirname = path.dirname(filePath);
		return {
			...frontmatter,
			slug: path.basename(dirname)
		};
	})
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	.map((post, index, allPosts) => ({
		...post,
		next: allPosts[index - 1] || 0,
		previous: allPosts[index + 1] || 0
	}));
