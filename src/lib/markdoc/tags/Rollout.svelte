<script lang="ts">
  // Rollout grid: each control moves off -> audit -> enforce, staging first. No props.
  type State = "enforce" | "audit" | "na";
  const columns = ["staging", "edge", "cloud", "mgmt + dns", "databases"];
  const rows: { name: string; final: State[] }[] = [
    { name: "Deny egress", final: ["enforce", "enforce", "enforce", "enforce", "enforce"] },
    { name: "Pod security", final: ["enforce", "enforce", "enforce", "enforce", "audit"] },
    { name: "Seccomp", final: ["enforce", "enforce", "enforce", "enforce", "enforce"] },
    { name: "Escape detection", final: ["enforce", "enforce", "na", "na", "na"] },
  ];
</script>

<div
  class="rollout"
  role="img"
  aria-label="Rollout of four security controls across Appwrite's cluster groups. Each went to staging first, then audit mode, then enforce mode. Default-deny egress and the seccomp profile are enforced everywhere, pod security is enforced except on the database clusters where it audits, and escape detection runs on edge. A network-policy alert caught a missing exception before customers did."
>
  <div class="grid" style="--cols: {columns.length}">
    <span></span>
    {#each columns as col (col)}
      <span class="col">{col}</span>
    {/each}

    {#each rows as row, r (row.name)}
      <span class="row">{row.name}</span>
      {#each row.final as state, c (c)}
        <span class="cell {state}" style="--d: {c * 0.9 + r * 0.25}s">
          {#if state !== "na"}<i></i>{/if}
        </span>
      {/each}
    {/each}
  </div>

  <div class="legend">
    <span><b class="audit"></b>audit</span>
    <span><b class="enforce"></b>enforce</span>
    <span class="spacer"></span>
    <span class="alert">
      <span class="firing">● NetworkPolicyDrops firing · edge → storage</span>
      <span class="resolved">✓ resolved · exception added to edge</span>
    </span>
  </div>
</div>

<style>
  .rollout {
    --bg: #111217;
    --panel: #181b1f;
    --edge: #23262b;
    --text: #d8d9da;
    --muted: #7b7d82;
    --amber: #ff9830;
    --green: #73bf69;
    --red: #f2495c;
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

  .grid {
    display: grid;
    grid-template-columns: minmax(8em, 1.4fr) repeat(var(--cols), 1fr);
    gap: 0.35em;
    align-items: center;
  }
  .col {
    color: var(--muted);
    font-size: 0.85em;
    text-align: center;
  }
  .row {
    white-space: nowrap;
  }
  .cell {
    height: 1.8em;
    border-radius: 0.25em;
    background: var(--panel);
    border: 1px solid var(--edge);
    overflow: hidden;
  }
  .cell.na {
    background: repeating-linear-gradient(
      -45deg,
      transparent 0 4px,
      rgba(255, 255, 255, 0.03) 4px 8px
    );
  }
  .cell i {
    display: block;
    height: 100%;
    background: var(--panel);
  }
  .cell.audit i {
    animation: to-audit 0.6s ease forwards;
    animation-delay: var(--d);
  }
  .cell.enforce i {
    animation:
      to-audit 0.6s ease forwards,
      to-enforce 0.6s ease forwards;
    animation-delay: var(--d), calc(var(--d) + 1.4s);
  }

  .legend {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.4em 1em;
    margin-top: 0.8em;
    color: var(--muted);
  }
  .legend b {
    display: inline-block;
    width: 0.8em;
    height: 0.8em;
    border-radius: 0.2em;
    margin-right: 0.4em;
    vertical-align: -0.1em;
  }
  b.audit {
    background: var(--amber);
  }
  b.enforce {
    background: var(--green);
  }
  .spacer {
    flex: 1;
  }
  .alert {
    display: grid;
    font-family: var(--font-mono);
    font-size: 0.9em;
  }
  .alert > span {
    grid-area: 1 / 1;
    opacity: 0;
  }
  .firing {
    color: var(--red);
    animation:
      show 0.3s ease forwards 3s,
      hide 0.3s ease forwards 5.2s;
  }
  .resolved {
    color: var(--green);
    animation: show 0.3s ease forwards 5.4s;
  }

  @keyframes to-audit {
    to {
      background: var(--amber);
    }
  }
  @keyframes to-enforce {
    to {
      background: var(--green);
    }
  }
  @keyframes show {
    to {
      opacity: 1;
    }
  }
  @keyframes hide {
    to {
      opacity: 0;
    }
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: minmax(6.5em, 1.2fr) repeat(var(--cols), 1fr);
    }
    .row {
      white-space: normal;
      font-size: 0.9em;
    }
    .col {
      font-size: 0.75em;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cell i,
    .firing {
      animation: none;
    }
    .cell.audit i {
      background: var(--amber);
    }
    .cell.enforce i {
      background: var(--green);
    }
    .resolved {
      animation: none;
      opacity: 1;
    }
  }
</style>
