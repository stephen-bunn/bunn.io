<template>
  <NuxtLayout>
    <Navigation />
    <main>
      <div class="text-center mb-8">
        <h1 class="text-5xl font-bold font-serif">#{{ route.params.tag }}</h1>
        <p>
          Displaying all posts containing the
          <strong>#{{ route.params.tag }}</strong> tag, newest first.
        </p>
      </div>
      <hr class="border-b border-gray-300" />
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
const { displayName } = useConstants()
const route = useRoute()

useHead({ title: `${displayName} | Tags` })
const query = {
  path: '/posts',
  where: { tags: { $contains: route.params.tag } },
  sort: { date: -1 },
}
</script>
