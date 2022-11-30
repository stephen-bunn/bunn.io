<template>
  <NuxtLayout>
    <Navigation />
    <main>
      <article>
        <div class="flex flex-col items-center mb-8">
          <h1 class="text-5xl font-bold font-serif text-center lg:text-7xl">
            {{ post.title }}
          </h1>
          <PostDetails :date="postDate" :tags="postTags" />
        </div>
        <div class="markdown">
          <ContentRenderer :value="postContent">
            <ContentRendererMarkdown :value="postContent" />
          </ContentRenderer>
        </div>
      </article>
    </main>
    <PostFooter :post="post" />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()
const post = await queryContent(route.path).findOne()
const postContent = computed(() => ({
  body: {
    ...post.body,
    // filtering out any `h1` tags as there should only be one and we are representing it ourselves
    children: post.body.children.filter(({ tag }) => tag !== 'h1'),
  },
}))
const postDate = computed(() => (post?.date ? new Date(post.date) : null))
const postTags = computed(() => post?.tags || null)

useHead({ title: post.title })
</script>

<style>
@import '~/assets/styles/markdown.scss';
</style>
