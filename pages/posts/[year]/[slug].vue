<template>
  <NuxtLayout>
    <Navigation />
    <main>
      <article>
        <div class="flex flex-col items-center mb-8">
          <h1 class="text-7xl font-bold font-serif">
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
import { format } from 'date-fns'
const route = useRoute()
const page = await queryContent(route.path).findOne()

const content = computed(() => ({
  body: {
    ...page.body,
    children: page.body.children.filter(({ tag }) => tag !== 'h1'),
  },
}))
const date = computed(() =>
  page?.date ? format(new Date(page.date), 'PPP') : null
)
const tags = computed(() => page?.tags || null)
</script>

<style>
@import '~/assets/styles/markdown.scss';
</style>
