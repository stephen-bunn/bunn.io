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
        <Link :to="work.website" class="text-blue-500">
          {{ work.company }}
        </Link>
        <span
          v-tooltip.right="{
            content: workDuration,
            classes: 'bg-gray-500 text-xs text-white px-2 ml-2 rounded-md',
          }"
          class="
            w-max
            cursor-pointer
            text-gray-500 text-xs
            md:self-center md:ml-2
            border-dotted border-b-2 border-gray-500
          "
        >
          {{ workPeriod }}
        </span>
      </div>
    </div>
    <div class="ResumeWork_Content mt-4">
      <p>{{ work.summary }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { JsonResume } from '~/types/JsonResume'
import Link from '~/components/Link.vue'
import { getPeriod, getDuration } from '~/utils/duration'

export default Vue.extend({
  components: {
    Link,
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
    workPeriod(): string {
      return getPeriod(this.work.startDate, this.work?.endDate || null)
    },
    workDuration(): string {
      return getDuration(this.work.startDate, this.work?.endDate || null)
    },
  },
})
</script>
