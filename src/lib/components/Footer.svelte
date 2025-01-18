<svelte:options runes />

<script lang="ts">
  import { SITE_COPYRIGHT } from '$lib/constants'
</script>

<footer>
  {SITE_COPYRIGHT}
</footer>

<style lang="scss">
  footer {
    user-select: none;
    position: sticky;
    text-align: right;
    top: calc(100vh - var(--space-6x));
    margin-right: var(--space-3x);
    font-family: var(--font-serif);
    font-size: var(--font-050);
    font-weight: normal;
    color: var(--color-text-muted);
  }
</style>
