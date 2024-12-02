<script lang="ts">
	import '../app.css';
	import '../code.css';
	import splitbee from '@splitbee/web';
	import Nav from '$lib/components/Nav.svelte';
	import { SITE_TITLE } from '$lib/config';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import Footer from '$lib/components/Footer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	onMount(() => {
		if (!dev) splitbee.init();
	});
</script>

<svelte:head>
	<link rel="alternate" type="application/atom+xml" title={SITE_TITLE} href="/rss.xml" />
</svelte:head>

<main>
	<div class="container">
		<Nav />
		<div class="content">
			{@render children?.()}
		</div>
		<Footer />
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgb(255, 250, 239);
		padding: 1em;
		min-height: 100vh;
		min-height: 100dvh;
	}

	.container {
		display: flex;
		flex-direction: column;
		width: min(100%, 30rem);
	}

	.content {
		margin-top: 3em;
		margin-bottom: 3em;
		flex: 1;
	}
</style>
