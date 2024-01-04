<script lang="ts">
  import { page } from "$app/stores"

  export let href: string
  $: isActive = (() => $page.url.pathname.toLowerCase() === href.toLowerCase())()
</script>

<a {href} class:active={isActive} tabindex={isActive ? -1 : 0} {...$$restProps}>
  <slot />
</a>

<style lang="scss">
  a {
    transition-property: color;
    transition-duration: var(--transition-duration-default);
    display: inline-block;
    padding: var(--space-3x) 0;
    text-decoration: none;
    outline: none;
    color: var(--color-text--disabled);
    font-size: var(--font-400);
    font-family: var(--font-serif);
    font-weight: bold;

    &:hover,
    &:active,
    &:focus-visible {
      color: var(--color-text);
    }

    &:focus-visible {
      outline: var(--space-1x) dashed var(--color-text);
      outline-offset: var(--space-2x);
    }

    &.active {
      color: var(--color-text);
      pointer-events: none;
    }
  }
</style>
