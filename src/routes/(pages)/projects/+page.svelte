<script>
	import { SITE_TITLE } from '$lib/config';
</script>

<svelte:head>
	<title>Projects | {SITE_TITLE}</title>
</svelte:head>

<article>
	<h1>My Projects</h1>
	<ul>
		<li>
			<a href="/projects/rapid-draughts">rapid-draughts</a> - A super speedy, blazing fast, rocket-powered
			TypeScript draughts/checkers engine with move validation, AI and game history.
		</li>
	</ul>
</article>

<style>
	a {
		font-weight: bold;
	}
</style>
