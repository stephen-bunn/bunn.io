<script lang="ts">
  import Link from "$lib/components/Link.svelte"

  const plots = [
    { slug: "travel", title: "Travel", text: "Sometimes I travel and find things to write about" },
  ]
</script>

<svelte:head>
  <title>Stephen Bunn - Plots</title>
</svelte:head>

<div class="summary">
  <h1>Plots</h1>
  <p>
    These <em>plots</em> are generic topics within my <Link
      href="https://blog.erlend.sh/communal-bonfires"
      target="_blank">digital garden</Link
    >. I sneakily stole this terminology and organization <Link
      href="https://www.fromjason.xyz"
      target="_blank">from Jason</Link
    >.
  </p>
</div>

{#each plots as plot}
  <div class="plot">
    <h2><Link href={`/p/${plot.slug}`}>{plot.title}</Link></h2>
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
