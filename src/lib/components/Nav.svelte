<script>
	import { page } from '$app/stores';

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
	<p>Luke B. Silver</p>
	<ul>
		{#each links as link}
			<li>
				<a href={link.url} class:active={$page.url.pathname === link.url}>
					{link.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		font-weight: 500;
		font-size: 1.1em;
	}

	ul {
		display: flex;
		list-style: none;
		gap: 1em;
	}
</style>
