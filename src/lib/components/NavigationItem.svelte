<script lang="ts">
  import { page } from "$app/stores"

  export let href: string
  const hrefPattern = new RegExp(`^${href}/?$`, "i")
  $: isActive = (() => hrefPattern.test($page.url.pathname))()
</script>

<a {href} class:active={isActive} tabindex={isActive ? -1 : 0} {...$$restProps}>
  <slot />
</a>

<style lang="scss">
  @use "$lib/styles/mixins.scss" as *;

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
