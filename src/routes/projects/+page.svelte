<script>
	import { SITE_TITLE } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>Projects | {SITE_TITLE}</title>
</svelte:head>

<article>
	<h1>My Projects</h1>
	<ul>
		{#each data.projects as project}
			<li>
				<a href="/projects/{project.slug}">{project.name}</a> - {project.description}
			</li>
		{/each}
	</ul>
</article>

<style>
	a {
		font-weight: bold;
	}
</style>
