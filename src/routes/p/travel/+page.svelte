<script lang="ts">
  import PostPage from "$lib/components/PostPage.svelte"

  export let data
  const { posts } = data
</script>

<PostPage title="Travel" {posts}>
  Here I talk about little getaways and interesting adventures.
</PostPage>
