<script lang="ts">
  import { FIRST_NAME } from "$lib/utils/constants"
  import "$lib/styles/base.scss"
  import Header from "$lib/components/Header.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import { page } from "$app/stores"
  import { MetaTags } from "svelte-meta-tags"
  import { buildMetaTags } from "$lib/utils/metaTags"

  $: metaTags = buildMetaTags($page.route, $page.data.metaTagsOverride)
</script>

<svelte:head>
  <title>{FIRST_NAME}</title>
</svelte:head>

<MetaTags {...metaTags} />

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
