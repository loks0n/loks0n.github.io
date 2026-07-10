<!-- Pure-CSS reading progress bar, driven by the scroll position with no JS. -->
<div class="progress-bar" aria-hidden="true"></div>

<style>
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--color-primary);
    z-index: 1000;
    transform: scaleX(0);
    transform-origin: 0 50%;
    animation: grow-progress linear;
    animation-timeline: scroll(root block);
  }

  @keyframes grow-progress {
    to {
      transform: scaleX(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .progress-bar {
      animation: none;
    }
  }
</style>
