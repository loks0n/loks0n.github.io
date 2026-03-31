<script lang="ts">
	interface Props {
		src: unknown;
		alt?: string;
		title?: string;
	}

	let { src, alt, title }: Props = $props();
</script>

<enhanced:img {src} {alt} {title} />
