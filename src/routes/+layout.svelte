<script lang="ts">
  import "$lib/styles/base.scss"
  import Header from "$lib/components/Header.svelte"
  import Footer from "$lib/components/Footer.svelte"
</script>

<svelte:head>
  <title>Stephen</title>
</svelte:head>

<Header />
<main>
  <slot />
</main>
<Footer />

<style lang="scss">
  @use "$lib/styles/mixins.scss" as *;

  main {
    max-width: var(--content-width);
    margin: 0 var(--space-8x);

    @include md {
      margin: 0 auto;
    }
  }
</style>
