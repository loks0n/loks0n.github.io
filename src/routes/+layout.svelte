<script>
	import '../app.css';
	import '@fontsource/work-sans/variable.css';
	import splitbee from '@splitbee/web';
	import Nav from '$lib/components/Nav.svelte';
	import { SITE_TITLE } from '$lib/config';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	onMount(() => {
		if (!dev) splitbee.init();
	});
</script>

<svelte:head>
	<link rel="alternate" type="application/atom+xml" title={SITE_TITLE} href="/rss.xml" />
</svelte:head>

<main>
	<Header />
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
		width: min(100%, 40em);
		padding: 2em;
		margin-top: 1em;
		margin-bottom: 2em;
		flex: 1;
	}
</style>
