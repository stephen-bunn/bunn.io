<script lang="ts">
  export let href: string
  export let small: boolean = false
  export let padded: boolean = false
</script>

<a class:small class:padded {href} {...$$restProps}><slot /></a>

<style lang="scss">
  @use "$lib/styles/mixins.scss" as *;

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

    &.padded {
      margin: 0 var(--space-1x);
    }
  }
</style>
