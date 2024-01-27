<script lang="ts">
  import { FULL_NAME } from "$lib/utils/constants"
  const currentYear = new Date().getFullYear()
</script>

<footer>
  {currentYear} &copy; {FULL_NAME}
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
    font-weight: bold;
    color: var(--color-text-disabled);
  }
</style>
