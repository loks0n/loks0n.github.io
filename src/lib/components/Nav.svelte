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
	<p class="logo">
		{#each 'loks0n.dev'.split('') as letter (letter)}
			<span class="letter">{letter}</span>
		{/each}
	</p>
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

	.logo {
		font-weight: 800;
		font-size: 1.25rem;
	}

	.letter {
		display: inline-block;
		transition: transform var(--transition-fast);
	}

	.letter:hover {
		transform: translateY(-0.15em);
	}

	a {
		letter-spacing: 0.05em;
		text-decoration: none;
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
