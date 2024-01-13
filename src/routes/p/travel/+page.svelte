<script lang="ts">
  import PostItem from "$lib/components/PostItem.svelte"
  export let data
</script>

<svelte:head>
  <title>Stephen Bunn - Travel</title>
</svelte:head>

<h1>Travel</h1>
<p>Sometimes I take trips to recharge my will to live.</p>
<div class="posts">
  {#if data.posts.length > 0}
    {#each data.posts as post}
      <PostItem {post} />
    {/each}
  {:else}
    <p class="missing">Uh oh, nothing here yet...</p>
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
