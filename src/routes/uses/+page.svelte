<script>
  import Link from "$lib/components/Link.svelte"
  import uses from "$lib/content/uses.json"
</script>

<svelte:head>
  <title>Stephen Bunn &ndash; Uses</title>
</svelte:head>

<h1>Uses</h1>
<p>
  Here is a list of the technology I use on a daily basis. To see other nifty things that people
  use, go check out
  <Link href="https://uses.tech" target="_blank">/uses</Link>.
</p>

{#each uses as category}
  <div class="uses-container">
    <h2>{category.title}</h2>
    <ul class="uses-list">
      {#each category.items as item}
        <li>
          {#if typeof item === "string"}
            {item}
          {:else}
            <Link href={item.href} target="_blank">{item.text}</Link>
            {#if item.description}
              {item.description}
            {/if}
          {/if}
        </li>
      {/each}
    </ul>
  </div>
{/each}

<style lang="scss">
  p {
    font-size: var(--font-300);
    margin-bottom: var(--space-4x);
  }

  .uses {
    &-container {
      margin-bottom: var(--space-8x);
    }

    &-list {
      margin-left: 0;
    }
  }

  .uses-list {
    list-style: none;
  }
</style>
