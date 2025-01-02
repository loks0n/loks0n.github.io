<script lang="ts">
	import { SITE_TITLE } from '$lib/config';
	import DateFormat from './DateFormat.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
</svelte:head>

<article>
	<ul>
		{#each data.posts as post, index}
			<small>
				<DateFormat date={new Date(post.date)} />
			</small>
			<li>
				<a href={`/${post.slug}`}>
					{post.title}
				</a>
			</li>
			{#if index !== data.posts.length - 1}
				<hr />
			{/if}
		{/each}
	</ul>
</article>

<style>
	ul {
		padding: 0;
		display: flex;
		flex-direction: column;
	}
	li {
		display: grid;
	}

	a {
		text-wrap: balance;
		font-size: 1.125rem;
	}

	hr {
		margin-top: 1em;
		margin-bottom: 1em;
	}
</style>
