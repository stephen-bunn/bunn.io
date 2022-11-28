<template>
  <NuxtLayout>
    <Navigation />
    <main>
      <div class="text-center mb-8">
        <h1 class="text-5xl font-bold font-serif">#{{ route.params.tag }}</h1>
        <p>
          Displaying all posts containing the
          <strong>#{{ route.params.tag }}</strong> tag.
        </p>
      </div>

      <ContentList :query="query">
        <template #default="{ list }">
          <PostEntry v-for="post in list" :key="post._id" :value="post" />
        </template>
        <template #not-found>
          <p>No posts found.</p>
        </template>
      </ContentList>
    </main>
  </NuxtLayout>
</template>

<script setup>
const resume = useResume()
const route = useRoute()

useHead({ title: `${resume.value.basics.name} | Tags` })
const query = {
  path: '/posts',
  where: { tags: { $contains: route.params.tag } },
  sort: { date: -1 },
}
</script>
