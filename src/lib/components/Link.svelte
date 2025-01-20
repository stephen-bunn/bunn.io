<svelte:options runes />

<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { SvelteHTMLElements } from 'svelte/elements'

  let {
    href,
    children,
    small = false,
    target,
    ...props
  }: {
    href: string
    children: Snippet
    small?: boolean
    target?: string
    props?: SvelteHTMLElements['a']
  } = $props()
</script>

<a class:small {href} {target} {...props}>
  {@render children()}
</a>

<style lang="scss">
  @use '$lib/styles' as *;

  a {
    @include dashed-outline;

    color: currentColor;
    transition: color var(--duration-default);
    text-decoration: underline dotted currentColor 2px;
    text-underline-offset: 3px;

    &:link,
    &:visited {
      color: var(--color-link);
    }

    &:hover,
    &:active,
    &:focus-visible {
      color: var(--color-link-active);
    }

    &.small {
      font-size: var(--font-050);
      text-decoration-thickness: 1px;
      text-underline-offset: 2px;
    }
  }
</style>
