<template>
  <main class="ErrorPage text-center">
    <div class="ErrorPage_Content opacity-0">
      <div
        v-if="statusCode"
        class="font-serif font-bold text-gray-400 text-8xl uppercase"
      >
        {{ statusCode }}
      </div>
      <div class="font-serif font-bold text-gray-400 text-8xl uppercase">
        {{ message }}
      </div>
    </div>
    <div class="ErrorPage_Navigation opacity-0">
      <Link to="/" class="font-serif font-bold text-4xl"> Go Home </Link>
    </div>
  </main>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { NuxtError } from '@nuxt/types'
import Link from '~/components/Link.vue'

export default Vue.extend({
  components: {
    Link,
  },
  layout: 'centered',
  props: {
    error: {
      type: Object,
      required: true,
    } as PropOptions<NuxtError>,
  },
  computed: {
    statusCode(): number | null {
      return this.error.statusCode || null
    },
    message(): string {
      return this.error.message || 'An error occured'
    },
  },
  mounted() {
    this.$anime({
      targets: ['.ErrorPage_Content', '.ErrorPage_Navigation'],
      easing: 'easeOutExpo',
      opacity: [0, 1],
      duration: 1500,
      delay: (_: Element, index: number) => {
        return 500 * index
      },
      direction: 'normal',
    })
  },
})
</script>
