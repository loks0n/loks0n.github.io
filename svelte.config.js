import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { markdoc } from 'svelte-markdoc-preprocess';
import md from '@markdoc/markdoc';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const { Tag } = md;
const __dirname = dirname(fileURLToPath(import.meta.url));

function getTextContent(children) {
	return children
		.map((child) => (typeof child === 'string' ? child : getTextContent(child.children ?? [])))
		.join('');
}

function slugify(text) {
	return text
		.toLowerCase()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/**
 * Svelte preprocessor that rewrites image imports in markdoc-generated code
 * to use Vite's ?enhanced query, so @sveltejs/enhanced-img can optimize them.
 * Must run after markdoc() so it sees the generated import statements.
 */
function enhancedMarkdocImages() {
	const imageExtensions = 'avif|gif|jpeg|jpg|png|tiff|webp';
	const re = new RegExp(
		`import (IMAGE__\\d+) from ['"](\\.(?:[^'"?]+)\\.(?:${imageExtensions}))['"]`,
		'g'
	);
	return {
		markup({ content, filename }) {
			if (!filename?.endsWith('.markdoc')) return;
			const modified = content.replace(re, "import $1 from '$2?enhanced'");
			if (modified !== content) return { code: modified };
		}
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.markdoc'],
	preprocess: [
		vitePreprocess(),
		markdoc({
			nodes: join(__dirname, './src/lib/markdoc/Nodes.svelte'),
			tags: join(__dirname, './src/lib/markdoc/Tags.svelte'),
			config: {
				nodes: {
					heading: {
						children: ['inline'],
						attributes: {
							level: { type: Number, required: true },
							id: { type: String }
						},
						transform(node, config) {
							const level = node.attributes.level;
							const children = node.transformChildren(config);
							const id = slugify(getTextContent(children));
							return new Tag(`h${level}`, { id }, [
								new Tag(
									'a',
									{
										href: `#${id}`,
										class: 'heading-anchor',
										'aria-hidden': 'true',
										tabindex: -1
									},
									['#']
								),
								...children
							]);
						}
					}
				}
			}
		}),
		enhancedMarkdocImages()
	],
	kit: {
		adapter: adapter(),
		alias: {
			$content: './content'
		}
	}
};

export default config;
