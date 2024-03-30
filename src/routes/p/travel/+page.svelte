<script lang="ts">
  import { FIRST_NAME } from "$lib/utils/constants"
  import PostItem from "$lib/components/PostItem.svelte"
  import Link from "$lib/components/Link.svelte"

  export let data
  const { posts } = data
</script>

<svelte:head>
  <title>{FIRST_NAME} &ndash; Travel</title>
</svelte:head>

<h1>Travel</h1>
<p>
  I use this <Link href="/p">plot</Link> to talk about little getaways and interesting adventures.
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

  .posts {
    margin-top: var(--space-10x);
  }

  .missing {
    font-style: italic;
    font-size: var(--font-100);
    color: var(--color-text-disabled);
  }
</style>
