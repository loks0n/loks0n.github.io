<script>
	import { SITE_TITLE } from '$lib/config';
	import meSrc from './me.webp';
</script>

<article>
	<div class="image-container">
		<img alt="My face" src={meSrc} />
	</div>
	<div class="content">
		<p>
			I'm a <strong>Platform Engineer</strong> at <a href="https://appwrite.io">Appwrite</a>. I've
			previously worked at <a href="https://www.thg.com">THG</a> and
			<a href="https://samsung.com">Samsung</a>.
		</p>

		<p>I have an interesting background in performance optimization & scalability.</p>

		<p>You can contact me <a href="https://www.linkedin.com/in/lukebsilver/">via LinkedIn</a></p>
	</div>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		max-width: 800px;
		margin: 0 auto;
	}

	@media (min-width: 600px) {
		article {
			flex-direction: row;
			align-items: flex-start;
		}
	}

	.image-container {
		flex-shrink: 0;
	}

	img {
		width: 300px;
		border-radius: 0.25em;
	}

	.content {
		font-size: 1.15rem;
		line-height: 1.5;
	}

	.content p {
		margin-bottom: 1rem;
	}
</style>
