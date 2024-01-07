<script lang="ts">
  import "$lib/styles/base.scss"
  import Header from "$lib/components/Header.svelte"
</script>

<svelte:head>
  <title>Stephen Bunn</title>
</svelte:head>

<Header />
<main>
  <slot />
</main>

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
