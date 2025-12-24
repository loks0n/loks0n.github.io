<script>
	import { page } from '$app/state';

	const links = [
		{
			name: 'Blog',
			url: '/'
		},
		{
			name: 'Projects',
			url: '/projects'
		},
		{
			name: 'About',
			url: '/about'
		}
	];
</script>

<nav>
	<p>loks0n.dev</p>
	<ul>
		{#each links as link (link.url)}
			<li>
				<a href={link.url} class:active={page.url.pathname === link.url}>
					{link.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-weight: 500;
		font-size: 1.1rem;
	}

	p {
		font-weight: 800;
		font-size: 1.25rem;
	}

	a {
		letter-spacing: 0.05em;
	}

	@media (min-width: 450px) {
		nav {
			justify-content: space-between;
			flex-direction: row;
		}
	}

	ul {
		display: flex;
		list-style: none;
		gap: 1em;
	}
</style>
