<script lang="ts">
  import type { Post } from "$lib/types/post"
  import { formatDate } from "$lib/utils/format"
  import Link from "$lib/components/Link.svelte"

  export let post: Post
</script>

<article>
  <span class="detail"
    >Published in <Link small href={post.plot.href}>{post.plot.name}</Link>
    on {formatDate(post.published, "MMM DD YYYY")}.</span
  >
  <h1>{post.title}</h1>
  <slot />
</article>

<style lang="scss">
  .detail {
    font-size: var(--font-050);
    color: var(--color-text-disabled);
    font-family: var(--font-serif);
  }
</style>
