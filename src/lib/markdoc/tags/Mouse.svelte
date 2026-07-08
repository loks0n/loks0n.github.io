<!-- A mouse scuttles across the column as you scroll past. Wordless. -->
<div class="scurry" aria-hidden="true">
	<svg class="mouse" viewBox="0 0 54 32">
		<path class="tail" d="M7 21 q-6 -1 -3 -10 q1 -3 4 -2" fill="none" />
		<ellipse class="fur" cx="23" cy="21" rx="16" ry="9" />
		<circle class="fur" cx="40" cy="18" r="8.5" />
		<circle class="fur ear" cx="41" cy="8.5" r="5.5" />
		<ellipse class="foot" cx="17" cy="30" rx="3" ry="1.6" />
		<ellipse class="foot" cx="29" cy="30" rx="3" ry="1.6" />
		<circle class="eye" cx="43" cy="17" r="1.3" />
		<circle class="nose" cx="48" cy="20" r="1.4" />
	</svg>
</div>

<style>
	.scurry {
		position: relative;
		height: 32px;
		margin: 0.5em 0;
		overflow: visible;
	}
	.mouse {
		position: absolute;
		bottom: 0;
		left: -14%;
		width: 30px;
		height: auto;
		animation: scurry linear both;
		animation-timeline: view();
		animation-range: entry 5% cover 72%;
	}
	.fur {
		fill: #423d38;
	}
	.ear {
		fill: #4f4842;
	}
	.foot {
		fill: #2f2b27;
	}
	.eye {
		fill: #fdfaf2;
	}
	.nose {
		fill: #b57a86;
	}
	.tail {
		stroke: #423d38;
		stroke-width: 2;
		stroke-linecap: round;
	}

	@keyframes scurry {
		0% {
			left: -14%;
			transform: translateY(0) rotate(-3deg) scaleY(1);
		}
		11% {
			transform: translateY(-5px) rotate(2deg) scaleY(1.04);
		}
		22% {
			transform: translateY(0) rotate(-3deg) scaleY(0.96);
		}
		33% {
			transform: translateY(-5px) rotate(2deg) scaleY(1.04);
		}
		44% {
			transform: translateY(0) rotate(-3deg) scaleY(0.96);
		}
		55% {
			transform: translateY(-5px) rotate(2deg) scaleY(1.04);
		}
		66% {
			transform: translateY(0) rotate(-3deg) scaleY(0.96);
		}
		77% {
			transform: translateY(-4px) rotate(2deg) scaleY(1.03);
		}
		88% {
			transform: translateY(0) rotate(-2deg) scaleY(0.98);
		}
		100% {
			left: 114%;
			transform: translateY(0) rotate(-2deg) scaleY(1);
		}
	}

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
