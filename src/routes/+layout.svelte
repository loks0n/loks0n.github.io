<script>
	import '../app.css';
	import '@fontsource/work-sans/variable.css';
	import splitbee from '@splitbee/web';
	import Nav from '$lib/components/Nav.svelte';
	import { SITE_TITLE } from '$lib/config';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

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
		display: grid;
		justify-items: center;
		gap: 1em;
		grid-template-rows: auto 1fr auto;
	}

	div {
		width: 100%;
		max-width: 35em;
		padding: 1em;
	}
</style>
