<script lang="ts">
	import { SITE_TITLE } from '$lib/config';
	import type { PageData } from './$types';

	export let data: PageData;
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
	small {
		color: rgb(186, 186, 186);
		font-size: 0.75rem;
		font-family: monospace;
		text-align: right;
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
</style>
