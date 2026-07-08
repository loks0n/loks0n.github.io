<!-- A single drop into dark water; the ripples spread and are drunk by the
     surface. Wordless, ambient, pure CSS. -->
<div class="well" aria-hidden="true">
	<div class="rings">
		<span style="--d: 0s"></span>
		<span style="--d: 1.2s"></span>
		<span style="--d: 2.4s"></span>
	</div>
	<div class="drop"></div>
	<div class="sheen"></div>
</div>

<style>
	.well {
		position: relative;
		height: 200px;
		margin: var(--spacing-base) 0;
		border-radius: 0.5em;
		overflow: hidden;
		background:
			radial-gradient(120% 80% at 50% 8%, #12414f, transparent 60%),
			linear-gradient(#0c2c37, #061a22);
	}
	.sheen {
		position: absolute;
		left: 0;
		right: 0;
		top: 58%;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(150, 220, 235, 0.5), transparent);
	}
	.drop {
		position: absolute;
		left: 50%;
		top: 0;
		width: 7px;
		height: 7px;
		margin-left: -3.5px;
		background: linear-gradient(#dff4f7, #7fc6d6);
		border-radius: 50% 50% 50% 0;
		transform: rotate(45deg);
		animation: drip 3.6s ease-in infinite;
	}
	.rings {
		position: absolute;
		left: 50%;
		top: 58%;
	}
	.rings span {
		position: absolute;
		left: 0;
		top: 0;
		width: 14px;
		height: 14px;
		margin: -7px 0 0 -7px;
		border: 1.5px solid rgba(150, 220, 235, 0.6);
		border-radius: 50%;
		transform: scale(0);
		opacity: 0;
		animation: ripple 3.6s ease-out infinite;
		animation-delay: var(--d);
	}

	@keyframes drip {
		0% {
			transform: translateY(-4px) rotate(45deg) scale(1);
			opacity: 0;
		}
		6% {
			opacity: 1;
		}
		30% {
			transform: translateY(112px) rotate(45deg) scale(1);
			opacity: 1;
		}
		34% {
			transform: translateY(112px) rotate(45deg) scale(0.2);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes ripple {
		0%,
		30% {
			transform: scale(0);
			opacity: 0;
		}
		34% {
			opacity: 0.7;
		}
		80% {
			transform: scale(9);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.drop,
		.rings span {
			animation: none;
		}
		.rings span:first-child {
			transform: scale(4);
			opacity: 0.25;
		}
	}
</style>
