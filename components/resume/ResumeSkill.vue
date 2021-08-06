<template>
  <div class="ResumeSkill">
    <div class="font-serif text-xl mb-2">{{ skill.name }}</div>
    <div
      v-for="keyword in skill.keywords"
      :key="`skill-${skill.name}-${keyword}`"
      class="mr-2 mb-1 inline-block bg-gray-300 px-2 py-1 text-sm rounded-md"
    >
      {{ keyword }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { JsonResume } from '~/plugins/resume/types'

export default Vue.extend({
  props: {
    skill: {
      type: Object,
      required: true,
    } as PropOptions<JsonResume.Skill>,
  },
})
</script>
