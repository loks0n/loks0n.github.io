<script lang="ts">
	interface Props {
		src: string;
		title: string;
		width?: string;
		height?: string;
		style?: string;
		allow?: string;
		loading?: string;
	}

	let { src, title, width = '100%', height = '352', style, allow, loading }: Props = $props();
</script>

<iframe {src} {title} {width} {height} {style} {allow} {loading} frameborder="0"></iframe>
