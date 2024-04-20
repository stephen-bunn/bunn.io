<script lang="ts">
  import PostPage from "$lib/components/PostPage.svelte"

  export let data
  const { posts } = data
</script>

<PostPage title="Musing" {posts}>
  Here I write short thoughts on whatever catches my attention.
</PostPage>
