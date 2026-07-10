<script lang="ts">
  // Pure-CSS demo of pfp running in live `top` mode. No props, no JS.
  const rows = [
    { fn: "WP_Hook::apply_filters", pct: 38 },
    { fn: "json_encode", pct: 22 },
    { fn: "Repository::all", pct: 16 },
    { fn: "PDOStatement::execute", pct: 11 },
    { fn: "array_map", pct: 8 },
    { fn: "mysqli::query", pct: 5 },
  ];
</script>

<div
  class="term"
  role="img"
  aria-label="Terminal running pfp in live top mode, showing per-function CPU percentages updating"
>
  <div class="chrome">
    <span class="dot red"></span>
    <span class="dot amber"></span>
    <span class="dot green"></span>
    <span class="title">pfp — live</span>
  </div>
  <div class="body">
    <div class="cmd">
      <span class="prompt">$</span>
      <span class="typed">pfp -p 4821 -f top</span><span class="caret"></span>
    </div>
    <div class="out">
      <div class="head"><span>SELF</span><span></span><span>FUNCTION</span></div>
      {#each rows as row, i (row.fn)}
        <div class="row" style="--i: {i}; --w: {row.pct}%">
          <span class="pct">{row.pct}%</span>
          <span class="track"><span class="fill"></span></span>
          <span class="fn">{row.fn}</span>
        </div>
      {/each}
      <div class="status">
        <span class="live"></span> 999 Hz · 4996/5000 samples · 3.1 MB RSS
      </div>
    </div>
  </div>
</div>

<style>
  .term {
    --bg: #1a1b26;
    --fg: #a9b1d6;
    --muted: #565f89;
    --accent: #7dcfff;
    --green: #9ece6a;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    line-height: 1.6;
    background: var(--bg);
    border-radius: 0.6em;
    overflow: hidden;
    box-shadow: 0 1.5em 3em -1em rgba(0, 0, 0, 0.35);
    margin: var(--spacing-base) 0;
    color: var(--fg);
  }

  .chrome {
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.7em 0.9em;
    background: rgba(255, 255, 255, 0.04);
  }

  .dot {
    width: 0.75em;
    height: 0.75em;
    border-radius: 50%;
    display: inline-block;
  }
  .red {
    background: #f7768e;
  }
  .amber {
    background: #e0af68;
  }
  .green {
    background: #9ece6a;
  }
  .title {
    margin-left: 0.4em;
    color: var(--muted);
    font-size: 0.9em;
  }

  .body {
    padding: 0.9em 1.1em 1.1em;
  }

  .cmd {
    white-space: nowrap;
  }
  .prompt {
    color: var(--green);
    margin-right: 0.5em;
  }
  .typed {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: bottom;
    width: 0;
    animation: type 1.5s steps(18) 0.4s both;
  }
  .caret {
    display: inline-block;
    width: 0.55em;
    height: 1.05em;
    background: var(--fg);
    vertical-align: text-bottom;
    margin-left: 0.1em;
    animation: blink 1.05s step-end infinite;
  }

  .out {
    margin-top: 0.7em;
    display: grid;
    gap: 0.15em;
  }

  .head {
    display: grid;
    grid-template-columns: 3.2em 1fr auto;
    gap: 0.8em;
    color: var(--muted);
    letter-spacing: 0.08em;
    font-size: 0.85em;
    opacity: 0;
    animation: fade 0.4s ease 2s forwards;
  }
  .head span:last-child {
    text-align: right;
  }

  .row {
    display: grid;
    grid-template-columns: 3.2em 1fr auto;
    gap: 0.8em;
    align-items: center;
    opacity: 0;
    animation: fade 0.4s ease forwards;
    animation-delay: calc(2.2s + var(--i) * 0.22s);
  }
  .pct {
    color: var(--accent);
    font-variant-numeric: tabular-nums;
  }
  .fn {
    color: var(--fg);
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .track {
    height: 0.7em;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 0.2em;
    overflow: hidden;
  }
  .fill {
    display: block;
    height: 100%;
    width: 0;
    transform-origin: left;
    border-radius: inherit;
    background: linear-gradient(90deg, var(--green), var(--accent));
    animation:
      grow 0.7s ease-out both,
      breathe calc(2.4s + var(--i) * 0.5s) ease-in-out infinite;
    animation-delay: calc(2.3s + var(--i) * 0.22s), calc(3.1s + var(--i) * 0.22s);
  }

  .status {
    margin-top: 0.6em;
    color: var(--muted);
    font-size: 0.85em;
    opacity: 0;
    animation: fade 0.5s ease 3.4s forwards;
  }
  .live {
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background: var(--green);
    margin-right: 0.4em;
    vertical-align: middle;
    animation: pulse 1.6s ease-in-out infinite;
  }

  @keyframes type {
    from {
      width: 0;
    }
    to {
      width: 18ch;
    }
  }
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
  @keyframes fade {
    to {
      opacity: 1;
    }
  }
  @keyframes grow {
    to {
      width: var(--w);
    }
  }
  @keyframes breathe {
    0%,
    100% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(0.93);
    }
  }
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.25;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .typed {
      width: 18ch;
      animation: none;
    }
    .caret {
      animation: none;
    }
    .head,
    .row,
    .status {
      opacity: 1;
      animation: none;
    }
    .fill {
      width: var(--w);
      animation: none;
    }
    .live {
      animation: none;
    }
  }
</style>
