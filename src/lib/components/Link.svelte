<script lang="ts">
  export let href: string
</script>

<a {href} {...$$restProps}><slot /></a>

<style lang="scss">
  @use "$lib/styles/mixins.scss" as *;

  a {
    @include dashed-outline;

    transition: color var(--duration-default);
    text-decoration: none;

    &:link,
    &:visited {
      color: var(--color-link);
    }

    &:hover,
    &:active,
    &:focus-visible {
      color: var(--color-link-active);
    }
  }
</style>
