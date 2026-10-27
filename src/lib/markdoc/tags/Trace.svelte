<script lang="ts">
  // Shape of a median edge execution, rounded from production metrics.
  const TOTAL = 165;
  const spans = [
    { name: "execution", note: "p50 of millions a day", start: 0, ms: 165, depth: 0, kind: "root" },
    { name: "wait for runtime", note: "warm · ~98%", start: 0, ms: 2.5, depth: 1, kind: "cache" },
    { name: "execute", note: "customer code", start: 2.5, ms: 158, depth: 1, kind: "runtime" },
    { name: "collect logs", note: "", start: 160.5, ms: 4.2, depth: 1, kind: "proxy" },
  ];
  const pct = (v: number) => `${((v / TOTAL) * 100).toFixed(2)}%`;
</script>

<div
  class="trace"
  role="img"
  aria-label="A median edge execution takes around 165ms: a couple of milliseconds waiting for a warm runtime, almost all the rest executing customer code, and a few milliseconds collecting logs. About 2% of executions need a cold start, which takes a few seconds."
>
  <div class="head">
    <span class="method">edge</span>
    <span class="url">all regions · p50</span>
    <span class="spacer"></span>
    <span class="total">~{TOTAL}ms</span>
  </div>

  <div class="axis">
    {#each [0, 50, 100, 150] as t (t)}
      <span style="left: {pct(t)}">{t}ms</span>
    {/each}
  </div>

  <ul>
    {#each spans as s, i (s.name)}
      <li style="--i: {i}">
        <span class="label" style="padding-left: {s.depth * 0.9}em">
          {s.name}<small>{s.note}</small>
        </span>
        <span class="lane">
          <span class="bar {s.kind}" style="left: {pct(s.start)}; width: max(3px, {pct(s.ms)})"
          ></span>
          {#if s.ms > 10}
            <span class="ms inside" style="right: calc(100% - {pct(s.start + s.ms)} + 4px)"
              >{s.ms}ms</span
            >
          {:else if s.start > TOTAL * 0.8}
            <span class="ms" style="right: calc(100% - {pct(s.start)} + 4px)"
              >~{Math.round(s.ms)}ms</span
            >
          {:else}
            <span class="ms" style="left: calc({pct(s.start + s.ms)} + 4px)"
              >~{Math.round(s.ms)}ms</span
            >
          {/if}
        </span>
      </li>
    {/each}
  </ul>

  <p class="foot">cold start on the other ~2%: <b>create runtime, a few seconds</b></p>
</div>

<style>
  .trace {
    --bg: #111217;
    --edge: #23262b;
    --text: #d8d9da;
    --muted: #7b7d82;
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
    box-shadow: 0 1.5em 3em -1em rgba(0, 0, 0, 0.35);
  }

  .head {
    display: flex;
    align-items: center;
    gap: 0.6em;
    font-family: var(--font-mono);
    margin-bottom: 0.8em;
  }
  .method {
    color: #6b9bff;
    font-weight: 700;
  }
  .url {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .spacer {
    flex: 1;
  }
  .total {
    color: var(--muted);
  }

  .axis,
  .lane {
    position: relative;
  }
  .axis {
    margin-left: 42%;
    height: 1.2em;
    color: var(--muted);
    font-size: 0.85em;
    border-bottom: 1px solid var(--edge);
  }
  .axis span {
    position: absolute;
    transform: translateX(-50%);
  }
  .axis span:first-child {
    transform: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: grid;
    grid-template-columns: 42% 1fr;
    align-items: center;
    height: 1.9em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    opacity: 0;
    animation: fade 0.3s ease forwards;
    animation-delay: calc(var(--i) * 0.25s);
  }
  .label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .label small {
    color: var(--muted);
    margin-left: 0.5em;
    font-size: 0.9em;
  }
  .lane {
    height: 100%;
  }
  .bar {
    position: absolute;
    top: 30%;
    height: 40%;
    border-radius: 2px;
    transform-origin: left;
    transform: scaleX(0);
    animation: grow 0.5s ease-out forwards;
    animation-delay: calc(var(--i) * 0.25s + 0.1s);
  }
  .root {
    background: #5794f2;
  }
  .cache {
    background: #73bf69;
  }
  .pick {
    background: #fade2a;
  }
  .proxy {
    background: #b877d9;
  }
  .runtime {
    background: #ff9830;
  }
  .ms {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: var(--muted);
    font-family: var(--font-mono);
    font-size: 0.85em;
    white-space: nowrap;
  }
  .foot {
    margin: 0.7em 0 0;
    color: var(--muted);
    font-family: var(--font-mono);
    font-size: 0.9em;
  }
  .foot b {
    color: #ff9830;
    font-weight: 500;
  }
  .ms.inside {
    color: #111217;
    font-weight: 600;
    opacity: 0;
    animation: fade 0.3s ease forwards;
    animation-delay: calc(var(--i) * 0.25s + 0.5s);
  }

  @keyframes fade {
    to {
      opacity: 1;
    }
  }
  @keyframes grow {
    to {
      transform: scaleX(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    li,
    .bar,
    .foot {
      margin: 0.7em 0 0;
      color: var(--muted);
      font-family: var(--font-mono);
      font-size: 0.9em;
    }
    .foot b {
      color: #ff9830;
      font-weight: 500;
    }
    .ms.inside {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }
</style>
