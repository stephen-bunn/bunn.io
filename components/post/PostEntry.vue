<template>
  <div>
    <NuxtLink :to="value._path" class="text-3xl font-bold">
      <h2>{{ value.title }}</h2>
    </NuxtLink>
    <PostDetails :date="date" :tags="tags" />
    <p>{{ value.description }}</p>
  </div>
</template>

<script setup>
import { format } from 'date-fns'

const { value } = defineProps({ value: Object })

const date = computed(() =>
  value?.date ? format(new Date(value.date), 'PPP') : null
)
const tags = computed(() => value?.tags || null)
</script>
