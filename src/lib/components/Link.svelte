<svelte:options runes />

<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLAnchorAttributes } from 'svelte/elements'
  import { ExternalLinkIcon } from 'lucide-svelte'

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
    props?: HTMLAnchorAttributes
  } = $props()

  let isExternal = $derived(href.startsWith('http'))
  let attributes = $derived({
    rel: isExternal ? 'noopener noreferrer' : undefined,
    'aria-label': isExternal ? 'Open in new tab' : undefined,
    ...props
  })
</script>

<a class="link" class:small {href} {target} {...attributes}>
  {@render children()}{#if isExternal}
    <span class="icon-container">
      <ExternalLinkIcon class="icon icon-external-link" aria-hidden="true" />
    </span>
  {/if}
</a>

<style lang="scss">
  @use '$lib/styles' as *;
  @use '$lib/styles/mixins' as *;

  a.link {
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

  .icon-container {
    padding-left: calc(var(--space-1x) / 2);
  }
</style>
