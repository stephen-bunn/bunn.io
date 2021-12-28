<template>
  <div class="ResumeAward">
    <div class="font-serif text-2xl">{{ award.title }}</div>
    <div class="mb-4">
      By {{ award.awarder }} on
      <TimePeriod
        class="ResumeAward_TimePeriod underline"
        :start="award.date"
        format="MMM DD YYYY"
      />
    </div>
    <div>
      {{ award.summary }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { JsonResume } from '~/plugins/resume/types'
import TimePeriod from '~/components/TimePeriod.vue'

export default Vue.extend({
  components: {
    TimePeriod,
  },
  props: {
    award: {
      type: Object,
      required: true,
    } as PropOptions<JsonResume.Award>,
  },
})
</script>

<style>
.ResumeAward_TimePeriod {
  text-decoration-style: dotted;
  text-underline-offset: 0.125rem;
}
</style>
