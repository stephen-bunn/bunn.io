<template>
  <NuxtLayout>
    <Navigation />
    <main>
      <h1 class="text-5xl font-bold font-serif text-center">Posts</h1>
      <Btn @click="handleToggleSort">
        <FeatherIcon
          :name="dateDescending ? 'arrow-down' : 'arrow-up'"
          :size="16"
        />
      </Btn>
      <ContentList :query="query">
        <template #default="{ list }">
          <PostEntry
            v-for="post in list"
            :key="post._id"
            :value="post"
            class="mb-8"
          />
        </template>
        <template #not-found>
          <p>Not found</p>
        </template>
      </ContentList>
      <Btn @click="handleShowMore">Show More</Btn>
    </main>
  </NuxtLayout>
</template>

<script setup>
const resume = useResume()
useHead({ title: `${resume.value.basics.name} | Posts` })

const pageSize = 1
const pageLimit = ref(pageSize)
const dateDescending = ref(true)

const handleShowMore = () => (pageLimit.value += pageSize)
const handleToggleSort = () => (dateDescending.value = !dateDescending.value)

const query = computed(() => ({
  path: '/posts',
  limit: pageLimit.value,
  sort: { date: dateDescending.value ? -1 : 1 },
}))
</script>
