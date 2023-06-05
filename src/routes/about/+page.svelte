<script>
	import { SITE_TITLE } from '$lib/config';
	import meSrc from './me.webp';
</script>

<svelte:head>
	<title>About | {SITE_TITLE}</title>
</svelte:head>

<article>
	<h1>This is my face</h1>

	<div>
		<img alt="My face" src={meSrc} />
		<ul>
			<li>
				I'm a <strong>Software Engineer</strong> at <a href="https://appwrite.io">Appwrite</a>. I've
				previously worked at <a href="https://www.thg.com">THG</a> and
				<a href="https://samsung.com">Samsung</a>.
			</li>

			<li>I have an interesting background in performance optimization & scalability.</li>

			<li>
				You can contact me <a href="https://www.linkedin.com/in/lukebsilver/">via LinkedIn</a>
			</li>
		</ul>
	</div>
</article>

<style>
	h1 {
		margin-bottom: 0.5em;
	}
	img {
		max-width: 90%;
		border-radius: 0.5em;
		margin: 0 auto;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	@media (min-width: 768px) {
		img {
			max-width: 50%;
		}
		div {
			flex-direction: row;
		}

		ul {
			padding: 0;
		}
	}
</style>
