<script lang="ts">
	import { SITE_TITLE } from '$lib/config';
	import type { PageData } from './$types';

	export let data: PageData;

	const date = new Date(data.post.date).toLocaleDateString();
</script>

<svelte:head>
	<title>{data.post.title} | ${SITE_TITLE}</title>
</svelte:head>

<article>
	<header>
		<h1>{data.post.title}</h1>
	</header>
	<svelte:component this={data.component} />

	<footer>
		authored by Luke Silver on {date}
	</footer>
</article>

<style>
	h1 {
		margin: 0;
	}
	header {
		display: grid;
		place-items: center;
	}
	article {
		padding-top: 0;
	}
</style>
