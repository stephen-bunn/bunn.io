<template>
  <NuxtLayout>
    <Navigation />
    <main>
      <article>
        <div class="flex flex-col items-center mb-8">
          <h1 class="text-5xl font-bold font-serif lg:text-7xl">
            {{ page.title }}
          </h1>
          <PostDetails :date="date" :tags="tags" />
        </div>
        <div class="markdown">
          <ContentRenderer :value="content">
            <ContentRendererMarkdown :value="content" />
          </ContentRenderer>
        </div>
      </article>
    </main>
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()
const page = await queryContent(route.path).findOne()

const content = computed(() => ({
  body: {
    ...page.body,
    children: page.body.children.filter(({ tag }) => tag !== 'h1'),
  },
}))
const date = computed(() => (page?.date ? new Date(page.date) : null))
const tags = computed(() => page?.tags || null)
</script>

<style>
@import '~/assets/styles/markdown.scss';
</style>
