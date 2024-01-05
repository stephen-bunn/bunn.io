<script lang="ts">
  export let href: string
</script>

<a {href} {...$$restProps}><slot /></a>

<style lang="scss">
  a {
    text-decoration: none;
    transition: color var(--transition-duration-default);
    outline: none;
    outline-offset: var(--space-1x);

    &:link,
    &:visited {
      color: var(--color-link);
    }

    &:hover,
    &:active,
    &:focus-visible {
      color: var(--color-link--active);
    }

    &:focus-visible {
      outline: var(--color-current) dashed var(--space-halfx);
    }
  }
</style>
