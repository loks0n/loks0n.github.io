<script lang="ts">
	import { SITE_TITLE } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>Projects | {SITE_TITLE}</title>
</svelte:head>

<article>
	<ul>
		{#each data.projects as project}
			<li>
				<a href="/projects/{project.slug}">{project.name}</a> - {project.description}
			</li>
		{/each}
		<li>
			<a href="https://island-generator-five.vercel.app/">Island Generator</a> - A procedural island 2D
			generator built using simplex noise. Features a Svelte based DOM renderer and a Canvas renderer.
		</li>
	</ul>
</article>
