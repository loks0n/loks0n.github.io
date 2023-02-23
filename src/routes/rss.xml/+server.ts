import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '$lib/config';
import { posts } from '$lib/server/posts';

export const prerender = true;

type Posts = typeof posts;

const xml = (posts: Posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${SITE_TITLE}</title>
<description>${SITE_DESCRIPTION}</description>
<link>${SITE_URL}</link>
<atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
	.map(
		(post) => `<item>
<guid isPermaLink="true">${SITE_URL}/${post.slug}</guid>
<title>${post.title}</title>
<link>${SITE_URL}/${post.slug}</link>
${post.excerpt ? `<description>${post.excerpt}</description>` : ''}
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
	)
	.join('')}
</channel>
</rss>
`;

export const GET = async () => {
	const headers = {
		'Cache-Control': 'max-age=0, s-max-age=3600',
		'Content-Type': 'application/xml'
	};

	const body = xml(posts);
	return new Response(body, { headers });
};
