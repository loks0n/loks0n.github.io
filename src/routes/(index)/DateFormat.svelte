<script lang="ts">
	let { date } = $props<{ date: Date }>();

	function getSuffix(date: Date) {
		let day = date.getDate();
		if (day > 3 && day < 21) return 'th';
		switch (day % 10) {
			case 1:
				return 'st';
			case 2:
				return 'nd';
			case 3:
				return 'rd';
			default:
				return 'th';
		}
	}

	let suffix = $derived(getSuffix(date));

	let day = $derived(date.getDate());
	let month = $derived(date.toLocaleString('default', { month: 'long' }));
	let year = $derived(date.getFullYear());
</script>

<span>{day}<sup>{suffix}</sup> {month} {year}</span>

<style>
	sup {
		font-size: 0.5em;
	}
</style>
