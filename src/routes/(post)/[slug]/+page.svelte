<script lang="ts">
	import { SITE_TITLE } from '$lib/config';
	import DateFormat from '../../(index)/DateFormat.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{data.post.title} | {SITE_TITLE}</title>
</svelte:head>

<article>
	<header>
		<h1>{data.post.title}</h1>
		<small>authored by Luke B. Silver on <DateFormat date={new Date(data.post.date)} /></small>
	</header>
	<hr />
	<data.component />
	<hr />
</article>

<a href="/">Back to posts</a>
