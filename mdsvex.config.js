import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import relativeImages from 'mdsvex-relative-images';

const config = defineConfig({
	extensions: ['.md', '.svx'],
	smartypants: { dashes: 'oldschool' },
	remarkPlugins: [relativeImages]
});

export default config;
