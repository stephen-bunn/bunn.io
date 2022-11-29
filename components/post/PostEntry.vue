<template>
  <div class="border-b border-gray-300 py-8">
    <h2 class="text-3xl font-bold">
      <VLink :to="value._path">{{ value.title }}</VLink>
    </h2>
    <PostDetails :date="date" :tags="tags" />
    <p>{{ value.description }}</p>
  </div>
</template>

<script setup>
const { value } = defineProps({ value: { type: Object, required: true } })

const date = computed(() => (value?.date ? new Date(value.date) : null))
const tags = computed(() => value?.tags || null)
</script>
