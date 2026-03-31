<script module>
	import { createHighlighter } from 'shiki';

	const highlighterPromise = createHighlighter({
		themes: ['tokyo-night'],
		langs: ['javascript', 'typescript', 'svelte', 'html', 'css', 'json', 'bash', 'yaml']
	});
</script>

<script lang="ts">
	interface Props {
		content: string;
		language?: string;
	}

	let { content, language = 'text' }: Props = $props();

	async function highlight(code: string, lang: string) {
		const highlighter = await highlighterPromise;
		const supportedLangs = highlighter.getLoadedLanguages();
		const resolvedLang = supportedLangs.includes(lang as never) ? lang : 'text';
		return highlighter.codeToHtml(code, { lang: resolvedLang, theme: 'tokyo-night' });
	}
</script>

{#await highlight(content, language)}
	<pre><code>{content}</code></pre>
{:then html}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html html}
{/await}
