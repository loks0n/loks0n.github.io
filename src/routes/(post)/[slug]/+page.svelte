<script lang="ts">
  import { SITE_TITLE } from "$lib/config";
  import DateFormat from "../../(index)/DateFormat.svelte";
  import ReadingProgress from "$lib/components/ReadingProgress.svelte";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<ReadingProgress />

<svelte:head>
  <title>{data.entry.title} | {SITE_TITLE}</title>
  <meta name="description" content={data.entry.excerpt || data.entry.title} />
</svelte:head>

<article>
  <header>
    <h1>{data.entry.title}</h1>
    <small>authored by Luke B. Silver on <DateFormat date={new Date(data.entry.date)} /></small>
  </header>
  <hr />
  <data.component />
  <hr />
</article>

<a href="/" class="back-link">
  <span class="arrow">←</span> Back to posts
</a>

<style>
  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    text-decoration: none;
    opacity: 0.6;
    transition: opacity var(--transition-fast);
  }

  .back-link:hover {
    opacity: 1;
  }

  .arrow {
    display: inline-block;
    transition: transform var(--transition-fast);
  }

  .back-link:hover .arrow {
    transform: translateX(-0.25em);
  }
</style>
