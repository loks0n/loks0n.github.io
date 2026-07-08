<!-- A mouse scuttles across the column as you scroll past, legs stepping,
     fading in and out at the edges of the text. Wordless. -->
<div class="scurry" aria-hidden="true">
	<svg class="mouse" viewBox="0 0 72 42">
		<path class="tail" d="M14 25 q-9 1 -9 -8 q0 -5 5 -6" fill="none" />
		<rect class="leg legs-a" x="22.7" y="26" width="2.6" height="11" rx="1.3" />
		<rect class="leg legs-b" x="29.7" y="26" width="2.6" height="11" rx="1.3" />
		<rect class="leg legs-b" x="47.7" y="26" width="2.6" height="11" rx="1.3" />
		<rect class="leg legs-a" x="53.7" y="26" width="2.6" height="11" rx="1.3" />
		<path
			class="fur"
			d="M14 26 C9 15 20 12 32 13 C46 14 58 18 65 24 C59 27 52 27 45 27 C32 28 20 29 14 26 Z"
		/>
		<circle class="fur" cx="52" cy="11" r="6.5" />
		<circle class="inner-ear" cx="52" cy="11" r="3.3" />
		<circle class="eye" cx="58" cy="19" r="1.4" />
		<circle class="nose" cx="65" cy="24" r="1.5" />
	</svg>
</div>

<style>
	.scurry {
		position: relative;
		height: 40px;
		margin: 0.5em 0;
		overflow: visible;
	}
	.mouse {
		position: absolute;
		bottom: 0;
		left: -6%;
		width: 34px;
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
	.leg {
		fill: #35302b;
		transform-box: fill-box;
		transform-origin: 50% 8%;
	}
	.legs-a {
		animation: step-a 0.34s steps(1, end) infinite;
	}
	.legs-b {
		animation: step-b 0.34s steps(1, end) infinite;
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
			transform: translateY(0) rotate(-2deg);
		}
		8% {
			opacity: 1;
			transform: translateY(-4px) rotate(1deg);
		}
		25% {
			transform: translateY(0) rotate(-2deg);
		}
		42% {
			transform: translateY(-4px) rotate(1deg);
		}
		59% {
			transform: translateY(0) rotate(-2deg);
		}
		76% {
			transform: translateY(-4px) rotate(1deg);
		}
		90% {
			opacity: 1;
			transform: translateY(0) rotate(-2deg);
		}
		100% {
			left: 100%;
			opacity: 0;
			transform: translateY(0) rotate(-2deg);
		}
	}
	@keyframes step-a {
		0% {
			transform: rotate(22deg);
		}
		50% {
			transform: rotate(-22deg);
		}
		100% {
			transform: rotate(22deg);
		}
	}
	@keyframes step-b {
		0% {
			transform: rotate(-22deg);
		}
		50% {
			transform: rotate(22deg);
		}
		100% {
			transform: rotate(-22deg);
		}
	}

	@supports not (animation-timeline: view()) {
		.mouse {
			animation: none;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.mouse,
		.leg {
			animation: none;
		}
	}
</style>
