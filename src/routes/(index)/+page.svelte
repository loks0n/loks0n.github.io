<script lang="ts">
	import { SITE_TITLE } from '$lib/config';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
</svelte:head>

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

<style>
	small {
		color: rgb(186, 186, 186);
		flex: 1;
	}

	ul {
		padding: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	li {
		list-style: none;
		display: flex;
		justify-content: space-between;
	}

	hr {
		opacity: 0.1;
	}

	@supports (font-variation-settings: normal) {
		a {
			font-variation-settings: 'wght' 600;
		}
	}
</style>
