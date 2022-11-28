<template>
  <div class="flex flex-col px-4 py-2 bg-gray-300 rounded-lg">
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  value: Object,
})

const items = computed(() => {
  return props.value.body.toc.links.map(({ text }) => text)
})
</script>
