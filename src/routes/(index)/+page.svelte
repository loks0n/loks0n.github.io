<script lang="ts">
  import { SITE_TITLE, SITE_DESCRIPTION } from "#lib/config.ts";
  import DateFormat from "./DateFormat.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>{SITE_TITLE}</title>
  <meta name="description" content={SITE_DESCRIPTION} />
</svelte:head>

<article>
  <h1 class="sr-only">Blog</h1>
  <p class="intro">
    I'm Luke, and I lead platform engineering at <a href="https://appwrite.io">Appwrite</a>. The
    work is on <a href="/projects">projects</a>, there's more <a href="/about">about me</a>, and my
    posts are below.
  </p>
  <ul>
    {#each data.posts as post (post.slug)}
      <li>
        <small>
          <DateFormat date={new Date(post.date)} />
        </small>
        <a href={`/${post.slug}`}>
          {post.title}
        </a>
      </li>
    {/each}
  </ul>
</article>

<style>
  .intro {
    font-size: 1.2rem;
    line-height: 1.55;
    padding-bottom: 2rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(51, 51, 51, 0.15);
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
  }
  li {
    display: grid;
    padding: 1em 0;
  }
  li:first-child {
    padding-top: 0;
  }
  li + li {
    border-top: 1px solid rgba(51, 51, 51, 0.15);
  }

  small {
    margin-bottom: 0.25em;
  }

  a {
    text-wrap: balance;
    font-size: 1.125rem;
    font-weight: 600;
  }
</style>
