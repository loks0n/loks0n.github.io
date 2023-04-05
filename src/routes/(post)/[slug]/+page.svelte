<script lang="ts">
	import { SITE_TITLE } from '$lib/config';
	import type { PageData } from './$types';

	export let data: PageData;

	const date = new Date(data.post.date).toLocaleDateString();
</script>

<svelte:head>
	<title>{data.post.title} | {SITE_TITLE}</title>
</svelte:head>

<article>
	<hr />
	<header>
		<h1>{data.post.title}</h1>
		<small>authored by Luke B. Silver on {date}</small>
	</header>
	<svelte:component this={data.component} />
	<hr />
</article>

<a href="/">Back to posts</a>

<style>
	header {
		display: flex;
		flex-direction: column;
		margin-bottom: 1em;
	}

	article {
		margin-bottom: 3em;
	}

	h1 {
		margin-bottom: 0.25em;
	}

	small {
		font-size: 0.9rem;
		opacity: 0.5;
	}

	hr {
		opacity: 0.1;
	}
</style>
