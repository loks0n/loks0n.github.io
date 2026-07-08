<!-- A mouse scuttles across the column as you scroll past, fading in and out at
     the edges of the text. Wordless. -->
<div class="scurry" aria-hidden="true">
	<svg class="mouse" viewBox="0 0 66 34">
		<path class="tail" d="M12 26 q-8 1 -8 -8 q0 -5 5 -6" fill="none" />
		<ellipse class="foot" cx="22" cy="30" rx="3" ry="1.6" />
		<ellipse class="foot" cx="36" cy="30" rx="3" ry="1.6" />
		<path
			class="fur"
			d="M11 26 C8 15 15 11 25 11 C41 11 53 15 62 21 C55 26 45 26 35 27 C23 28 14 28 11 26 Z"
		/>
		<circle class="fur" cx="48" cy="9" r="7" />
		<circle class="inner-ear" cx="48" cy="9" r="3.5" />
		<circle class="eye" cx="54" cy="16" r="1.4" />
		<circle class="nose" cx="62" cy="21" r="1.5" />
	</svg>
</div>

<style>
	.scurry {
		position: relative;
		height: 34px;
		margin: 0.5em 0;
		overflow: visible;
	}
	.mouse {
		position: absolute;
		bottom: 0;
		left: -6%;
		width: 32px;
		height: auto;
		opacity: 0;
		animation: scurry linear both;
		animation-timeline: view();
		animation-range: entry 6% cover 74%;
	}
	.fur {
		fill: #423d38;
	}
	.inner-ear {
		fill: #5f5751;
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
			left: -6%;
			opacity: 0;
			transform: translateY(0) rotate(-3deg) scaleY(1);
		}
		8% {
			opacity: 1;
			transform: translateY(-5px) rotate(2deg) scaleY(1.04);
		}
		22% {
			transform: translateY(0) rotate(-3deg) scaleY(0.96);
		}
		36% {
			transform: translateY(-5px) rotate(2deg) scaleY(1.04);
		}
		50% {
			transform: translateY(0) rotate(-3deg) scaleY(0.96);
		}
		64% {
			transform: translateY(-5px) rotate(2deg) scaleY(1.04);
		}
		78% {
			transform: translateY(0) rotate(-3deg) scaleY(0.98);
		}
		90% {
			opacity: 1;
			transform: translateY(-3px) rotate(2deg) scaleY(1.02);
		}
		100% {
			left: 100%;
			opacity: 0;
			transform: translateY(0) rotate(-2deg) scaleY(1);
		}
	}

	@supports not (animation-timeline: view()) {
		.mouse {
			animation: none;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.mouse {
			animation: none;
		}
	}
</style>
