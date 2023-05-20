<script>
	import { SITE_TITLE } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>Projects | {SITE_TITLE}</title>
</svelte:head>

<article>
	<h1>These are my projects</h1>
	<ul>
		{#each data.projects as project}
			<li>
				<a href="/projects/{project.slug}">{project.name}</a> - {project.description}
			</li>
		{/each}
		<li>
			<a href="https://island-generator-five.vercel.app/">Island Generator</a> - A procedural island
			2D generator built using simplex noise. Features a Svelte based DOM renderer and a Canvas renderer.
		</li>
	</ul>
</article>

<style>
	a {
		font-weight: bold;
	}

	li {
		margin-bottom: 0.5em;
	}
</style>
