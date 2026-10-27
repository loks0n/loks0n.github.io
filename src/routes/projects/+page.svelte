<script lang="ts">
  import { SITE_TITLE } from "#lib/config.ts";

  let { data } = $props();
</script>

<svelte:head>
  <title>Projects | {SITE_TITLE}</title>
  <meta
    name="description"
    content="Things Luke B. Silver has built, at Appwrite and on the side."
  />
</svelte:head>

<article>
  <h1 class="sr-only">Projects</h1>
  <ul>
    {#each data.projects as project (project.slug)}
      <li>
        <a href="/projects/{project.slug}">{project.name}</a> - {project.description}
      </li>
    {/each}
  </ul>
</article>
