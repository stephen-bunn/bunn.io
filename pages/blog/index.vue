<template>
  <main class="Blog">
    <Search v-model="searchModel" />
    <BlogEntry
      v-for="entry in blogEntries"
      :key="entry.slug"
      :entry="entry"
      class="Blog_BlogEntry mb-8"
    />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import { BlogEntry } from '~/components/blog'
import Search from '~/components/Search.vue'

export default Vue.extend({
  components: {
    BlogEntry,
    Search,
  },
  async asyncData({ $content }) {
    const blogEntries = await $content('blog').sortBy('createdAt').fetch()
    return { blogEntries }
  },
  data() {
    return {
      searchModel: null,
      blogEntries: [] as IContentDocument | IContentDocument[],
    }
  },
  watch: {
    async searchModel(query: string) {
      const entries = await this.$content('blog')
        .search(query)
        .sortBy('createdAt')
        .fetch()
      this.blogEntries = Array.isArray(entries) ? entries : [entries]
    },
  },
  mounted() {
    this.$anime({
      targets: '.Blog_BlogEntry',
      easing: 'easeOutExpo',
      opacity: [0, 1],
      duration: 1500,
      direction: 'normal',
      delay: (_: Element, index: number) => {
        return 100 * index
      },
    })
  },
})
</script>
