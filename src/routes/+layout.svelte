<svelte:options runes />

<script lang="ts">
  import { MetaTags, deepMerge, type MetaTagsProps } from 'svelte-meta-tags'
  import { page } from '$app/state'
  import '$lib/styles/index.scss'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import ToTopButton from '$lib/components/ToTopButton.svelte'

  let { data, children } = $props()
  let metaTags: MetaTagsProps = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags))
</script>

<MetaTags {...metaTags} />

<Header />
<div>
  {@render children()}
</div>
<ToTopButton />
<Footer />

<style lang="scss">
  @use '$lib/styles' as *;

  div {
    width: 100%;
    padding: 0 var(--space-8x);

    @include md {
      width: var(--content-width);
      margin: 0 auto;
      padding: 0;
    }

    @include lg {
      padding-top: var(--space-24x);
    }
  }
</style>
