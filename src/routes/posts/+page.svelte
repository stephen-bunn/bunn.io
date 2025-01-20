<svelte:options runes />

<script lang="ts">
  import { page } from '$app/state'
  import PostItem from '$lib/components/PostItem.svelte'

  const { posts } = page.data
</script>

<main>
  <h1>Posts</h1>
  <div class="posts">
    {#if posts.length > 0}
      {#each posts as post}
        <PostItem {post} />
      {/each}
    {:else}
      <p class="missing">Nothing here quite yet...</p>
    {/if}
  </div>
</main>

<style>
  .posts {
    margin-top: var(--space-10x);
  }

  .missing {
    font-style: italic;
    font-size: var(--font-100);
    color: var(--color-text-muted);
  }
</style>
