<template>
  <NuxtLayout>
    <Navigation />
    <main>
      <div class="text-center mb-8">
        <h1 class="text-5xl font-bold font-serif">{{ year }} Posts</h1>
        <p>
          Displaying all posts from the year <strong>{{ year }}</strong
          >, newest first.
        </p>
      </div>
      <hr class="border-b border-b-gray-300" />
      <div>
        <ContentList :query="query">
          <template #default="{ list: postList }">
            <PostEntry v-for="post in postList" :key="post._id" :post="post" />
          </template>
          <template #not-found>
            <PostEmptyState />
          </template>
        </ContentList>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  validate: async route => /^\d+$/.test(route.params.year),
})

const { displayName } = useConstants()
const route = useRoute()
const year = computed(() => route.params.year)
useHead({ title: `${displayName} | ${year.value} Posts` })

const query = computed(() => ({
  path: '/posts',
  where: { year: { $eq: Number(route.params.year) } },
  sort: { date: -1 },
}))
</script>
