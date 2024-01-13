<script lang="ts">
  import type { Post } from "$lib/types/post"
  import { formatDate } from "$lib/utils/format"
  import Link from "$lib/components/Link.svelte"

  export let post: Post
</script>

<div class="container">
  <div class="date">
    <span class="published">{formatDate(post.published, "MMM D YYYY")}</span>
  </div>
  <div class="content">
    <h2><Link href={post.href}>{post.title}</Link></h2>
    {#if post.metadata?.description}
      <p class="description">{post.metadata.description}</p>
    {/if}
  </div>
</div>

<style lang="scss">
  h2 {
    font-size: var(--font-300);
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 9fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: var(--space-2x);
  }

  .date {
    grid-column-start: 1;
    grid-row-start: span 2;
    font-family: var(--font-serif);
    font-size: var(--font-050);
    font-style: italic;
    color: var(--color-text-disabled);
    align-self: center;
    line-height: var(--line-height-tight);
  }

  .content {
    grid-column-start: 2;
    grid-row-start: span 2;
  }

  .description {
    color: var(--color-text-disabled);
  }
</style>
