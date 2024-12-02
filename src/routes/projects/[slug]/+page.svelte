<script lang="ts">
	import { SITE_TITLE } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.project.name} | {SITE_TITLE}</title>
</svelte:head>

<article>
	<h1>{data.project.name} - <a href={data.project.github}>GitHub</a></h1>
	<data.component />
</article>
