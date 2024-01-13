<script lang="ts">
  import Link from "$lib/components/Link.svelte"
  import plots from "$lib/content/plots.json"
</script>

<svelte:head>
  <title>Stephen &ndash; Plots</title>
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
    }
  }
</style>
