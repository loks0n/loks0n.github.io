<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li>
			<a href="/" class:secondary={$page.url.pathname === '/'}>Blog</a>
		</li>
		<li>
			<a href="/projects" class:secondary={$page.url.pathname === '/projects'}>Projects</a>
		</li>
	</ul>
	<ul>
		<li>
			<a href="/about" class:secondary={$page.url.pathname === '/about'}>About</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		max-width: 35em;
		display: flex;
		width: 100%;
		padding: 1.5em;
		align-items: center;
		justify-content: space-between;
	}

	.secondary {
		color: grey;
		text-decoration: none;
	}

	ul {
		list-style: none;
		display: flex;
		align-items: center;
		gap: 1em;
	}
</style>
