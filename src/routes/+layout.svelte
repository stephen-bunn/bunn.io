<svelte:options runes />

<script lang="ts">
  import { MetaTags, deepMerge, type MetaTagsProps } from 'svelte-meta-tags'
  import { page } from '$app/state'
  import '$lib/styles/index.scss'
  import Footer from '$lib/components/Footer.svelte'

  let { data, children } = $props()
  let metaTags: MetaTagsProps = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags))
</script>

<MetaTags {...metaTags} />

<div>
  {@render children()}
</div>
<Footer />

<style lang="scss">
  @use '$lib/styles' as *;

  div {
    width: var(--content-width);
    margin: 0 var(--space-8x);

    @include md {
      margin: 0 auto;
    }
  }
</style>
