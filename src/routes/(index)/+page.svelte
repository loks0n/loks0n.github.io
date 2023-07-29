<script lang="ts">
	import { SITE_TITLE } from '$lib/config';
	import type { PageData } from './$types';

	export let data: PageData;

	const PAGE_SIZE = 5;

	let page = 0;

	$: posts = data.posts.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
</svelte:head>

<article class="posts">
	<ul>
		{#each posts as post, index}
			<li>
				<a href={`/${post.slug}`}>
					{post.title}
				</a>
				<small>
					{new Date(post.date).toDateString()}
				</small>
			</li>
			{#if index !== posts.length - 1}
				<hr />
			{/if}
		{/each}
	</ul>
</article>

<nav>
	<button disabled={page === 0} on:click|preventDefault={() => page--}> Newer posts</button>

	<small>
		{page * PAGE_SIZE + 1} - {Math.min(data.posts.length, (page + 1) * PAGE_SIZE)} of {data.posts
			.length}
	</small>
	<button
		disabled={(page + 1) * PAGE_SIZE >= data.posts.length}
		on:click|preventDefault={() => page++}
	>
		Older posts
	</button>
</nav>

<style>
	.posts {
		display: flex;
		flex-direction: column;
	}

	small {
		color: rgb(186, 186, 186);
		font-size: 0.75rem;
		font-family: monospace;
		text-align: right;
	}

	ul {
		padding: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	a {
		text-align: left;
		text-wrap: balance;
	}

	li {
		list-style: none;
		display: grid;
		grid-template-columns: auto auto;
		gap: 1em;
	}

	@supports (font-variation-settings: normal) {
		a {
			font-variation-settings: 'wght' 600;
		}
	}

	nav {
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: end;
		justify-content: space-between;
		margin-top: 2em;
	}

	button {
		background: none;
		border: none;
		font-size: 1rem;
		cursor: pointer;
		text-decoration: underline;
		color: darkslategray;
	}

	button:disabled {
		cursor: not-allowed;
		text-decoration: none;
		opacity: 0.5;
	}
</style>
