<template>
  <div class="ResumeLanguage flex">
    <div class="font-serif text-2xl">{{ language.language }}</div>
    <Chip v-if="language.fluency" class="ml-2">
      {{ language.fluency }}
    </Chip>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { JsonResume } from '~/plugins/resume/types'
import Chip from '~/components/Chip.vue'

export default Vue.extend({
  components: {
    Chip,
  },
  props: {
    language: {
      type: Object,
      required: true,
    } as PropOptions<JsonResume.Language>,
  },
})
</script>
