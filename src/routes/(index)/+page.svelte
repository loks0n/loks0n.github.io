<script lang="ts">
	import { SITE_TITLE } from '$lib/config';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
</svelte:head>

<article>
	<h1>My Blog</h1>
	<ul>
		<hr />
		{#each data.posts as post}
			<li>
				<small>
					{new Date(post.date).toDateString()}
				</small>
				<a href={`/${post.slug}`}>
					{post.title}
				</a>
			</li>
			<hr />
		{/each}
	</ul>
</article>

<style>
	small {
		color: rgb(186, 186, 186);
		flex: 1;
		font-size: 0.75rem;
		font-family: monospace;
		align-self: center;
	}

	ul {
		padding: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	a {
		text-align: right;
	}

	li {
		list-style: none;
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 1em;
	}

	@supports (font-variation-settings: normal) {
		a {
			font-variation-settings: 'wght' 600;
		}
	}
</style>
