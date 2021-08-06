<template>
  <div class="ResumeHero flex flex-col place-items-center">
    <img
      class="w-48 h-48 rounded-full"
      :src="basics.picture"
      :alt="basics.name"
      :srcset="pictureSrcset"
    />
    <div class="font-serif text-2xl text-center">
      {{ basics.label }}
    </div>
    <div class="font-serif font-bold text-8xl text-center uppercase">
      {{ basics.name }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { JsonResume } from '~/plugins/resume/types'

export default Vue.extend({
  props: {
    basics: {
      type: Object,
      required: true,
    } as PropOptions<JsonResume.Basics>,
  },
  computed: {
    pictureSrcset(): string {
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
