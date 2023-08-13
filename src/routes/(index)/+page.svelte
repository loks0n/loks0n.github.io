<script lang="ts">
	import { SITE_TITLE } from '$lib/config';

	export let data;

	const POSTS_PER_PAGE = 5;

	$: currentPage = 0;

	$: currentPageStart = currentPage * POSTS_PER_PAGE + 1;
	$: currentPageEnd = Math.min(currentPageStart + POSTS_PER_PAGE, data.posts.length + 1);

	$: currentPosts = data.posts.slice(currentPageStart - 1, currentPageEnd - 1);

	$: isFirstPage = currentPage === 0;
	$: isLastPage = currentPageEnd === data.posts.length + 1;
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
</svelte:head>

<article class="posts">
	<ul>
		{#each currentPosts as post, index}
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

<nav>
	<button
		on:click={() => {
			currentPage = currentPage - 1;
		}}
		disabled={isFirstPage}>Newer</button
	>
	<small>
		{currentPageStart}-{currentPageEnd} of {data.posts.length}
	</small>
	<button
		on:click={() => {
			currentPage = currentPage + 1;
		}}
		disabled={isLastPage}>Older</button
	>
</nav>

<style>
	.posts {
		display: flex;
		flex-direction: column;
		min-height: 30dvh;
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
		margin-top: 3em;
	}

	button {
		display: block;
		color: darkslategray;
		background-color: rgb(227, 222, 213);
		border: 0.25em solid rgb(216, 216, 216);
		padding: 0.25em 0.5em;
		min-width: 12ch;
		text-decoration: none;
		font-weight: 600;
		text-align: center;
		font-family: 'Azeret Mono Variable', monospace;
	}

	button:hover {
		background-color: rgb(216, 216, 216);
	}

	button:disabled {
		pointer-events: none;
		color: rgb(186, 186, 186);
	}
</style>
