<svelte:options runes />

<script lang="ts">
  import { MetaTags, deepMerge, type MetaTagsProps } from 'svelte-meta-tags'
  import { page } from '$app/state'
  import '$lib/styles/index.scss'

  let { data, children } = $props()
  let metaTags: MetaTagsProps = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags))
</script>

<MetaTags {...metaTags} />

{@render children()}
