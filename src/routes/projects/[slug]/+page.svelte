<script lang="ts">
	import { SITE_TITLE } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.project.name} | {SITE_TITLE}</title>
</svelte:head>

<article>
	<header>
		<h1>{data.project.name}</h1>
		{#if data.project.github}
			<a href={data.project.github}>See on GitHub</a>
		{/if}
	</header>
	<data.component />
</article>

<style>
	header {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
</style>
