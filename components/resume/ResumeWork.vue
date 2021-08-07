<template>
  <div class="ResumeWork">
    <div class="ResumeWork_Heading">
      <div class="ResumeWork_Position flex">
        <h3 class="font-serif text-2xl">{{ work.position }}</h3>
        <Chip v-if="isCurrent" class="ml-2">Current</Chip>
      </div>
      <div class="ResumeWork_Subheading flex flex-col md:flex-row">
        <Link :to="work.website">
          {{ work.company }}
        </Link>
        <TimePeriod
          :start="work.startDate"
          :end="work.endDate || null"
          class="ResumeWork_TimePeriod text-xs md:ml-2 underline"
        />
      </div>
    </div>
    <div class="ResumeWork_Content mt-4">
      <p>{{ work.summary }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { JsonResume } from '~/plugins/resume/types'
import Link from '~/components/Link.vue'
import TimePeriod from '~/components/TimePeriod.vue'
import Chip from '~/components/Chip.vue'

export default Vue.extend({
  components: {
    Link,
    Chip,
    TimePeriod,
  },
  props: {
    work: {
      type: Object,
      required: true,
    } as PropOptions<JsonResume.Work>,
  },
  computed: {
    isCurrent(): boolean {
      return !this.work?.endDate
    },
  },
})
</script>

<style>
.ResumeWork_TimePeriod {
  text-decoration-style: dotted;
}
</style>
