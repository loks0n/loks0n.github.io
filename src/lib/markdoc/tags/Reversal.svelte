<!-- A portrait that arrives washed pale and resolves to its true colour as it
     reaches the middle of the view. Wordless. -->
<figure class="plate" aria-hidden="true">
	<svg class="portrait" viewBox="0 0 200 210">
		<!-- shoulders -->
		<path class="cloth" d="M18 210 C24 158 60 140 100 140 C140 140 176 158 182 210 Z" />
		<!-- neck -->
		<rect class="skin" x="86" y="120" width="28" height="34" rx="12" />
		<!-- head -->
		<ellipse class="skin" cx="100" cy="88" rx="46" ry="54" />
		<!-- hair -->
		<path class="hair" d="M54 84 C50 34 150 34 146 84 C150 60 140 44 100 44 C60 44 50 60 54 84 Z" />
		<!-- the shadow's four scars -->
		<g class="scars">
			<line x1="70" y1="72" x2="86" y2="104" />
			<line x1="78" y1="68" x2="94" y2="100" />
			<line x1="86" y1="66" x2="101" y2="98" />
			<line x1="94" y1="66" x2="108" y2="96" />
		</g>
	</svg>
</figure>

<style>
	.plate {
		width: min(240px, 70%);
		margin: var(--spacing-base) auto;
		padding: 0.8em;
		background: #fdfaf2;
		border: 1px solid rgba(51, 51, 51, 0.16);
		box-shadow: 0 1.2em 2.4em -1.2em rgba(51, 51, 51, 0.4);
	}
	.portrait {
		display: block;
		width: 100%;
		height: auto;
		animation: resolve linear both;
		animation-timeline: view();
		animation-range: entry 15% cover 52%;
	}
	.skin {
		fill: #8a4a2c;
	}
	.cloth {
		fill: #2c2620;
	}
	.hair {
		fill: #201509;
	}
	.scars line {
		stroke: #c67a4c;
		stroke-width: 2;
		stroke-linecap: round;
		opacity: 0.55;
	}

	@keyframes resolve {
		from {
			filter: brightness(1.75) saturate(0.1) contrast(0.9);
		}
		to {
			filter: none;
		}
	}

	@supports not (animation-timeline: view()) {
		.portrait {
			animation: none;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.portrait {
			animation: none;
		}
	}
</style>
