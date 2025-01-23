<svelte:options runes />

<script lang="ts">
  import { lg } from '$lib/styles/breakpoints'
  import { blur } from 'svelte/transition'

  let scrollY: number | undefined = $state(undefined)
  let innerHeight: number | undefined = $state(undefined)
  let innerWidth: number | undefined = $state(undefined)

  let isVisible = $derived.by(() => {
    if (!innerWidth) return false
    return innerWidth < lg && (scrollY ?? 0) >= (innerHeight ?? 0)
  })

  const onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />

{#if isVisible}
  <button transition:blur {onclick}>To Top</button>
{/if}

<style>
  button {
    position: fixed;
    bottom: var(--space-4x);
    right: var(--space-2x);
    padding: var(--space-2x) var(--space-3x);
    border-radius: var(--radius-soft);
    background-color: hsl(from var(--color-text) h s l / 0.5);
    color: var(--color-surface);
    backdrop-filter: blur(4px);
  }
</style>
