<template>
  <main class="Blog">
    <div
      class="
        Blog_BlogControls
        opacity-0
        mb-8
        flex flex-col
        md:flex-row
        justify-between
      "
    >
      <Search v-model="searchModel" class="mb-2 md:mb-0 w-full md:w-72" />
      <div class="flex justify-between md:justify-end">
        <Pagination
          v-model="paginationModel"
          :maximum="paginationMaximum"
          class="md:mr-4"
        />
        <Ordering v-model="orderingModel" />
      </div>
    </div>
    <div v-if="blogEntries.length > 0" class="Blog_BlogEntries">
      <BlogEntry
        v-for="entry in blogEntries"
        :key="entry.slug"
        :document="entry"
        class="Blog_BlogEntry mb-8"
        tabindex="0"
      />
    </div>
    <div
      v-else-if="searchModel.length > 0"
      class="font-serif font-bold text-gray-400 text-5xl uppercase"
    >
      No blog entries found
    </div>
    <ScrollFab />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import { BlogEntry } from '~/components/blog'
import Search from '~/components/Search.vue'
import Pagination from '~/components/Pagination.vue'
import Ordering from '~/components/Ordering.vue'
import ScrollFab from '~/components/ScrollFab.vue'

export default Vue.extend({
  components: {
    BlogEntry,
    Search,
    Pagination,
    Ordering,
    ScrollFab,
  },
  async asyncData({ $content }) {
    // This may seem expensive, but Nuxt Content has no counting helper
    // https://github.com/nuxt/content/issues/378
    const total: number = (await $content('blog').fetch()).length
    return { total }
  },
  data() {
    return {
      searchModel: '',
      paginationModel: 1,
      paginationMaximum: 1,
      orderingModel: true,
      perPage: 10,
      total: 0,
      blogEntries: [] as IContentDocument | IContentDocument[],
      searchTotal: 0,
    }
  },
  watch: {
    async searchModel() {
      // Everytime the search model is updated, we need to ensure that the total
      // discovered search entries are counted so we can keep pagination up to date
      this.searchTotal = (
        await this.$content('blog').search(this.searchModel).fetch()
      ).length
      await this.updateBlogEntries()
    },
    async paginationModel() {
      await this.updateBlogEntries()
    },
    async orderingModel() {
      await this.updateBlogEntries()
    },
  },
  async mounted() {
    await this.updateBlogEntries()
    this.$anime({
      targets: ['.Blog_BlogControls', '.Blog_BlogEntry'],
      easing: 'easeOutExpo',
      opacity: [0, 1],
      duration: 1500,
      direction: 'normal',
      delay: (_: Element, index: number) => {
        return 100 * index
      },
    })
  },
  methods: {
    updatePaginationMaximum() {
      let paginationMaximum = Math.ceil(
        (this.searchModel.length > 0 ? this.searchTotal : this.total) /
          this.perPage
      )
      if (paginationMaximum <= 0) {
        paginationMaximum = 1
      }
      this.paginationMaximum = paginationMaximum
    },
    async updateBlogEntries() {
      const entries = await this.$content('blog')
        .search(this.searchModel)
        .sortBy(this.orderingModel ? '-createdAt' : 'createdAt')
        .limit(this.perPage)
        .skip(this.perPage * (this.paginationModel - 1))
        .fetch()

      this.blogEntries = Array.isArray(entries) ? entries : [entries]
      this.updatePaginationMaximum()
    },
  },
})
</script>
