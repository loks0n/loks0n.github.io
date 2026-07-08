<script lang="ts">
	// A sandworm breaches through a break in the page as you scroll past it.
	// Wordless, scroll-driven, pure CSS.
	const segs = Array.from({ length: 15 }, (_, i) => {
		const t = i / 14; // 0 = head, 1 = tail
		return {
			cx: +(60 + Math.sin(t * Math.PI * 1.15) * 15).toFixed(1),
			cy: +(34 + t * 150).toFixed(1),
			r: +(27 - t * 23).toFixed(1)
		};
	});
</script>

<div class="dunes" aria-hidden="true">
	<div class="worm">
		<svg viewBox="0 0 120 200">
			{#each [...segs].reverse() as s (s.cy)}
				<circle class="seg" cx={s.cx} cy={s.cy} r={s.r} />
			{/each}
			<!-- maw -->
			<circle class="maw outer" cx={segs[0].cx} cy={segs[0].cy} r="24" />
			<circle class="maw mid" cx={segs[0].cx} cy={segs[0].cy} r="15" />
			<circle class="maw inner" cx={segs[0].cx} cy={segs[0].cy} r="7" />
		</svg>
	</div>
	<div class="dune"></div>
</div>

<style>
	.dunes {
		position: relative;
		height: 170px;
		margin: var(--spacing-base) 0;
		overflow: hidden;
		border-radius: 0.5em;
		background: linear-gradient(#f2e9d3, #e2caa0 70%, #d3b57e);
		view-timeline-name: --breach;
		view-timeline-axis: block;
	}
	.dune {
		position: absolute;
		inset: auto 0 -60px 0;
		height: 120px;
		background: radial-gradient(140% 100% at 50% 100%, #c3a26c, transparent 62%);
	}

	.worm {
		position: absolute;
		bottom: -30px;
		left: 8%;
		width: 120px;
		height: 200px;
		transform-origin: 50% 90%;
		animation: breach linear both;
		animation-timeline: --breach;
		animation-range: entry 0% cover 95%;
		filter: drop-shadow(0 10px 8px rgba(80, 55, 20, 0.35));
	}
	.seg {
		fill: #a9803f;
		stroke: #7c5a28;
		stroke-width: 1.5;
	}
	.maw.outer {
		fill: #8a6531;
	}
	.maw.mid {
		fill: #5c421f;
	}
	.maw.inner {
		fill: #241809;
	}

	@keyframes breach {
		0% {
			transform: translate(-10%, 95%) rotate(-28deg);
		}
		45% {
			transform: translate(120%, -22%) rotate(6deg);
		}
		55% {
			transform: translate(180%, -22%) rotate(10deg);
		}
		100% {
			transform: translate(320%, 95%) rotate(40deg);
		}
	}

	@supports not (animation-timeline: view()) {
		.worm {
			animation: none;
			transform: translate(60%, 95%) rotate(0deg);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.worm {
			animation: none;
			transform: translate(60%, 60%) rotate(0deg);
		}
	}
</style>
