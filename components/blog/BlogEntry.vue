<template>
  <section
    class="
      BlogEntry
      bg-gray-50
      mx-auto
      rounded-lg
      overflow-hidden
      cursor-pointer
      transition-shadow
      duration-700
      shadow-xl
      hover:shadow-2xl
      md:max-h-72
    "
    @click="handleClick"
    @keyup.enter="handleClick"
  >
    <div class="BlogEntry_Content md:flex">
      <div v-if="document.tileImage" class="BlogEntry_Media md:flex-shrink-0">
        <img
          class="w-full h-full max-h-64 md:max-h-72 md:w-96 object-cover"
          :src="document.tileImage"
        />
      </div>
      <div class="p-8">
        <div v-if="document.title" class="font-serif font-bold text-3xl">
          {{ document.title }}
        </div>
        <TimePeriod
          :start="createdAt"
          :options="{ units: ['y', 'mo', 'd'] }"
          format="MMM DD YYYY"
        />
        <div
          v-if="document.excerpt"
          class="BlogEntry_Excerpt pt-4 h-40 overflow-hidden"
        >
          <nuxt-content :document="{ body: document.excerpt }" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import dayjs from 'dayjs'
import TimePeriod from '~/components/TimePeriod.vue'

export default Vue.extend({
  components: {
    TimePeriod,
  },
  props: {
    document: {
      type: Object,
      required: true,
    } as PropOptions<IContentDocument>,
  },
  computed: {
    createdAt(): string {
      return dayjs(this.document.createdAt).format('YYYY-MM-DD')
    },
  },
  methods: {
    handleClick() {
      this.$router.push(`/blog/${this.document.slug}`)
    },
  },
})
</script>

<style>
.BlogEntry_Excerpt {
  mask-image: linear-gradient(180deg, white, transparent);
  -webkit-mask-image: linear-gradient(180deg, white, transparent);
}
</style>
