<script>
	import { SITE_TITLE } from '$lib/config';
	import meSrc from './me.jpg';
</script>

<svelte:head>
	<title>About | {SITE_TITLE}</title>
</svelte:head>

<article>
	<h1>This is my face</h1>

	<img alt="My face" src={meSrc} />

	<p>
		I'm a <strong>Software Engineer</strong> at <a href="https://appwrite.io">Appwrite</a>. I've
		previously worked at <a href="https://www.thg.com">THG</a> and
		<a href="https://samsung.com">Samsung</a>.
	</p>

	<p>
		I have an interesting background in performance optimization & scalability. You can contact me <a
			href="https://www.linkedin.com/in/lukebsilver/">via LinkedIn</a
		>
	</p>
</article>

<style>
	h1 {
		margin-bottom: 0.5em;
	}
	img {
		max-width: min(100%, 20em);
		border-radius: 0.5em;
		margin-top: 0;
	}
</style>
