<script lang="ts">
	import { SITE_TITLE } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
</svelte:head>

<article>
	<ul>
		{#each data.posts as post, index}
			<li>
				<a href={`/${post.slug}`}>
					{post.title}
				</a>
				<small>
					{new Date(post.date).toDateString()}
				</small>
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
		display: flex;
		justify-content: space-between;
		gap: 1em;
	}

	a {
		text-wrap: balance;
	}

	hr {
		margin-top: 0.5em;
		margin-bottom: 0.5em;
	}
</style>
