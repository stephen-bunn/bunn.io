<script>
  import "$lib/styles/base.scss"
  import Header from "$lib/components/Header.svelte"
</script>

<Header />
<main>
  <slot />
</main>

<style lang="scss">
  @use "$lib/styles/mixins.scss" as *;

  main {
    max-width: var(--content-width);
    margin: 0 var(--space-8x);

    @include lg {
      margin: 0 auto;
    }
  }
</style>
