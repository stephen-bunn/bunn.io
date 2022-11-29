<template>
  <button
    class="px-4 py-2 rounded-md text-black uppercase font-serif bg-gray-300 outline-transparent outline-dashed outline-2 outline-offset-4 transition-colors focus:outline-gray-700"
    :class="{ 'text-gray-400': disabled }"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>
