<script>
	import { SITE_TITLE } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{data.project.name} | {SITE_TITLE}</title>
</svelte:head>

<article>
	<h1>{data.project.name} - <a href={data.project.github}>GitHub</a></h1>
	<svelte:component this={data.component} />
</article>
