<script>
	import '../app.css';
	import '@fontsource/work-sans/variable.css';
	import splitbee from '@splitbee/web';
	import Nav from '$lib/components/Nav.svelte';
	import { SITE_TITLE } from '$lib/config';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		if (!dev) splitbee.init();
	});
</script>

<svelte:head>
	<link rel="alternate" type="application/atom+xml" title={SITE_TITLE} href="/rss.xml" />
</svelte:head>

<main>
	<Nav />
	<div>
		<slot />
	</div>
	<Footer />
</main>

<style>
	main {
		min-height: 100vh;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgb(255, 250, 239);
	}

	div {
		width: min(100%, 35em);
		padding: 1.5em;
		flex: 1;
		margin-bottom: 2em;
	}
</style>
