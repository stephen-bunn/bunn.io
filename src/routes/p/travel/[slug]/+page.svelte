<script lang="ts">
  import { formatDate } from "$lib/utils/format"
  import Link from "$lib/components/Link.svelte"

  export let data
  const { metadata, Content } = data
</script>

<article>
  <span class="detail"
    >Published in <Link small href="/p/travel">Travel</Link>
    on {formatDate(metadata.published, "MMM DD YYYY")}.</span
  >
  <Content />
</article>

<style lang="scss">
  .detail {
    font-size: var(--font-050);
    color: var(--color-text-disabled);
    font-family: var(--font-serif);
  }
</style>
