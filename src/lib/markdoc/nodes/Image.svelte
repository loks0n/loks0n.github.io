<script lang="ts">
  import type { Picture } from "@sveltejs/enhanced-img";

  interface Props {
    src: string | Picture;
    alt?: string;
    title?: string;
  }

  let { src, alt, title }: Props = $props();
</script>

<enhanced:img {src} {alt} {title} />
