<template>
  <NuxtLayout>
    <Navigation />
    <main>
      <h1 class="text-5xl font-bold font-serif text-center">Posts</h1>
      <VButton @click="handleToggleSort">
        <FeatherIcon
          :name="dateDescending ? 'arrow-up' : 'arrow-down'"
          :size="16"
        />
        {{ dateDescending ? 'Newest first' : 'Oldest first' }}
      </VButton>
      <VSelect
        id="posts-page-size"
        label="Post page size"
        v-model="page"
        :options="options"
      ></VSelect>

      <hr class="border-b border-b-gray-300" />

      <ContentList :query="query">
        <template #default="{ list }">
          <PostEntry v-for="post in list" :key="post._id" :value="post" />
        </template>
        <template #not-found>
          <p>Not found</p>
        </template>
      </ContentList>
      <VButton @click="handleShowMore">Show More</VButton>
    </main>
  </NuxtLayout>
</template>

<script setup>
const resume = useResume()
useHead({ title: `${resume.value.basics.name} | Posts` })

const DEFAULT_PAGE_SIZE = 1
const DEFAULT_SORT = true

const options = [5, 10, 50, 100]

const page = ref(1)
const pageSize = 1
const pageLimit = ref(DEFAULT_PAGE_SIZE)
const dateDescending = ref(DEFAULT_SORT)

const handleShowMore = () => (pageLimit.value += pageSize)
const handleToggleSort = () => (dateDescending.value = !dateDescending.value)

const query = computed(() => ({
  path: '/posts',
  limit: pageLimit.value,
  sort: { date: dateDescending.value ? -1 : 1 },
}))
</script>
