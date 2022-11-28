<template>
  <NuxtLayout>
    <Navigation />
    <div class="flex gap-4">
      <main class="lg:w-5/6">
        <article v-if="data" class="markdown">
          <ContentRenderer :value="data">
            <ContentRendererMarkdown :value="data" />
          </ContentRenderer>
          <Initials class="mt-8" />
        </article>
      </main>
      <aside class="lg:w-1/6">
        <BlogEntryToc :value="data" />
      </aside>
    </div>
  </NuxtLayout>
</template>

<script setup>
const { params } = useRoute()
const { data } = await useAsyncData('page-data', () =>
  queryContent(`blog/${params.slug}`).findOne()
)
</script>

<style>
@import '~/assets/styles/markdown.scss';
</style>
