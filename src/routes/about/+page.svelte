<script>
	import { SITE_TITLE } from '$lib/config';
	import meSrc from './me.webp';
</script>

<svelte:head>
	<title>About | {SITE_TITLE}</title>
</svelte:head>

<article>
	<img alt="My face" src={meSrc} />
	<ul>
		<li>
			I'm a <strong>Platform Engineer</strong> at <a href="https://appwrite.io">Appwrite</a>. I've
			previously worked at <a href="https://www.thg.com">THG</a> and
			<a href="https://samsung.com">Samsung</a>.
		</li>

		<li>I have an interesting background in performance optimization & scalability.</li>

		<li>
			You can contact me <a href="https://www.linkedin.com/in/lukebsilver/">via LinkedIn</a>
		</li>
	</ul>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
	}
	@media (min-width: 600px) {
		article {
			flex-direction: row;
		}
	}

	img {
		width: 300px;
		margin-bottom: 1em;
	}
</style>
