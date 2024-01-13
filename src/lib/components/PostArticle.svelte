<script lang="ts">
  import type { Post } from "$lib/types/post"
  import { formatDate } from "$lib/utils/format"
  import Link from "$lib/components/Link.svelte"

  export let post: Post
</script>

<article>
  <h1>{post.title}</h1>
  <span class="detail"
    >Published in <Link small href={post.plot.href}>{post.plot.name}</Link>
    on {formatDate(post.published, "MMM DD YYYY")}.</span
  >
  <slot />
</article>

<style lang="scss">
  h1 {
    line-height: var(--line-height-tight);
  }

  .detail {
    font-size: var(--font-050);
    color: var(--color-text-disabled);
    font-family: var(--font-serif);
  }
</style>
