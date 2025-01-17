<svelte:options runes />

<script lang="ts">
  import type { Snippet } from 'svelte'
  import { page } from '$app/state'
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  let { href, children, ...rest }: { href: string; children: Snippet } & HTMLAnchorAttributes =
    $props()

  const hrefPattern = new RegExp(`^${href}/?$`, 'i')
  let active = $derived(hrefPattern.test(page.url.pathname))
</script>

<a {href} class:active tabindex={active ? -1 : 0} {...rest}>
  {@render children()}
</a>

<style lang="scss">
  @use '$lib/styles' as *;

  a {
    @include dashed-outline;

    padding: var(--space-3x) 0;
    transition: color var(--duration-default);
    display: inline-block;
    color: var(--color-text-disabled);
    font-size: var(--font-400);
    font-family: var(--font-serif);
    font-weight: bold;
    text-decoration: none;

    &:hover,
    &:active,
    &:focus-visible {
      color: var(--color-text);
    }

    &.active {
      color: var(--color-text);
      pointer-events: none;
    }
  }
</style>
