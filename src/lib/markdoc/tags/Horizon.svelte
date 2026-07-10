<!-- Sea and sky settling into the same grey; a boat breathing on the line,
     the water clipping its hull so it floats low. -->
<div class="seascape" aria-hidden="true">
  <div class="sky"></div>
  <div class="glow"></div>
  <svg class="boat" viewBox="0 0 60 46">
    <path class="sail" d="M30 4 L30 34 L11 34 Z" />
    <path class="sail jib" d="M30 10 L30 34 L44 34 Z" />
    <line class="mast" x1="30" y1="2" x2="30" y2="36" />
    <path class="hull" d="M12 35 L48 35 Q44 45 30 45 Q16 45 12 35 Z" />
  </svg>
  <div class="sea"></div>
  <svg class="boat reflect" viewBox="0 0 60 46">
    <path class="sail" d="M30 4 L30 34 L11 34 Z" />
    <path class="sail jib" d="M30 10 L30 34 L44 34 Z" />
    <path class="hull" d="M12 35 L48 35 Q44 45 30 45 Q16 45 12 35 Z" />
  </svg>
</div>

<style>
  .seascape {
    position: relative;
    height: 220px;
    margin: var(--spacing-base) 0;
    border-radius: 0.5em;
    overflow: hidden;
    isolation: isolate;
  }
  .sky {
    position: absolute;
    inset: 0 0 42% 0;
    background: linear-gradient(#b7bbbe, #cdcac4);
    z-index: 1;
  }
  .glow {
    position: absolute;
    left: 50%;
    top: 58%;
    width: 300px;
    height: 130px;
    transform: translate(-50%, -50%);
    background: radial-gradient(closest-side, rgba(242, 237, 224, 0.9), transparent);
    z-index: 2;
  }
  .sea {
    position: absolute;
    inset: 58% 0 0 0;
    background: linear-gradient(#c6c7c5, #99a0a4);
    z-index: 4;
  }
  .boat {
    position: absolute;
    left: 50%;
    top: 58%;
    width: 44px;
    height: auto;
    z-index: 3;
    transform-origin: 50% 100%;
    translate: -50% -86%;
    animation: bob 6.5s ease-in-out infinite;
  }
  .boat.reflect {
    z-index: 5;
    translate: -50% -14%;
    scale: 1 -1;
    opacity: 0.14;
    filter: blur(1.2px);
    animation-name: bob-reflect;
  }
  .sail {
    fill: #3a3f43;
  }
  .sail.jib {
    fill: #4a4f53;
  }
  .hull {
    fill: #23272a;
  }
  .mast {
    stroke: #23272a;
    stroke-width: 1.5;
  }

  @keyframes bob {
    0%,
    100% {
      transform: translateY(0) rotate(-1.5deg);
    }
    50% {
      transform: translateY(-3px) rotate(1.5deg);
    }
  }
  @keyframes bob-reflect {
    0%,
    100% {
      transform: translateY(0) rotate(-1.5deg);
    }
    50% {
      transform: translateY(3px) rotate(1.5deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .boat {
      animation: none;
    }
  }
</style>
