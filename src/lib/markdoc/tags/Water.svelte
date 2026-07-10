<!-- A drop into still water, seen at a low angle: it falls, rebounds, and sends
     perspective ripples across a shimmering surface. Wordless, pure CSS. -->
<div class="pool" aria-hidden="true">
  <div class="shimmer"></div>
  <div class="surface">
    <span class="ring" style="--d: 0s"></span>
    <span class="ring" style="--d: 0.22s"></span>
    <span class="ring" style="--d: 0.44s"></span>
  </div>
  <span class="rebound"></span>
  <svg class="drop" viewBox="0 0 16 24">
    <path d="M8 0 C8 0 2 11 2 16 a6 6 0 0 0 12 0 C14 11 8 0 8 0 Z" />
  </svg>
  <div class="vignette"></div>
</div>

<style>
  .pool {
    --surface: 45%;
    position: relative;
    height: 240px;
    margin: var(--spacing-base) 0;
    border-radius: 0.5em;
    overflow: hidden;
    background: linear-gradient(180deg, #b9c8ca 0%, #93a9ad 45%, #638086 100%);
  }
  .shimmer {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(40% 22% at 30% 40%, rgba(245, 250, 250, 0.35), transparent 70%),
      radial-gradient(50% 26% at 72% 62%, rgba(245, 250, 250, 0.28), transparent 70%);
    mix-blend-mode: soft-light;
    animation: drift 11s ease-in-out infinite alternate;
  }
  .vignette {
    position: absolute;
    inset: 0;
    background: radial-gradient(120% 90% at 50% 40%, transparent 55%, rgba(40, 60, 64, 0.4));
    pointer-events: none;
  }

  .surface {
    position: absolute;
    left: 50%;
    top: var(--surface);
    transform: scaleY(0.4);
  }
  .ring {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    translate: -50% -50%;
    border: 1.6px solid rgba(240, 247, 247, 0.7);
    border-radius: 50%;
    opacity: 0;
    animation: ripple 4.4s ease-out infinite;
    animation-delay: var(--d);
  }

  .drop {
    position: absolute;
    left: 50%;
    top: 0;
    width: 12px;
    height: auto;
    margin-left: -6px;
    fill: #eef4f4;
    animation: drip 4.4s ease-in infinite;
  }
  .rebound {
    position: absolute;
    left: 50%;
    top: var(--surface);
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    background: #eef4f4;
    border-radius: 50%;
    opacity: 0;
    animation: rebound 4.4s ease-out infinite;
  }

  @keyframes drip {
    0% {
      transform: translateY(-14px) scaleY(0.9);
      opacity: 0;
    }
    5% {
      opacity: 0.95;
    }
    23% {
      transform: translateY(94px) scaleY(1.15);
      opacity: 0.95;
    }
    26% {
      transform: translateY(94px) scaleY(0.2) scaleX(1.6);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes rebound {
    0%,
    25% {
      transform: translateY(0) scale(0.4);
      opacity: 0;
    }
    30% {
      transform: translateY(-20px) scale(1);
      opacity: 0.9;
    }
    42% {
      transform: translateY(2px) scale(0.6);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes ripple {
    0%,
    25% {
      width: 0;
      height: 0;
      opacity: 0;
    }
    30% {
      opacity: 0.7;
    }
    92% {
      width: 460px;
      height: 460px;
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes drift {
    from {
      transform: translateX(-6%);
    }
    to {
      transform: translateX(6%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .drop,
    .rebound,
    .ring,
    .shimmer {
      animation: none;
    }
    .ring:first-child {
      width: 240px;
      height: 240px;
      opacity: 0.25;
    }
  }
</style>
