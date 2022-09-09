<template>
  <NuxtLink
    v-bind="$attrs"
    :to="to"
    class="text-blue-500 rounded-sm outline-dashed outline-2 outline-offset-2 outline-transparent transition-colors hover:text-blue-700 focus:text-blue-700 focus:outline-blue-700"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: { type: String, required: true },
})
</script>
