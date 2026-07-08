<script lang="ts">
	// A mouse's tracks pressed into the sand, appearing one by one as you scroll,
	// leading the way onward. Wordless, scroll-driven, pure CSS.
	const prints = Array.from({ length: 11 }, (_, i) => ({
		x: +(5 + i * 8.4).toFixed(1),
		y: i % 2 === 0 ? 5 : 21,
		start: +(12 + i * 5.5).toFixed(1)
	}));
</script>

<div class="track" aria-hidden="true">
	{#each prints as p (p.x)}
		<svg
			class="print"
			viewBox="0 0 14 12"
			style="left:{p.x}%; top:{p.y}px; animation-range: cover {p.start}% cover {p.start + 9}%;"
		>
			<ellipse cx="4" cy="6" rx="2.4" ry="1.9" />
			<circle cx="8" cy="3.4" r="1.05" />
			<circle cx="9.2" cy="6" r="1.05" />
			<circle cx="8" cy="8.6" r="1.05" />
		</svg>
	{/each}
</div>

<style>
	.track {
		position: relative;
		height: 40px;
		margin: 0.8em 0;
		view-timeline-name: --track;
		view-timeline-axis: block;
	}
	.print {
		position: absolute;
		width: 13px;
		height: auto;
		fill: #7c6034;
		opacity: 0;
		animation: press linear both;
		animation-timeline: --track;
	}

	@keyframes press {
		from {
			opacity: 0;
			transform: scale(0.3);
		}
		to {
			opacity: 0.42;
			transform: scale(1);
		}
	}

	@supports not (animation-timeline: view()) {
		.print {
			animation: none;
			opacity: 0.42;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.print {
			animation: none;
			opacity: 0.42;
		}
	}
</style>
