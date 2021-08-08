<template>
  <span
    v-tooltip.right="{
      content: workDuration,
      classes: 'bg-gray-300 text-xs px-2 py-1 ml-2 rounded-md',
    }"
    class="TimePeriod w-max cursor-pointer text-gray-500 md:self-center"
  >
    {{ workPeriod }}
  </span>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { HumanizerOptions } from 'humanize-duration'
import { getPeriod, getDuration } from '~/utils/duration'

export default Vue.extend({
  props: {
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      default: null,
    },
    format: {
      type: String,
      default: 'MMM YYYY',
    },
    separator: {
      type: String,
      default: ' - ',
    },
    options: {
      type: Object,
      default: () => {},
    } as PropOptions<HumanizerOptions>,
  },
  computed: {
    workPeriod(): string {
      return getPeriod(this.start, this.end, this.format, this.separator)
    },
    workDuration(): string {
      return getDuration(this.start, this.end, this.options)
    },
  },
})
</script>
