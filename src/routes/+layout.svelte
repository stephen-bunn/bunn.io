<svelte:options runes />

<script lang="ts">
  import { MetaTags, deepMerge, type MetaTagsProps } from 'svelte-meta-tags'
  import { page } from '$app/state'
  import '$lib/styles/index.scss'

  let { data, children } = $props()
  let metaTags: MetaTagsProps = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags))
</script>

<MetaTags {...metaTags} />

<div>
  {@render children()}
</div>

<style lang="scss">
  @use '$lib/styles' as *;

  div {
    display: flex;
    height: 100%;
    width: var(--content-width);
    margin: 0 var(--space-8x);

    @include md {
      margin: 0 auto;
    }
  }
</style>
