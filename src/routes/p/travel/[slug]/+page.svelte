<script lang="ts">
  import { formatDate } from "$lib/utils/format"
  import Link from "$lib/components/Link.svelte"

  export let data
  const { post, Content } = data
</script>

<article>
  <span class="detail"
    >Published in <Link small href={post.plot.href}>{post.plot.name}</Link>
    on {formatDate(post.published, "MMM DD YYYY")}.</span
  >
  <h1>{post.title}</h1>
  <Content />
</article>

<style lang="scss">
  .detail {
    font-size: var(--font-050);
    color: var(--color-text-disabled);
    font-family: var(--font-serif);
  }
</style>
