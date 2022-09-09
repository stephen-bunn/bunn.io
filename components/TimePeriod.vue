<template>
  <span
    class="underline underline-offset-2 decoration-dotted text-gray-500 text-sm"
  >
    {{ format(startDate, dateFormat) }}
    <template v-if="endDate"> - {{ format(endDate, dateFormat) }} </template>
  </span>
</template>

<script setup>
import {
  parseISO,
  format,
  formatDistanceStrict,
  formatDistanceToNowStrict,
} from 'date-fns'

const props = defineProps({
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    default: null,
  },
  dateFormat: {
    type: String,
    default: 'MMM yyyy',
  },
})

const startDate = computed(() => parseISO(props.start))
const endDate = computed(() => (props.end ? parseISO(props.end) : null))

const duration = computed(() =>
  endDate.value
    ? formatDistanceStrict(startDate.value, endDate.value)
    : `${formatDistanceToNowStrict(startDate.value)} ago`
)
</script>
