<template>
  <div class="ResumeWork">
    <div class="ResumeWork_Heading">
      <div class="ResumeWork_Position flex">
        <h3 class="font-serif text-2xl">{{ work.position }}</h3>
        <Chip v-if="isCurrent" class="ml-2">Current</Chip>
      </div>
      <div class="ResumeWork_Subheading flex flex-col md:flex-row">
        <Link :to="work.website" target="_blank">
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
      <div v-if="work.highlights.length > 0" class="mt-2 ml-6">
        <ul class="list-disc">
          <li v-for="highlight in work.highlights" :key="highlight">
            {{ highlight }}
          </li>
        </ul>
      </div>
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
