<template>
  <NuxtLink
    v-bind="$attrs"
    :to="to"
    class="text-primary-default rounded-sm outline-dashed outline-2 outline-offset-2 outline-transparent transition-colors hover:text-primary-active focus:text-primary-active focus:outline-primary-active"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>
