<script>
  import { SITE_TITLE } from "#lib/config.ts";
  import meSrc from "./me.webp";
</script>

<svelte:head>
  <title>About | {SITE_TITLE}</title>
  <meta
    name="description"
    content="Luke B. Silver is an Engineering Lead at Appwrite, looking after the platform that runs Appwrite Cloud."
  />
</svelte:head>

<article>
  <h1 class="sr-only">About</h1>
  <div class="image-container">
    <img alt="Luke B. Silver" src={meSrc} width="1784" height="1824" />
  </div>
  <div class="content">
    <p>
      I'm an <strong>Engineering Lead</strong> at <a href="https://appwrite.io">Appwrite</a>. I look
      after the platform that runs Appwrite Cloud. That's about twenty production Kubernetes
      clusters in six regions, serving over 100 million requests a day.
    </p>

    <p>
      I built the <a href="/projects/appwrite-edge">edge router</a> behind Appwrite Sites and
      designed the <a href="/projects/appwrite-edge">orchestrator</a> that runs functions and
      builds. My team also owns <a href="/projects/appwrite-security">platform security</a>, and I
      rebuilt how our alerts escalate to on-call.
    </p>

    <p>
      Before Appwrite I worked on performance at <a href="https://www.thg.com">THG</a> and
      <a href="https://samsung.com">Samsung</a>.
    </p>

    <p>You can contact me <a href="https://www.linkedin.com/in/lukebsilver/">via LinkedIn</a>.</p>
  </div>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  @media (min-width: 600px) {
    article {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  .image-container {
    flex-shrink: 0;
  }

  img {
    width: 300px;
    height: auto;
    border-radius: 0.25em;
  }

  .content {
    font-size: 1.15rem;
    line-height: 1.5;
  }

  .content p {
    margin-bottom: 1rem;
  }
</style>
