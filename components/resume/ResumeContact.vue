<template>
  <div class="ResumeContact">
    <div class="ResumeContact_Content mb-4">
      <strong>
        Feel free to send me an email if you are looking to contact me about
        recruitment.
      </strong>
      I'm available
      <Link to="https://time.is/EDT" target="_blank"> EDT </Link>
      daytime hours and am open to hearing about any opportunities.
    </div>
    <div class="flex">
      <Link :to="mailto" class="flex font-sans text-xl">
        <Icon name="mail" class="mr-2 self-center" />
        {{ basics.email }}
      </Link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { JsonResume } from '~/plugins/resume/types'
import Link from '~/components/Link.vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  components: {
    Link,
    Icon,
  },
  props: {
    basics: {
      type: Object,
      required: true,
    } as PropOptions<JsonResume.Basics>,
  },
  computed: {
    mailto(): string {
      return `mailto:${this.basics.email}`
    },
  },
})
</script>
