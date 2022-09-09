<template>
  <button
    class="fixed text-white bg-blue-500 p-2 opacity-80 rounded-t-lg bottom-0 right-2 outline-dashed outline-2 outline-offset-2 outline-transparent transition-colors lg:p-4 hover:bg-blue-700 focus:bg-blue-700 focus:outline-blue-700"
    @click="onClick"
  >
    <span class="sr-only">Scroll to top</span>
    <FeatherIcon name="chevron-up" />
  </button>
</template>

<script setup lang="ts">
const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>
