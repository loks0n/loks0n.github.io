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
	<header>
		<h1>{data.post.title}</h1>
		<small>authored by Luke B. Silver on {date}</small>
	</header>
	<hr />
	<svelte:component this={data.component} />
	<hr />
</article>

<a href="/">Back to posts</a>

<style>
	header {
		display: flex;
		flex-direction: column;
	}

	hr {
		margin-bottom: 2em;
	}

	article {
		margin-bottom: 3em;
	}

	h1 {
		margin-bottom: 0.5em;
		text-align: center;
		font-size: 1.75rem;
	}

	small {
		font-size: 0.9rem;
		opacity: 0.5;
		text-align: center;
	}
</style>
