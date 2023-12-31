<script>
  import "$lib/styles/base.scss"
  import Header from "$lib/components/Header.svelte"
</script>

<Header />
<main>
  <slot />
</main>

<style lang="scss">
  main {
    max-width: var(--content-width);
    margin: calc(var(--space-8x) * 2) auto 0 auto;
    height: calc(100vh - calc(var(--space-8x) * 2));
  }
</style>
