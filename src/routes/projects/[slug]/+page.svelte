<script lang="ts">
  import { SITE_TITLE } from "$lib/config";

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.entry.name} | {SITE_TITLE}</title>
  <meta name="description" content={data.entry.description} />
</svelte:head>

<article>
  <header>
    <h1>{data.entry.name}</h1>
    {#if data.entry.github}
      <a href={data.entry.github}>See on GitHub</a>
    {/if}
  </header>
  <data.component />
</article>

<style>
  header {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
