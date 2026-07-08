<script lang="ts">
	import { SITE_TITLE } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>Projects | {SITE_TITLE}</title>
</svelte:head>

<article>
	<ul>
		{#each data.projects as project (project.slug)}
			<li>
				<a href="/projects/{project.slug}">{project.name}</a> - {project.description}
			</li>
		{/each}
	</ul>
</article>
