<script>
	import { page } from '$app/stores';
	import '../pico.css';
</script>

<main>
	<nav class="container">
		<ul>
			<li>
				<a href="/" class:secondary={$page.url.pathname === '/'}>Blog</a>
			</li>
			<li>
				<a href="/about" class:secondary={$page.url.pathname === '/about'}>About</a>
			</li>
			<li>
				<a href="/rss.xml">RSS</a>
			</li>
		</ul>
		<ul>
			<li>
				<a role="button" class="outline" href="https://linkedin.com/in/lukebsilver">LinkedIn</a>
			</li>
			<li>
				<a role="button" class="outline" href="https://github.com/loks0n">GitHub</a>
			</li>
		</ul>
	</nav>

	<div class="container">
		<div class="constrained">
			<slot />
		</div>
	</div>

	<footer class="container">
		<small>Stop staring! You got a footer fetish or something?</small>
	</footer>
</main>

<style>
	main {
		display: grid;
		justify-items: center;
		grid-template-rows: auto 1fr auto;
		min-height: 100dvh;
	}

	nav {
		padding-bottom: 1em;
	}

	.constrained {
		max-width: 35em;
	}

	footer {
		padding: 1em 0;
	}

	small {
		color: rgb(186, 186, 186);
	}
</style>
