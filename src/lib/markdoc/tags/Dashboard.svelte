<script lang="ts">
	// Pure-CSS fake Grafana dashboard for the api-health HTTPProbe. No props, no JS.
	const H = 160;
	const W = 400;
	const PAD = 16;
	// one period of latency samples (ms); first == last so the scroll loops seamlessly
	const ms = [90, 120, 72, 108, 60, 116, 84, 126, 90];
	const lo = 45;
	const hi = 140;
	const step = W / (ms.length - 1);
	const yOf = (v: number) => +(PAD + (1 - (v - lo) / (hi - lo)) * (H - 2 * PAD)).toFixed(1);
	const xOf = (i: number) => +(i * step).toFixed(1);

	// two identical periods (0..2W) so translateX(-W) is a seamless loop
	const pts = [...ms, ...ms.slice(1)];
	const line = pts.map((v, i) => `${i ? 'L' : 'M'}${xOf(i)} ${yOf(v)}`).join(' ');
	const area =
		`M0 ${H} ` + pts.map((v, i) => `L${xOf(i)} ${yOf(v)}`).join(' ') + ` L${2 * W} ${H} Z`;

	const grid = [0.25, 0.5, 0.75].map((f) => +(f * H).toFixed(1));

	const history = Array.from({ length: 44 }, (_, i) =>
		i === 15 || i === 16 ? 'warn' : i === 31 ? 'down' : 'up'
	);
</script>

<div
	class="gf"
	role="img"
	aria-label="Grafana dashboard for the api-health HTTP probe: status up, p95 latency 142ms, 99.98% uptime, with a live latency time series"
>
	<div class="bar">
		<span class="crumb">Synthetics / HTTP</span>
		<span class="chip">api-health</span>
		<span class="spacer"></span>
		<span class="range">Last 1h</span>
		<span class="livedot"></span>
	</div>

	<div class="tiles">
		<div class="tile" style="--i: 0">
			<span class="label">Status</span>
			<span class="val up">UP</span>
		</div>
		<div class="tile" style="--i: 1">
			<span class="label">p95 latency</span>
			<span class="val">142<small>ms</small></span>
		</div>
		<div class="tile" style="--i: 2">
			<span class="label">Uptime 24h</span>
			<span class="val">99.98<small>%</small></span>
		</div>
		<div class="tile" style="--i: 3">
			<span class="label">TLS expiry</span>
			<span class="val">27<small>d</small></span>
		</div>
	</div>

	<div class="panel">
		<span class="ptitle">Response time</span>
		<svg class="chart" viewBox="0 0 {W} {H}" preserveAspectRatio="none" aria-hidden="true">
			<defs>
				<linearGradient id="gf-fill" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#73bf69" stop-opacity="0.35" />
					<stop offset="100%" stop-color="#73bf69" stop-opacity="0" />
				</linearGradient>
			</defs>
			{#each grid as gy (gy)}
				<line class="grid" x1="0" y1={gy} x2={W} y2={gy} />
			{/each}
			<g class="scroll">
				<path class="area" d={area} />
				<path class="stroke" d={line} />
			</g>
		</svg>
	</div>

	<div class="panel">
		<span class="ptitle">State history</span>
		<div class="history">
			{#each history as state, i (i)}
				<span class="cell {state}" style="--i: {i}"></span>
			{/each}
		</div>
	</div>
</div>

<style>
	.gf {
		--bg: #111217;
		--panel: #181b1f;
		--edge: #23262b;
		--text: #d8d9da;
		--muted: #7b7d82;
		--green: #73bf69;
		--amber: #ff9830;
		--red: #f2495c;
		--blue: #3274d9;
		font-family:
			system-ui,
			-apple-system,
			'Segoe UI',
			sans-serif;
		background: var(--bg);
		border: 1px solid var(--edge);
		border-radius: 0.5em;
		padding: 0.7em;
		margin: var(--spacing-base) 0;
		color: var(--text);
		display: grid;
		gap: 0.7em;
		box-shadow: 0 1.5em 3em -1em rgba(0, 0, 0, 0.35);
	}

	.bar {
		display: flex;
		align-items: center;
		gap: 0.6em;
		font-size: 0.8rem;
	}
	.crumb {
		color: var(--muted);
	}
	.chip {
		background: rgba(50, 116, 217, 0.18);
		color: #6b9bff;
		padding: 0.1em 0.6em;
		border-radius: 0.25em;
		font-family: var(--font-mono);
		font-size: 0.85em;
	}
	.spacer {
		flex: 1;
	}
	.range {
		color: var(--muted);
		font-size: 0.85em;
	}
	.livedot {
		width: 0.55em;
		height: 0.55em;
		border-radius: 50%;
		background: var(--green);
		animation: pulse 1.6s ease-in-out infinite;
	}

	.tiles {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.6em;
	}
	.tile {
		background: var(--panel);
		border: 1px solid var(--edge);
		border-radius: 0.35em;
		padding: 0.55em 0.7em;
		display: grid;
		gap: 0.15em;
		opacity: 0;
		transform: translateY(6px);
		animation: rise 0.45s ease forwards;
		animation-delay: calc(var(--i) * 0.1s);
	}
	.label {
		color: var(--muted);
		font-size: 0.65rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}
	.val {
		font-size: 1.35rem;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
		line-height: 1;
	}
	.val small {
		font-size: 0.55em;
		font-weight: 500;
		color: var(--muted);
		margin-left: 0.15em;
	}
	.val.up {
		color: var(--green);
	}

	.panel {
		background: var(--panel);
		border: 1px solid var(--edge);
		border-radius: 0.35em;
		padding: 0.55em 0.7em 0.65em;
	}
	.ptitle {
		display: block;
		color: var(--muted);
		font-size: 0.7rem;
		margin-bottom: 0.4em;
	}

	.chart {
		display: block;
		width: 100%;
		height: 110px;
		overflow: hidden;
	}
	.grid {
		stroke: rgba(255, 255, 255, 0.06);
		stroke-width: 1;
	}
	.scroll {
		animation: scroll 9s linear infinite;
	}
	.area {
		fill: url(#gf-fill);
	}
	.stroke {
		fill: none;
		stroke: var(--green);
		stroke-width: 2;
		stroke-linejoin: round;
		stroke-linecap: round;
		vector-effect: non-scaling-stroke;
	}

	.history {
		display: flex;
		gap: 2px;
		height: 1.6em;
	}
	.cell {
		flex: 1;
		border-radius: 1px;
		background: var(--green);
		opacity: 0;
		animation: fade 0.3s ease forwards;
		animation-delay: calc(0.4s + var(--i) * 0.03s);
	}
	.cell.warn {
		background: var(--amber);
	}
	.cell.down {
		background: var(--red);
	}

	@keyframes scroll {
		to {
			transform: translateX(-400px);
		}
	}
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.25;
		}
	}
	@keyframes rise {
		to {
			opacity: 1;
			transform: none;
		}
	}
	@keyframes fade {
		to {
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.scroll,
		.livedot,
		.tile,
		.cell {
			animation: none;
		}
		.tile,
		.cell {
			opacity: 1;
			transform: none;
		}
	}
</style>
