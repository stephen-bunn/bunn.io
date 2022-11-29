<template>
  <NuxtLink
    class="font-mono underline underline-offset-4 decoration-dotted rounded-sm outline-transparent outline-2 outline-offset-4 transition-colors hover:text-black focus:text-black focus:outline-dashed focus:outline-gray-700"
    :to="route"
  >
    #{{ name }}
  </NuxtLink>
</template>

<script setup>
const props = defineProps({ name: { type: String, required: true } })
const route = computed(() => `/tags/${props.name}`)
</script>
