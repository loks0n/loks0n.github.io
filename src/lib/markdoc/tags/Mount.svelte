<script lang="ts">
  // How a build artifact reaches a pod, plus the four workload kinds. No props.
  const steps = [
    { title: "Object storage", body: "build.erofs", tag: "download · ~10× slower" },
    { title: "Mount agent", body: "loop + mount on the machine", tag: "mount · tens of ms" },
    { title: "Runtime pod", body: "/usr/code (read-only)", tag: "unprivileged" },
  ];
  const kinds = [
    { name: "deployment", note: "serves traffic", count: 2 },
    { name: "pool", note: "warm pods", count: 3 },
    { name: "sandbox", note: "untrusted code alone", count: 1 },
    { name: "job", note: "runs a build", count: 1 },
  ];
</script>

<div
  class="node"
  role="img"
  aria-label="On each machine, a build artifact downloads from object storage, the mount agent mounts it on the host in tens of milliseconds, and the runtime pod sees it read-only without a privileged container. The orchestrator runs deployments, pools, sandboxes and jobs."
>
  <div class="bar">
    <span class="crumb">machine</span>
    <span class="chip">edge</span>
    <span class="spacer"></span>
    <span class="muted">open-runtimes/orchestrator</span>
  </div>

  <ol class="flow">
    {#each steps as step, i (step.title)}
      <li style="--i: {i}">
        <span class="tag">{step.tag}</span>
        <strong>{step.title}</strong>
        <code>{step.body}</code>
      </li>
    {/each}
  </ol>

  <div class="kinds">
    {#each kinds as kind, k (kind.name)}
      <div class="kind" style="--k: {k}">
        <div class="pods">
          {#each Array.from({ length: kind.count }, (_, n) => n) as n (n)}
            <span class="pod"></span>
          {/each}
        </div>
        <strong>{kind.name}</strong>
        <small>{kind.note}</small>
      </div>
    {/each}
  </div>
</div>

<style>
  .node {
    --bg: #111217;
    --panel: #181b1f;
    --edge: #23262b;
    --text: #d8d9da;
    --muted: #7b7d82;
    --accent: #b877d9;
    --green: #73bf69;
    font-family:
      system-ui,
      -apple-system,
      "Segoe UI",
      sans-serif;
    background: var(--bg);
    border: 1px solid var(--edge);
    border-radius: 0.5em;
    padding: 0.8em;
    margin: var(--spacing-base) 0;
    color: var(--text);
    font-size: 0.8rem;
    display: grid;
    gap: 0.8em;
    box-shadow: 0 1.5em 3em -1em rgba(0, 0, 0, 0.35);
  }

  .bar {
    display: flex;
    align-items: center;
    gap: 0.6em;
  }
  .crumb,
  .muted {
    color: var(--muted);
  }
  .chip {
    background: rgba(50, 116, 217, 0.18);
    color: #6b9bff;
    padding: 0.1em 0.6em;
    border-radius: 0.25em;
    font-family: var(--font-mono);
    font-size: 0.85em;
  }
  .spacer {
    flex: 1;
  }

  .flow {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.6em;
  }
  .flow li {
    position: relative;
    background: var(--panel);
    border: 1px solid var(--edge);
    border-radius: 0.4em;
    padding: 0.6em 0.7em;
    display: grid;
    gap: 0.3em;
    animation: light 6s ease-in-out infinite;
    animation-delay: calc(var(--i) * 1.2s);
  }
  /* dashed connector into the next step */
  .flow li + li::before {
    content: "";
    position: absolute;
    right: calc(100% + 0.25em);
    top: 50%;
    width: 1.1em;
    border-top: 2px dashed var(--muted);
    animation: wire 6s ease-in-out infinite;
    animation-delay: calc(var(--i) * 1.2s - 0.4s);
  }
  .tag {
    justify-self: start;
    font-size: 0.8em;
    color: var(--muted);
    border: 1px solid var(--edge);
    border-radius: 1em;
    padding: 0 0.6em;
  }
  .flow li:last-child .tag {
    color: var(--green);
    border-color: rgba(115, 191, 105, 0.4);
  }
  .flow code {
    font-family: var(--font-mono);
    font-size: 0.9em;
    color: var(--muted);
    background: none;
    padding: 0;
  }

  .kinds {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.6em;
    border-top: 1px solid var(--edge);
    padding-top: 0.8em;
  }
  .kind {
    display: grid;
    gap: 0.25em;
  }
  .kind small {
    color: var(--muted);
  }
  .pods {
    display: flex;
    gap: 0.3em;
    margin-bottom: 0.2em;
  }
  .pod {
    width: 1.1em;
    height: 1.1em;
    border-radius: 0.25em;
    background: rgba(184, 119, 217, 0.25);
    border: 1px solid rgba(184, 119, 217, 0.6);
    animation: breathe 3s ease-in-out infinite;
    animation-delay: calc(var(--k) * 0.4s);
  }

  @keyframes light {
    0%,
    30%,
    100% {
      border-color: var(--edge);
      box-shadow: none;
    }
    10%,
    22% {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px rgba(184, 119, 217, 0.15);
    }
  }
  @keyframes wire {
    0%,
    30%,
    100% {
      border-color: var(--muted);
    }
    10%,
    22% {
      border-color: var(--accent);
    }
  }
  @keyframes breathe {
    50% {
      background: rgba(184, 119, 217, 0.45);
    }
  }

  @media (max-width: 600px) {
    .flow {
      grid-template-columns: 1fr;
      gap: 1em;
    }
    .flow li + li::before {
      right: auto;
      left: 1.2em;
      top: auto;
      bottom: 100%;
      width: 0;
      height: 1em;
      border-top: none;
      border-left: 2px dashed var(--muted);
    }
    .kinds {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .flow li,
    .flow li + li::before,
    .pod {
      animation: none;
    }
  }
</style>
