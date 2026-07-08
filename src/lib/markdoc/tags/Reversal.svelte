<script lang="ts">
	// Velázquez, "Juan de Pareja" (1650), Met Open Access / CC0. The portrait
	// arrives washed pale and resolves to its true colour once it is well into
	// view. Wordless.
	import portrait from './juan-de-pareja.jpg?enhanced';
</script>

<figure class="plate">
	<span class="frame">
		<enhanced:img class="face" src={portrait} alt="Juan de Pareja, painted by Velázquez in 1650" />
	</span>
</figure>

<style>
	.plate {
		width: min(230px, 66%);
		margin: var(--spacing-base) auto;
		padding: 0.7em;
		background: #fdfaf2;
		border: 1px solid rgba(51, 51, 51, 0.16);
		box-shadow: 0 1.2em 2.4em -1.2em rgba(51, 51, 51, 0.45);
	}
	.frame {
		display: block;
		aspect-ratio: 5 / 6;
		overflow: hidden;
	}
	.frame :global(picture) {
		display: block;
		width: 100%;
		height: 100%;
	}
	.face {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 10%;
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
