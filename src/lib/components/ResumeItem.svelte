<svelte:options runes />

<script lang="ts">
  import type { Snippet } from 'svelte'

  let {
    name,
    children,
    dense = false,
    detail
  }: {
    name: string | Snippet
    children?: Snippet
    dense?: boolean
    detail?: Snippet
  } = $props()
</script>

<div class:dense>
  <h3>
    {#if typeof name === 'string'}
      {name}
    {:else}
      {@render name()}
    {/if}
  </h3>
  {#if detail}
    <p class="detail">
      {@render detail()}
    </p>
  {/if}
  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="scss">
  @use '$lib/styles';

  div {
    margin-bottom: var(--space-8x);

    &.dense {
      margin-bottom: var(--space-4x);
    }
  }

  h3 {
    font-weight: normal;
  }

  .detail {
    font-size: var(--font-050);
  }
</style>
