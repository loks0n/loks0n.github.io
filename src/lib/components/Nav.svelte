<script>
	import { page } from '$app/stores';
</script>

<nav>
	<div>
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
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		width: 100%;
		background-color: darkslategray;
	}

	div {
		max-width: 40em;
		padding: 1em 2em;
		display: flex;
		flex: 1;
		gap: 1em;
		align-items: center;
		justify-content: space-between;
	}

	ul {
		list-style: none;
		display: flex;
		align-items: center;
		padding: 0;
		gap: 1em;
	}

	a {
		display: block;
		color: rgb(216, 216, 216);
		border: 2px solid rgb(216, 216, 216);
		padding: 1em;
		min-width: 10ch;
		text-decoration: none;
		border-radius: 0.5em;
		font-weight: 600;
		text-align: center;
	}

	a:hover,
	.secondary {
		background-color: rgb(216, 216, 216);
		color: darkslategray;
	}
</style>
