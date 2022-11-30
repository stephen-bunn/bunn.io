<template>
  <NuxtLayout>
    <Navigation />
    <main>
      <div class="text-center mb-8">
        <h1 class="text-5xl font-bold font-serif">Posts</h1>
        <p>Displaying all posts, newest first.</p>
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
const { displayName } = useConstants()
useHead({ title: `${displayName} | Posts` })

const query = computed(() => ({
  path: '/posts',
  sort: { date: -1 },
}))
</script>
