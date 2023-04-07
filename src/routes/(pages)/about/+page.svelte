<script>
	import meSrc from './me.jpeg';
</script>

<article>
	<h1>About Me</h1>

	<p>
		I'm a <strong>Software Engineer</strong>. Currently taking a sabbatical to travel around in my
		campervan. I've previously worked <a href="https://www.thg.com">THG</a> and
		<a href="https://samsung.com">Samsung</a>.
	</p>

	<p>Here's a picture of me on a large hill, somewhere in the Lake District.</p>

	<img alt="My face" src={meSrc} />

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
	}
</style>
