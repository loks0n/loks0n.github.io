<!-- A single drop into still water; the ripples spread and are drunk by the
     surface. Wordless, ambient, pure CSS. -->
<div class="well" aria-hidden="true">
	<div class="rings">
		<span style="--d: 0s"></span>
		<span style="--d: 1.2s"></span>
		<span style="--d: 2.4s"></span>
	</div>
	<svg class="drop" viewBox="0 0 16 22">
		<path d="M8 1 C8 1 2 11 2 15 a6 6 0 0 0 12 0 C14 11 8 1 8 1 Z" />
	</svg>
	<div class="sheen"></div>
</div>

<style>
	.well {
		position: relative;
		height: 190px;
		margin: var(--spacing-base) 0;
		border-radius: 0.5em;
		overflow: hidden;
		background: linear-gradient(#5a6f73, #415154);
	}
	.sheen {
		position: absolute;
		left: 0;
		right: 0;
		top: 58%;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(226, 236, 236, 0.45), transparent);
	}
	.drop {
		position: absolute;
		left: 50%;
		top: 0;
		width: 11px;
		height: auto;
		margin-left: -5.5px;
		fill: #e6efef;
		animation: drip 3.8s cubic-bezier(0.5, 0, 0.9, 0.4) infinite;
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
		border: 1.5px solid rgba(226, 236, 236, 0.5);
		border-radius: 50%;
		transform: scale(0);
		opacity: 0;
		animation: ripple 3.8s ease-out infinite;
		animation-delay: var(--d);
	}

	@keyframes drip {
		0% {
			transform: translateY(-6px) scale(0.9);
			opacity: 0;
		}
		6% {
			opacity: 1;
		}
		29% {
			transform: translateY(104px) scale(1);
			opacity: 1;
		}
		33% {
			transform: translateY(104px) scaleY(0.3) scaleX(1.4);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes ripple {
		0%,
		29% {
			transform: scale(0);
			opacity: 0;
		}
		33% {
			opacity: 0.6;
		}
		80% {
			transform: scale(8);
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
			transform: scale(3.5);
			opacity: 0.2;
		}
	}
</style>
