<template>
  <div>
    <ResumeBasics :data="resume.basics"></ResumeBasics>
    <Card><Initials></Initials></Card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ResumeBasics from '~/components/resume/ResumeBasics.vue'
import Card from '~/components/Card.vue'
import Initials from '~/components/Initials.vue'

export default Vue.extend({
  components: {
    ResumeBasics,
    Card,
    Initials,
  },
  layout: 'default',
  async asyncData({ $resume }) {
    const resume = await $resume.get()
    return { resume }
  },
})
</script>
