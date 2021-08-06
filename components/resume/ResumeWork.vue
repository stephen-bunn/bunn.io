<template>
  <div class="ResumeWork">
    <div class="ResumeWork_Heading">
      <div class="ResumeWork_Position flex">
        <h3 class="font-serif text-2xl">{{ work.position }}</h3>
        <span
          v-if="isCurrent"
          class="
            place-self-center
            ml-4
            px-2
            py-1
            bg-blue-500
            rounded-full
            text-white text-center text-xs
          "
        >
          Current Position
        </span>
      </div>
      <div class="ResumeWork_Subheading flex flex-col md:flex-row">
        <Link :to="work.website">
          {{ work.company }}
        </Link>
        <TimePeriod
          :start="work.startDate"
          :end="work.endDate || null"
          class="text-xs md:ml-2"
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

export default Vue.extend({
  components: {
    Link,
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
