<script lang="ts">
  import { SITE_TITLE } from "#lib/config.ts";

  let { data } = $props();
  const work = $derived(data.projects.filter((p) => p.employer));
  const side = $derived(data.projects.filter((p) => !p.employer));
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
  {#each [{ title: "At Appwrite", items: work }, { title: "On the side", items: side }] as group (group.title)}
    <section>
      <h2>{group.title}</h2>
      <ul>
        {#each group.items as project (project.slug)}
          <li>
            <a href="/projects/{project.slug}">{project.name}</a>
            <p>{project.description}</p>
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</article>

<style>
  h2 {
    font-size: 1rem;
    font-style: italic;
    font-weight: 400;
    color: var(--color-text-muted);
    margin: 0 0 0.25rem;
  }

  section + section h2 {
    margin-top: 2.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 1rem 0;
    margin: 0;
    border-top: 1px solid rgba(51, 51, 51, 0.12);
  }

  a {
    font-size: 1.15rem;
    font-weight: 600;
  }

  p {
    margin: 0.25rem 0 0;
    color: var(--color-text-muted);
  }
</style>
