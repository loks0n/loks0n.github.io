<script lang="ts">
  import "../app.css";
  import "../code.css";
  import "@fontsource/source-serif-pro/latin-400.css";
  import "@fontsource/source-serif-pro/latin-400-italic.css";
  import "@fontsource/source-serif-pro/latin-600.css";
  import Nav from "#lib/components/Nav.svelte";
  import { SITE_TITLE } from "#lib/config.ts";
  import Footer from "#lib/components/Footer.svelte";
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <link rel="alternate" type="application/atom+xml" title={SITE_TITLE} href="/rss.xml" />
</svelte:head>

<a class="skip" href="#content">Skip to content</a>

<main>
  <div class="container">
    <Nav />
    <div class="content" id="content">
      {@render children?.()}
    </div>
    <Footer />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-background);
    padding: 1em;
    min-height: 100vh;
    min-height: 100dvh;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: min(100%, 35rem);
  }

  .skip {
    position: absolute;
    left: 1em;
    top: -3em;
    padding: 0.5em 1em;
    background: var(--color-background);
    z-index: 1;
    transition: top var(--transition-fast);
  }

  .skip:focus {
    top: 1em;
  }

  .content {
    margin-top: 3em;
    margin-bottom: 3em;
    flex: 1;
    animation: fade-in 0.4s ease-out;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
