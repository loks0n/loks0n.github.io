import { defineMDSveXConfig as defineConfig, escapeSvelte } from 'mdsvex';
import relativeImages from 'mdsvex-relative-images';
import { createHighlighter } from 'shiki';

const theme = 'tokyo-night';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript', 'svelte', 'html', 'css', 'json', 'bash', 'yaml']
});

const config = defineConfig({
	extensions: ['.md', '.svx'],
	smartypants: { dashes: 'oldschool' },
	remarkPlugins: [relativeImages],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\`}`;
		}
	}
});

export default config;
