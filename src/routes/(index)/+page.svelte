<script lang="ts">
	import { SITE_TITLE } from '$lib/config';

	export let data;

	$: pageStart = data.page * data.pageSize + 1;
	$: pageEnd = Math.min(data.total, pageStart + data.pageSize - 1);

	$: isLastPage = pageEnd === data.total;
	$: isFirstPage = pageStart === 1;
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
</svelte:head>

<article class="posts">
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

<nav>
	<a href={`?page=${data.page - 1}`} class="btn" class:disabled={isFirstPage}>Newer</a>
	<small>
		{pageStart}-{pageEnd} of {data.total}
	</small>
	<a href={`?page=${data.page + 1}`} class="btn" class:disabled={isLastPage}> Older </a>
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

	a.disabled {
		pointer-events: none;
		color: rgb(186, 186, 186);
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

	.btn {
		display: block;

		background-color: rgb(227, 222, 213);
		border: 0.25em solid rgb(216, 216, 216);
		padding: 0.25em 0.5em;
		min-width: 12ch;
		text-decoration: none;
		font-weight: 600;
		text-align: center;
		font-family: 'Azeret Mono Variable', monospace;
	}

	.btn:hover {
		background-color: rgb(216, 216, 216);
		color: darkslategray;
	}
</style>
