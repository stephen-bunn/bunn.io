<template>
  <div class="ResumeSummary">
    <div class="ResumeSummary_Summary mb-2">
      {{ summary }}
    </div>
    <div class="ResumeSummary_Location font-bold">
      {{ name }} is currently located in {{ location }}.
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { JsonResume } from '~/plugins/resume/types'

export default Vue.extend({
  props: {
    basics: {
      type: Object,
      required: true,
    } as PropOptions<JsonResume.Basics>,
  },
  computed: {
    summary(): string {
      return this.basics.summary
    },
    name(): string {
      return this.basics.name
    },
    location(): string {
      return `${this.basics.location.city}, ${this.basics.location.region}`
    },
  },
})
</script>
