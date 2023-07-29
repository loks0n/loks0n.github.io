import path from 'path';

type GlobEntry = {
	metadata: Post;
	default: unknown;
};

export interface Post {
	title: string;
	excerpt: string;
	date: string;
}

export const posts = Object.entries(
	import.meta.glob<GlobEntry>('/content/posts/*/index.svx', { eager: true })
)
	.map(([filePath, { metadata }]) => {
		const dirname = path.dirname(filePath);
		return {
			...metadata,
			slug: path.basename(dirname)
		};
	})
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	.map((post, index, allPosts) => ({
		...post,
		next: allPosts[index - 1] || 0,
		previous: allPosts[index + 1] || 0
	}));
