<script lang="ts">
  // A vast toothed maw rises from the sand as you scroll past. A lone bird
  // gives the scale. Pure CSS, scroll-driven.
  const C = 250;
  const R_IN = 150;
  const R_OUT = 232;
  const teeth = Array.from({ length: 56 }, (_, i) => {
    const a = (i / 56) * Math.PI * 2;
    const w = ((Math.PI * 2) / 56) * 0.34;
    const p = (r: number, ang: number) =>
      `${(C + Math.cos(ang) * r).toFixed(1)} ${(C + Math.sin(ang) * r).toFixed(1)}`;
    return `M${p(R_IN, a)} L${p(R_OUT, a - w)} L${p(R_OUT, a + w)} Z`;
  });
</script>

<div class="dunes" aria-hidden="true">
  <svg class="bird" viewBox="0 0 24 10">
    <path d="M1 8 Q6 1 12 6 Q18 1 23 8" fill="none" />
  </svg>

  <div class="maw">
    <svg viewBox="0 0 500 500">
      <defs>
        <radialGradient id="worm-flesh" cx="50%" cy="40%" r="62%">
          <stop offset="0%" stop-color="#8a6636" />
          <stop offset="100%" stop-color="#38280f" />
        </radialGradient>
        <radialGradient id="worm-throat" cx="50%" cy="46%" r="56%">
          <stop offset="0%" stop-color="#050301" />
          <stop offset="44%" stop-color="#0c0702" />
          <stop offset="78%" stop-color="#120b04" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#2c1e0d" stop-opacity="0" />
        </radialGradient>
      </defs>
      <circle cx={C} cy={C} r="248" fill="url(#worm-flesh)" />
      {#each teeth as d (d)}
        <path class="tooth" {d} />
      {/each}
      <circle cx={C} cy={C} r="214" fill="url(#worm-throat)" />
    </svg>
    <span class="sand s1"></span>
    <span class="sand s2"></span>
    <span class="sand s3"></span>
  </div>

  <div class="dune"></div>
  <div class="haze"></div>
</div>

<style>
  .dunes {
    position: relative;
    height: 240px;
    margin: var(--spacing-base) 0;
    overflow: hidden;
    border-radius: 0.5em;
    background: linear-gradient(#ddcaa2, #cbad7c 58%, #b7945d);
    view-timeline-name: --breach;
    view-timeline-axis: block;
  }
  .haze {
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(233, 216, 182, 0.6), transparent 34%);
    pointer-events: none;
    z-index: 4;
  }
  .dune {
    position: absolute;
    inset: auto -5% -46px -5%;
    height: 120px;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(#c6a066, #ac8a52);
    z-index: 3;
    box-shadow: 0 -14px 22px -8px rgba(120, 92, 50, 0.5);
  }
  .bird {
    position: absolute;
    top: 14%;
    left: 20%;
    width: 18px;
    opacity: 0.5;
    z-index: 2;
    animation: drift 9s ease-in-out infinite;
  }
  .bird path {
    stroke: #46341f;
    stroke-width: 1.4;
    stroke-linecap: round;
  }

  .maw {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: min(410px, 104%);
    aspect-ratio: 1;
    transform-origin: 50% 50%;
    transform: translate(-50%, 6%) scaleY(0.85);
    filter: drop-shadow(0 4px 26px rgba(30, 18, 4, 0.5));
    animation: surface linear both;
    animation-timeline: --breach;
    animation-range: entry 0% cover 92%;
  }
  .maw svg {
    display: block;
    width: 100%;
    height: auto;
  }
  .tooth {
    fill: #ece0c2;
  }

  .sand {
    position: absolute;
    top: 30%;
    width: 2px;
    height: 34px;
    background: linear-gradient(rgba(226, 208, 170, 0.8), transparent);
    border-radius: 2px;
    z-index: 3;
    animation: fall 2.2s linear infinite;
  }
  .sand.s1 {
    left: 38%;
    animation-delay: 0s;
  }
  .sand.s2 {
    left: 50%;
    animation-delay: 0.7s;
  }
  .sand.s3 {
    left: 62%;
    animation-delay: 1.4s;
  }

  @keyframes surface {
    0% {
      transform: translate(-50%, 30%) scale(0.72) scaleY(0.85);
    }
    100% {
      transform: translate(-50%, -6%) scale(1.32) scaleY(0.85);
    }
  }
  @keyframes fall {
    0% {
      transform: translateY(-8px) scaleY(0.6);
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    100% {
      transform: translateY(64px) scaleY(1.3);
      opacity: 0;
    }
  }
  @keyframes drift {
    0%,
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(28px, -6px);
    }
  }

  @supports not (animation-timeline: view()) {
    .maw {
      animation: none;
      transform: translate(-50%, 4%) scaleY(0.85);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .maw {
      animation: none;
      transform: translate(-50%, 4%) scaleY(0.85);
    }
    .sand,
    .bird {
      animation: none;
    }
  }
</style>
