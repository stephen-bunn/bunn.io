<template>
  <div class="ResumeHero">
    <figure class="flex flex-col place-items-center">
      <LazyImage
        class="w-32 h-32 md:w-48 md:h-48 rounded-full"
        :src="pictureSrc"
        :srcset="pictureSrcSet"
        :alt="name"
      />
      <figcaption class="font-serif text-lg md:text-2xl text-center">
        {{ label }}
      </figcaption>
    </figure>
    <div
      class="font-serif font-bold text-5xl md:text-8xl text-center uppercase"
    >
      {{ name }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { JsonResume } from '~/plugins/resume/types'
import LazyImage from '~/components/LazyImage.vue'

export default Vue.extend({
  components: {
    LazyImage,
  },
  props: {
    basics: {
      type: Object,
      required: true,
    } as PropOptions<JsonResume.Basics>,
  },
  computed: {
    name(): string {
      return this.basics.name
    },
    label(): string {
      return this.basics.label
    },
    pictureSrc(): string {
      return this.basics.picture
    },
    pictureSrcSet(): string {
      return Object.entries({
        '1x': 256,
        '2x': 512,
      })
        .map(([descriptor, size]) => {
          return `${this.basics.picture}?s=${size} ${descriptor}`
        })
        .join(', ')
    },
  },
})
</script>
