<script lang="ts">
  import type { Post } from "$lib/types/post"
  import { FIRST_NAME } from "$lib/utils/constants"
  import PostItem from "$lib/components/PostItem.svelte"
  import Link from "$lib/components/Link.svelte"
  import { Undo2Icon } from "lucide-svelte"

  export let title: string
  export let posts: Post[]
  export const metaTagsOverride = {
    title: `${FIRST_NAME} - ${title}`,
  }
</script>

<svelte:head>
  <title>{FIRST_NAME} &ndash; {title}</title>
</svelte:head>

<h1>{title}</h1>
<span class="subtitle">
  <Link href="/p"><Undo2Icon size={10} /> Plots</Link>
</span>
<p>
  <slot />
</p>
<div class="posts">
  {#if posts.length > 0}
    {#each posts as post}
      <PostItem {post} />
    {/each}
  {:else}
    <p class="missing">Nothing here quite yet...</p>
  {/if}
</div>

<style lang="scss">
  p {
    font-size: var(--font-300);
  }

  .subtitle {
    font-size: var(--font-050);
    color: var(--color-text-disabled);
  }

  .posts {
    margin-top: var(--space-10x);
  }

  .missing {
    font-style: italic;
    font-size: var(--font-100);
    color: var(--color-text-disabled);
  }
</style>
