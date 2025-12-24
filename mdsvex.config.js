import { escapeSvelte } from 'mdsvex';
import { enhancedImages } from 'mdsvex-enhanced-images';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { createHighlighter } from 'shiki';

const theme = 'tokyo-night';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript', 'svelte', 'html', 'css', 'json', 'bash', 'yaml']
});

/** @type {import('mdsvex').MdsvexOptions} */
export default {
	extensions: ['.svx'],
	smartypants: { dashes: 'oldschool' },
	remarkPlugins: [enhancedImages],
	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'prepend',
				properties: { class: 'heading-anchor', ariaHidden: true, tabIndex: -1 },
				content: {
					type: 'text',
					value: '#'
				}
			}
		]
	],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\`}`;
		}
	}
};
