<!-- A mouse scuttles across the column as you scroll past. Wordless. -->
<div class="scurry" aria-hidden="true">
	<svg class="mouse" viewBox="0 0 44 30">
		<path class="tail" d="M4 20 q-6 0 -3 -9" fill="none" />
		<ellipse class="body" cx="24" cy="20" rx="15" ry="8" />
		<circle class="ear" cx="35" cy="11" r="6" />
		<circle class="ear" cx="41" cy="15" r="4" />
		<circle class="eye" cx="40" cy="19" r="1.2" />
	</svg>
</div>

<style>
	.scurry {
		position: relative;
		height: 30px;
		margin: 0.5em 0;
		overflow: visible;
	}
	.mouse {
		position: absolute;
		bottom: 0;
		left: -14%;
		width: 26px;
		height: auto;
		animation: scurry linear both;
		animation-timeline: view();
		animation-range: entry 5% cover 70%;
	}
	.body,
	.ear {
		fill: #423d38;
	}
	.eye {
		fill: #fdfaf2;
	}
	.tail {
		stroke: #423d38;
		stroke-width: 2;
		stroke-linecap: round;
	}

	@keyframes scurry {
		0% {
			left: -14%;
			transform: translateY(0) rotate(-3deg);
		}
		12% {
			transform: translateY(-4px) rotate(2deg);
		}
		24% {
			transform: translateY(0) rotate(-3deg);
		}
		36% {
			transform: translateY(-4px) rotate(2deg);
		}
		48% {
			transform: translateY(0) rotate(-3deg);
		}
		60% {
			transform: translateY(-4px) rotate(2deg);
		}
		72% {
			transform: translateY(0) rotate(-3deg);
		}
		84% {
			transform: translateY(-3px) rotate(2deg);
		}
		100% {
			left: 114%;
			transform: translateY(0) rotate(-2deg);
		}
	}

	/* No scroll-timeline support: keep the mouse offstage rather than frozen mid-column. */
	@supports not (animation-timeline: view()) {
		.mouse {
			animation: none;
			left: -14%;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.mouse {
			animation: none;
			left: -14%;
		}
	}
</style>
