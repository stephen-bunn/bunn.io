<script lang="ts">
  import PostArticle from "$lib/components/PostArticle.svelte"

  export let data
  const { post, Content } = data
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<PostArticle {post}>
  <Content />
</PostArticle>
