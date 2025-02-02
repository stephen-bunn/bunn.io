<svelte:options runes />

<script lang="ts">
  import { FULL_NAME } from '$lib/constants'
  import uses from '$lib/data/uses.json'
  import Link from '$lib/components/Link.svelte'
</script>

<svelte:head>
  <title>{FULL_NAME} &ndash; Uses</title>
</svelte:head>

<main>
  <h1>Uses</h1>
  <p>
    Here is a list of the technology I use on a daily basis. To see other nifty things that people
    use, go check out
    <Link href="https://uses.tech" target="_blank">/uses</Link>.
  </p>

  {#each uses as category}
    <div>
      <h2>{category.title}</h2>
      <ul>
        {#each category.items as item}
          {#if typeof item === 'string'}
            <li>{item}</li>
          {:else}
            <li>
              <Link href={item.href} target="_blank">
                {item.text}
              </Link>
              {#if item.description}
                <p>{item.description}</p>
              {/if}
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  {/each}
</main>

<style>
  h1 {
    margin-bottom: 0;
  }

  div {
    margin-bottom: var(--space-8x);
  }

  p {
    font-size: var(--font-100);
    margin-bottom: var(--space-4x);
  }

  ul {
    list-style: none;
    margin-left: 0;
  }
</style>
