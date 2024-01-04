<script>
  import Link from "$lib/components/Link.svelte"

  const uses = [
    {
      title: "Hardware",
      description: "The physical things that help me.",
      items: ["Ubuntu Linux"],
    },
  ]
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
  <h2>{category.title}</h2>
  {#if category.description}
    <p>{category.description}</p>
  {/if}
  <ul>
    {#each category.items as item}
      <li>{item}</li>
    {/each}
  </ul>
{/each}
