<script>
  import Link from "$lib/components/Link.svelte"

  const uses = [["Hardware", ["Ubuntu Linux"]], [""]]
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
  {@const [categoryName, ...categoryItems] = category}
  <h2>{categoryName}</h2>
  <ul>
    {#each categoryItems as item}
      <li>{item}</li>
    {/each}
  </ul>
{/each}
