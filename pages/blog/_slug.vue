<template>
  <main class="BlogEntry">
    <div class="font-serif font-bold text-3xl">{{ document.title }}</div>
    <NuxtContent :document="document" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const blogEntries = await $content('blog')
      .where({ slug: params.slug })
      .limit(1)
      .fetch()
    return {
      document: Array.isArray(blogEntries) ? blogEntries[0] : blogEntries,
    }
  },
  data() {
    return {
      document: null as IContentDocument | null,
    }
  },
  mounted() {
    this.$anime({
      targets: '.BlogEntry',
      easing: 'easeOutExpo',
      // translateY: [100, 0],
      opacity: [0, 1],
      duration: 1500,
      direction: 'normal',
    })
  },
})
</script>
