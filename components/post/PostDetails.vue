<template>
  <div class="flex gap-4 mb-2 text-gray-500">
    <div v-if="displayDate" class="flex gap-1">
      <FeatherIcon name="calendar" :size="16" />
      {{ displayDate }}
    </div>
    <div v-if="tags" class="flex gap-1">
      <FeatherIcon name="tag" :size="16" />
      <div class="flex gap-2">
        <PostTag v-for="tag in tags" :key="tag" :name="tag" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { format } from 'date-fns'

const props = defineProps({
  date: { type: Date, required: false },
  tags: { type: Array, required: false },
})

const displayDate = computed(() =>
  props?.date ? format(props.date, 'PPP') : null
)
</script>
