<svelte:options runes />

<script lang="ts">
  import { page } from '$app/state'
  import dayjs from 'dayjs'
  import { FULL_NAME } from '$lib/constants'

  const { post, postComponent } = page.data
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<main>
  <article>
    <h1>{post.title}</h1>
    <div class="detail">
      Published by {FULL_NAME} on {dayjs(post.published).format('MMM D YYYY')}
    </div>
    {@render postComponent()}
  </article>
</main>

<style>
  h1 {
    margin-bottom: 0;
  }

  .detail {
    display: flex;
    font-size: var(--font-050);
    color: var(--color-text-muted);
    font-family: var(--font-serif);
    margin-bottom: var(--space-8x);
  }
</style>
