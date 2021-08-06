<template>
  <div class="ResumeEducation">
    <div class="font-serif text-2xl">{{ education.institution }}</div>
    <div class="mb-4">{{ education.studyType }} of {{ education.area }}</div>
    <div
      v-for="course in education.courses"
      :key="`education-${course}`"
      class="ml-8 mb-2"
    >
      {{ course }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { JsonResume } from '~/plugins/resume/types'

export default Vue.extend({
  props: {
    education: {
      type: Object,
      required: true,
    } as PropOptions<JsonResume.Education>,
  },
})
</script>
