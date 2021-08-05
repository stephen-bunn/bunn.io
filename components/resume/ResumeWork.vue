<template>
  <Card> {{ work.company }} &mdash; {{ work.position }} </Card>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { JsonResume } from '~/types/JsonResume'
import Card from '~/components/Card.vue'

export default Vue.extend({
  components: {
    Card,
  },
  props: {
    work: {
      type: Object,
      required: true,
    } as PropOptions<JsonResume.Work>,
  },
})
</script>
