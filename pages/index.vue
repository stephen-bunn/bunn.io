<template>
  <div
    class="
      animate-pulse
      font-bold font-serif
      text-8xl text-gray-300 text-center
      align-middle
    "
  >
    Loading...
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  middleware: 'resume-redirect',
})
</script>
