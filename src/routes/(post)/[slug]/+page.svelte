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
