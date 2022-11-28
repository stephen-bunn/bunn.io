<template>
  <div class="flex gap-4 mb-2 text-gray-500">
    <div v-if="date" class="flex gap-1">
      <FeatherIcon name="calendar" :size="16" />
      {{ date }}
    </div>
    <div v-if="tags" class="flex gap-1">
      <FeatherIcon name="tag" :size="16" />
      <div class="flex gap-2">
        <NuxtLink
          v-for="(tag, tagIndex) in tags"
          :key="tag"
          :to="`/tags/${tag}`"
          class="font-mono underline underline-offset-4 decoration-dotted"
        >
          #{{ tag }}{{ tagIndex !== tags.length - 1 ? ',' : '' }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  date: { type: String, required: false },
  tags: { type: Array, required: false },
})
</script>
