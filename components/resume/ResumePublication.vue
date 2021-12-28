<template>
  <div class="ResumePublication">
    <Link :to="publication.website" class="font-serif text-2xl" target="_blank">
      {{ publication.name }}
    </Link>
    <div class="mb-4">
      Published by {{ publication.publisher }} on
      <TimePeriod
        class="ResumePublication_TimePeriod underline"
        :start="publication.releaseDate"
        format="MMM DD YYYY"
      />
    </div>
    <div>
      {{ publication.summary }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import dayjs from 'dayjs'
import { JsonResume } from '~/plugins/resume/types'
import Link from '~/components/Link.vue'
import TimePeriod from '~/components/TimePeriod.vue'

export default Vue.extend({
  components: {
    Link,
    TimePeriod,
  },
  props: {
    publication: {
      type: Object,
      required: true,
    } as PropOptions<JsonResume.Publication>,
  },
  computed: {
    releaseDate(): string {
      return dayjs(this.publication.releaseDate).format('MMM DD YYYY')
    },
  },
})
</script>

<style>
.ResumePublication_TimePeriod {
  text-decoration-style: dotted;
  text-underline-offset: 0.125rem;
}
</style>
