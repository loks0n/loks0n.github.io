<script lang="ts">
	// A sandworm breaches through a break in the page as you scroll past it.
	// Wordless, scroll-driven, pure CSS.
	const segs = Array.from({ length: 20 }, (_, i) => {
		const t = i / 19; // 0 = head, 1 = tail
		return {
			cx: +(60 + Math.sin(t * Math.PI * 1.1) * 16).toFixed(1),
			cy: +(40 + t * 158).toFixed(1),
			r: +(30 - t * 26).toFixed(1)
		};
	});
	const head = segs[0];
	const teeth = Array.from({ length: 18 }, (_, i) => {
		const a = (i / 18) * Math.PI * 2;
		return {
			x1: +(head.cx + Math.cos(a) * 12).toFixed(1),
			y1: +(head.cy + Math.sin(a) * 12).toFixed(1),
			x2: +(head.cx + Math.cos(a) * 21).toFixed(1),
			y2: +(head.cy + Math.sin(a) * 21).toFixed(1)
		};
	});
</script>

<div class="dunes" aria-hidden="true">
	<div class="spray"></div>
	<div class="worm">
		<svg viewBox="0 0 120 210">
			{#each [...segs].reverse() as s (s.cy)}
				<circle class="seg" cx={s.cx} cy={s.cy} r={s.r} />
				<ellipse class="ridge" cx={s.cx} cy={s.cy - s.r * 0.35} rx={s.r * 0.8} ry={s.r * 0.3} />
			{/each}
			<circle class="maw-rim" cx={head.cx} cy={head.cy} r="26" />
			<circle class="throat" cx={head.cx} cy={head.cy} r="21" />
			{#each teeth as t (t.x1)}
				<line class="tooth" x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
			{/each}
			<circle class="gullet" cx={head.cx} cy={head.cy} r="10" />
		</svg>
	</div>
	<div class="dune"></div>
</div>

<style>
	.dunes {
		position: relative;
		height: 190px;
		margin: var(--spacing-base) 0;
		overflow: hidden;
		border-radius: 0.5em;
		background: linear-gradient(#f4ecd8, #e6cfa6 68%, #d9bd88);
		view-timeline-name: --breach;
		view-timeline-axis: block;
	}
	.dune {
		position: absolute;
		inset: auto 0 -70px 0;
		height: 130px;
		background: radial-gradient(150% 100% at 50% 100%, #c3a26c, transparent 60%);
	}
	.spray {
		position: absolute;
		left: 50%;
		bottom: 6px;
		width: 150px;
		height: 60px;
		transform: translateX(-50%);
		background: radial-gradient(60% 100% at 50% 100%, rgba(120, 90, 45, 0.35), transparent 70%);
		opacity: 0;
		animation: dust linear both;
		animation-timeline: --breach;
		animation-range: entry 20% cover 75%;
	}

	.worm {
		position: absolute;
		bottom: -34px;
		left: 6%;
		width: 128px;
		height: 210px;
		transform-origin: 50% 88%;
		animation: breach linear both;
		animation-timeline: --breach;
		animation-range: entry 0% cover 95%;
		filter: drop-shadow(0 12px 9px rgba(80, 55, 20, 0.3));
	}
	.seg {
		fill: #ad8342;
	}
	.ridge {
		fill: #c49a55;
		opacity: 0.6;
	}
	.maw-rim {
		fill: #916a34;
	}
	.throat {
		fill: #3c2a12;
	}
	.gullet {
		fill: #150d04;
	}
	.tooth {
		stroke: #efe2c4;
		stroke-width: 2.4;
		stroke-linecap: round;
	}

	@keyframes breach {
		0% {
			transform: translate(-12%, 96%) rotate(-30deg);
		}
		46% {
			transform: translate(96%, -8%) rotate(4deg);
		}
		56% {
			transform: translate(150%, -8%) rotate(9deg);
		}
		100% {
			transform: translate(300%, 96%) rotate(38deg);
		}
	}
	@keyframes dust {
		0%,
		20% {
			opacity: 0;
			transform: translateX(-50%) scaleY(0.4);
		}
		45% {
			opacity: 1;
			transform: translateX(-50%) scaleY(1);
		}
		100% {
			opacity: 0;
			transform: translateX(-50%) scaleY(1.2);
		}
	}

	@supports not (animation-timeline: view()) {
		.worm {
			animation: none;
			transform: translate(70%, 4%) rotate(2deg);
		}
		.spray {
			animation: none;
			opacity: 1;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.worm {
			animation: none;
			transform: translate(70%, 4%) rotate(2deg);
		}
		.spray {
			animation: none;
			opacity: 0.6;
		}
	}
</style>
