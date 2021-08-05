<template>
  <main>
    <div class="flex flex-col place-items-center">
      <img
        class="w-48 h-48 rounded-full"
        :src="resume.basics.picture"
        :alt="resume.basics.name"
        :srcset="pictureSrcset"
      />
      <p class="font-serif text-2xl">{{ resume.basics.label }}</p>
      <CascadeDrop class="font-serif font-bold text-8xl uppercase">
        {{ resume.basics.name }}
      </CascadeDrop>
    </div>
    <section>
      <ResumeWork
        v-for="(work, workIndex) in resume.work"
        :key="`resume-work-${workIndex}`"
        :work="work"
        class="ResumeWork my-8"
      >
        {{ work.company }}
      </ResumeWork>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import ResumeWork from '~/components/resume/ResumeWork.vue'
import CascadeDrop from '~/components/text/CascadeDrop.vue'
import { JsonResume } from '~/types/JsonResume'

export default Vue.extend({
  components: {
    CascadeDrop,
    ResumeWork,
  },
  layout: 'default',
  async asyncData({ $resume }) {
    const resume = await $resume.get()
    return { resume }
  },
  data() {
    return {
      resume: null as JsonResume.Resume | null,
    }
  },
  computed: {
    pictureSrcset(): string {
      const resume = this.resume
      if (!resume) {
        return ''
      }

      return Object.entries({
        '1x': 256,
        '2x': 512,
      })
        .map(([descriptor, size]) => {
          return `${resume.basics.picture}?s=${size} ${descriptor}`
        })
        .join(', ')
    },
  },
  mounted() {
    this.$anime({
      targets: '.ResumeWork',
      easing: 'easeOutExpo',
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 1500,
      delay: (_: Element, index: number) => {
        return 100 * index
      },
      direction: 'normal',
    })
  },
})
</script>
