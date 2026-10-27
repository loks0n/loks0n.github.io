<script lang="ts">
  import { SITE_TITLE } from "#lib/config.ts";
  import me from "./me.webp?enhanced";

  let { data } = $props();
</script>

<svelte:head>
  <title>About | {SITE_TITLE}</title>
  <meta
    name="description"
    content="Luke B. Silver leads the Cloud team at Appwrite, which runs Appwrite Cloud and builds much of the product on top of it."
  />
</svelte:head>

<article>
  <header>
    <enhanced:img src={me} alt="Luke B. Silver" sizes="(min-width: 600px) 176px, 128px" />
    <div class="who">
      {#if data.weeks.length}
        <svg
          class="graph"
          viewBox="0 0 {data.weeks.length * 12} 84"
          aria-hidden="true"
          preserveAspectRatio="xMaxYMid meet"
        >
          {#each data.weeks as week, x (x)}
            {#each week as level, y (y)}
              {#if level >= 0}
                <rect x={x * 12} y={y * 12} width="10" height="10" rx="2" class="l{level}" />
              {/if}
            {/each}
          {/each}
        </svg>
      {/if}
      <h1>Luke B. Silver</h1>
      <p class="role">
        Engineering Lead for Cloud at <a href="https://appwrite.io">Appwrite</a>, London
      </p>
    </div>
  </header>

  <p class="lede">
    I lead the Cloud team at Appwrite. We run Appwrite Cloud, about twenty production Kubernetes
    clusters in six regions serving over 100 million requests a day, and we build a large part of
    the product on top of it.
  </p>

  <p>
    That covers reliability and on-call, infrastructure and its cost, CI and deployment, the core
    server, billing and usage, the SDK generator and the SDKs it ships, and the libraries underneath
    them. There are four of us. Over the last 90 days we merged over half of all the pull requests
    across Appwrite's GitHub organizations, in more than a hundred repositories.
  </p>

  <section>
    <h2>Selected work from the Cloud team</h2>
    <ul class="work">
      {#each data.work as project (project.slug)}
        <li>
          <a href="/projects/{project.slug}">{project.name}</a>
          <p>{project.description}</p>
        </li>
      {/each}
    </ul>
  </section>

  <p>
    Before Appwrite I worked on performance at <a href="https://www.thg.com">THG</a> and
    <a href="https://samsung.com">Samsung</a>. You can reach me on
    <a href="https://www.linkedin.com/in/lukebsilver/">LinkedIn</a>.
  </p>
</article>

<style>
  header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: end;
    gap: 1.25rem;
  }

  header :global(img) {
    width: 8rem;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: 50% 30%;
    border-radius: 0.5rem;
    box-shadow: 0 1rem 2rem -1rem rgba(60, 45, 20, 0.45);
  }

  .who {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-self: stretch;
    min-width: 0;
  }

  .graph {
    width: 100%;
    margin-bottom: auto;
    opacity: 0.55;
    mask-image: linear-gradient(to right, transparent, #000 45%);
  }

  .graph rect {
    fill: var(--color-primary);
  }

  .l0 {
    fill-opacity: 0.07;
  }
  .l1 {
    fill-opacity: 0.3;
  }
  .l2 {
    fill-opacity: 0.5;
  }
  .l3 {
    fill-opacity: 0.7;
  }
  .l4 {
    fill-opacity: 0.9;
  }

  h1 {
    font-size: 2.25rem;
    letter-spacing: -0.02em;
    margin-bottom: 0.15em;
  }

  .role {
    color: var(--color-text-muted);
    margin: 0;
  }

  .lede {
    font-size: 1.2rem;
    line-height: 1.55;
    margin-top: 2rem;
  }

  h2 {
    font-size: 1rem;
    font-style: italic;
    font-weight: 400;
    color: var(--color-text-muted);
    margin: 2.5rem 0 0.25rem;
  }

  .work {
    list-style: none;
    padding: 0;
  }

  .work li {
    padding: 1rem 0;
    margin: 0;
    border-top: 1px solid rgba(51, 51, 51, 0.12);
  }

  .work li:last-child {
    border-bottom: 1px solid rgba(51, 51, 51, 0.12);
  }

  .work a {
    font-size: 1.15rem;
    font-weight: 600;
  }

  .work p {
    margin: 0.25rem 0 0;
    color: var(--color-text-muted);
  }

  @media (min-width: 600px) {
    header :global(img) {
      width: 11rem;
    }

    h1 {
      font-size: 2.75rem;
    }
  }
</style>
