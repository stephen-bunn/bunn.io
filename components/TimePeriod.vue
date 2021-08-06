<template>
  <span
    v-tooltip.right="{
      content: workDuration,
      classes: 'bg-gray-300 text-xs px-2 ml-2 rounded-md',
    }"
    class="
      TimePeriod
      w-max
      cursor-pointer
      text-gray-500
      md:self-center
      underline
    "
  >
    {{ workPeriod }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
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
  },
  computed: {
    workPeriod(): string {
      return getPeriod(this.start, this.end, this.format, this.separator)
    },
    workDuration(): string {
      return getDuration(this.start, this.end)
    },
  },
})
</script>

<style>
.TimePeriod {
  text-decoration-style: dotted;
}
</style>
