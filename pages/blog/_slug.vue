<template>
  <main class="BlogPage">
    <div class="BlogPage_Heading mb-8 md:mb-16">
      <div class="font-serif font-bold text-4xl md:text-6xl mb-2 max-w-xl">
        {{ document.title }}
      </div>
      <div class="BlogPage_Details">
        Published
        <TimePeriod
          :start="document.createdAt"
          format="MMM DD YYYY hh:mm A"
          :options="{ units: ['y', 'mo', 'h', 'm'] }"
        />
      </div>
    </div>
    <div class="BlogPage_Content">
      <nuxt-content :document="document" />
      <Initials class="h-32" />
    </div>
    <ScrollFab />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import Initials from '~/components/Initials.vue'
import ScrollFab from '~/components/ScrollFab.vue'
import TimePeriod from '~/components/TimePeriod.vue'

export default Vue.extend({
  components: {
    Initials,
    ScrollFab,
    TimePeriod,
  },
  layout: 'blog',
  async asyncData({ $content, params, error }) {
    const blogEntries = await $content('blog')
      .where({ slug: params.slug })
      .limit(1)
      .fetch()

    if (!Array.isArray(blogEntries) || blogEntries.length === 0) {
      return error({ statusCode: 404, message: 'Blog entry not found' })
    }
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
      targets: '.BlogPage',
      easing: 'easeOutExpo',
      opacity: [0, 1],
      duration: 1500,
      direction: 'normal',
    })
  },
})
</script>

<style lang="scss">
@import '~/assets/style/blog.scss';
</style>
