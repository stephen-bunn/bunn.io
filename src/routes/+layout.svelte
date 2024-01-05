<script lang="ts">
  import { Svrollbar } from "svrollbar"

  import "$lib/styles/base.scss"
  import "$lib/styles/content.scss"
  import Header from "$lib/components/Header.svelte"
</script>

<svelte:head>
  <title>Stephen Bunn</title>
</svelte:head>

<Svrollbar />
<Header />
<main>
  <slot />
</main>

<style lang="scss">
  @use "$lib/styles/mixins.scss" as *;

  // Customize Svrollbar thumb styling
  :root {
    --svrollbar-thumb-width: var(--space-4x);
    --svrollbar-thumb-background: var(--color-text--disabled);
    --svrollbar-thumb-radius: 0;
    --svrollbar-thumb-opacity: 1;
  }

  main {
    max-width: var(--content-width);
    margin: 0 var(--space-8x);

    @include md {
      margin: 0 auto;
    }
  }
</style>
