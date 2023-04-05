<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li>
			<a href="/" class:secondary={$page.url.pathname === '/'}>Blog</a>
		</li>
		<li>
			<a href="/about" class:secondary={$page.url.pathname === '/about'}>About</a>
		</li>
		<li>
			<a href="/rss.xml" target="_blank">RSS</a>
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
