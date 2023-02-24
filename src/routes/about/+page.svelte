<script>
	import meSrc from './me.jpeg';
</script>

<article>
	<p>
		I'm a <strong>Software Engineer</strong> taking a sabbatical to travel around in my campervan.
		I've previously worked <a href="https://www.thg.com">THG</a> and
		<a href="https://samsung.com">Samsung</a>.
	</p>

	<p>My interests include:</p>
	<ul>
		<li>Climbing</li>
		<li>Running</li>
		<li>Fencing</li>
		<li>Cooking</li>
	</ul>

	<p>Here's a picture of me on a large hill, somewhere in the Lake District.</p>
	<figure>
		<img alt="My face" src={meSrc} />
	</figure>

	<p>You can contact me <a href="https://www.linkedin.com/in/lukebsilver/">via LinkedIn</a></p>
</article>

<style>
	img {
		aspect-ratio: 1/1;
		max-height: 50vw;
		border-radius: 0.5em;
	}
</style>
