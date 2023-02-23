<script lang="ts">
	import { SITE_TITLE } from '$lib/config';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
</svelte:head>

<ul>
	{#each data.posts as post}
		<li>
			<p>
				{new Date(post.date).toDateString()}
			</p>
			<a href={`post/${post.slug}`}>
				{post.title}
			</a>
		</li>
		<hr />
	{/each}
</ul>

<style>
	p {
		margin: 0;
		color: rgb(186, 186, 186);
	}
	ul {
		padding: 0;
	}
	li {
		list-style: none;
		display: flex;
		justify-content: space-between;
	}
</style>
