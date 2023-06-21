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
	}

	div {
		max-width: 40em;
		padding: 0.5em 1em;
		display: flex;
		flex: 1;

		align-items: center;
		justify-content: space-between;
	}

	ul {
		list-style: none;
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: stretch;
		align-items: center;
		padding: 0;
		gap: 0.5em;
	}

	li {
		width: 100%;
	}

	@media (min-width: 450px) {
		div {
			padding: 0.5em 2em;
		}
		ul {
			flex-direction: row;
		}
	}

	a {
		display: block;

		background-color: rgb(227, 222, 213);
		border: 0.25em solid rgb(216, 216, 216);
		padding: 0.25em 0.5em;
		min-width: 12ch;
		text-decoration: none;
		font-weight: 600;
		text-align: center;
		font-family: 'Azeret Mono Variable', monospace;
	}

	a:hover,
	.secondary {
		background-color: rgb(216, 216, 216);
		color: darkslategray;
	}

	.secondary {
		cursor: default;
	}
</style>
