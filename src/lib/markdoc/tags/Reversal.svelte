<script lang="ts">
  // Velázquez, "Juan de Pareja" (1650), Met Open Access / CC0. The painting is
  // extended into a wide field of its own warm shadow; it arrives washed pale
  // and resolves to its true colour once it is well into view. Wordless.
  import portrait from "./juan-de-pareja.jpg?enhanced";
</script>

<figure class="stage" aria-hidden="true">
  <enhanced:img class="face" src={portrait} alt="Juan de Pareja, painted by Velázquez in 1650" />
</figure>

<style>
  .stage {
    position: relative;
    height: 280px;
    margin: var(--spacing-base) 0;
    border-radius: 0.5em;
    overflow: hidden;
    display: grid;
    place-items: center;
    background: radial-gradient(74% 100% at 50% 38%, #2c2418, #17110a 78%);
  }
  .stage :global(picture) {
    display: contents;
  }
  .face {
    height: 112%;
    width: auto;
    object-fit: cover;
    /* feather the painting's edges into the surrounding shadow */
    -webkit-mask-image: radial-gradient(66% 82% at 50% 44%, #000 52%, transparent 100%);
    mask-image: radial-gradient(66% 82% at 50% 44%, #000 52%, transparent 100%);
    animation: resolve linear both;
    animation-timeline: view();
    animation-range: entry 35% cover 80%;
  }

  @keyframes resolve {
    from {
      filter: brightness(1.85) saturate(0.06) contrast(0.86);
    }
    to {
      filter: none;
    }
  }

  @supports not (animation-timeline: view()) {
    .face {
      animation: none;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .face {
      animation: none;
    }
  }
</style>
