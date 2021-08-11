<template>
  <div class="ResumeReference border-l-2 border-gray-500 text-gray-500 pl-4">
    <div class="ResumeReference_Content text-s mb-2">
      {{ content }}
    </div>
    <div class="ResumeReference_Author font-serif font-bold text-2xl">
      &mdash;&nbsp;{{ author }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { JsonResume } from '~/plugins/resume/types'

export default Vue.extend({
  props: {
    reference: {
      type: Object,
      required: true,
    } as PropOptions<JsonResume.Reference>,
  },
  computed: {
    author(): string {
      return this.reference.name
    },
    content(): string {
      return this.reference.reference
    },
  },
})
</script>
