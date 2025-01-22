<svelte:options runes />

<script lang="ts">
  import { RssIcon } from 'lucide-svelte'
  import { page } from '$app/state'
  import Link from '$lib/components/Link.svelte'
  import PostItem from '$lib/components/PostItem.svelte'

  const { posts } = page.data
</script>

<main>
  <h1>Posts</h1>
  <p>Here I write short thoughts on whatever catches my attention.</p>
  <Link small href="/feed.xml">
    <span class="feed">
      <RssIcon size="1em" /> RSS
    </span>
  </Link>
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
  h1 {
    margin-bottom: 0;
  }

  .feed {
    display: flex;
    gap: var(--space-1x);
    align-items: center;
  }

  .posts {
    margin-top: var(--space-10x);
  }

  .missing {
    font-style: italic;
    font-size: var(--font-100);
    color: var(--color-text-muted);
  }
</style>
