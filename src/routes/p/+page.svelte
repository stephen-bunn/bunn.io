<script lang="ts">
  import { RssIcon } from "lucide-svelte"
  import { FIRST_NAME } from "$lib/utils/constants"
  import Link from "$lib/components/Link.svelte"
  import plots from "$lib/content/plots.json"
</script>

<svelte:head>
  <title>{FIRST_NAME} &ndash; Plots</title>
</svelte:head>

<div class="summary">
  <h1>Plots</h1>
  <p>
    These <em>plots</em> are generic topics within my <Link
      href="https://maggieappleton.com/garden-history"
      target="_blank">digital garden</Link
    >. I sneakily stole this terminology and organization <Link
      href="https://www.fromjason.xyz"
      target="_blank">from Jason</Link
    >.
  </p>
  <div class="feed">
    <RssIcon size={14} />
    <Link href="feed.rss" target="_blank">RSS</Link>
    <Link href="feed.atom" target="_blank">ATOM</Link>
    <Link href="feed.json" target="_blank">JSON</Link>
  </div>
</div>

{#each plots as plot}
  <div class="plot">
    <h2><Link href={plot.href}>{plot.title}</Link></h2>
    <p>{plot.text}</p>
  </div>
{/each}

<style lang="scss">
  .summary {
    margin-bottom: var(--space-8x);

    p {
      font-size: var(--font-300);
    }
  }

  .plot {
    margin-top: var(--space-4x);

    h2 {
      font-size: var(--font-300);
    }

    p {
      font-size: var(--font-100);
      color: var(--color-text-disabled);
      line-height: var(--line-height-tight);
    }
  }

  .feed {
    font-size: var(--font-050);
    font-family: var(--font-mono);
    display: flex;
    gap: var(--space-2x);
    align-items: center;
  }
</style>
