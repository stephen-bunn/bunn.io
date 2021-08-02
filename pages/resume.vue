<template>
  <pre>{{ resume }}</pre>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $resume }) {
    const resume = await $resume.get()
    return { resume }
  },
})
</script>
