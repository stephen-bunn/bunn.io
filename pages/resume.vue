<template>
  <ResumeBasics :data="resume.basics"></ResumeBasics>
</template>

<script lang="ts">
import Vue from 'vue'
import ResumeBasics from '~/components/resume/ResumeBasics.vue'

export default Vue.extend({
  components: {
    ResumeBasics,
  },
  layout: 'default',
  async asyncData({ $resume }) {
    const resume = await $resume.get()
    return { resume }
  },
})
</script>
