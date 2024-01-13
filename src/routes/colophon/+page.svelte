<script lang="ts">
  import { formatDate } from "$lib/utils/format"
  import Link from "$lib/components/Link.svelte"

  export let data
</script>

<h1>Colophon</h1>
<p>
  This site was last published on
  <strong>{formatDate(new Date(), "MMM DD YYYY")}</strong>
  {#if data.githubActionHref && data.githubActionId}
    via Github Action <Link href={data.githubActionHref} target="_blank">{data.githubActionId}</Link
    >.
  {:else}
    <em>in development</em>.
  {/if}
</p>
<hr />
<p>
  The source is freely available on GitHub at <Link
    href="https://github.com/stephen-bunn/bunn.io"
    target="_blank">stephen-bunn/bunn.io</Link
  >.
</p>

<style lang="scss">
  p {
    font-size: var(--font-300);
  }
</style>
