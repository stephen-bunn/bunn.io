<script lang="ts">
  const currentYear = new Date().getFullYear()
</script>

<footer>
  {currentYear} &copy; Stephen Bunn
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
    color: var(--color-text-disabled);
  }
</style>
