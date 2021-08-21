<template>
  <div class="BlogPage">
    <div v-if="document.heroImage" class="BlogPage_Hero">
      <LazyImage
        :src="document.heroImage"
        class="BlogPage_HeroImage w-full h-full max-h-96 object-cover"
      />
    </div>
    <div class="BlogPage_Content flex mx-4 pt-8 lg:mx-auto lg:pt-16">
      <aside class="BlogPage_Aside hidden lg:w-64 lg:mx-8 lg:block lg:mx-auto">
        <BlogLink />
        <BlogToc :toc="document.toc" />
      </aside>
      <main class="BlogPage_Main w-full lg:max-w-3xl">
        <div class="BlogPage_Heading mb-8">
          <BlogLink class="lg:hidden" />
          <div class="font-serif font-bold text-6xl mb-2 lg:max-w-xl">
            {{ document.title }}
          </div>
          <div class="BlogPage_Details">
            <span v-if="published" class="BlogPage_Published">
              Published
              <TimePeriod
                :start="published"
                format="MMM DD YYYY hh:mm A"
                :options="{ units: ['y', 'mo', 'd', 'h'] }"
              />
            </span>
          </div>
        </div>
        <div class="BlogPage_Content">
          <nuxt-content :document="document" />
          <Initials class="h-32 mt-8" />
        </div>
      </main>
    </div>
    <ScrollFab />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import Initials from '~/components/Initials.vue'
import ScrollFab from '~/components/ScrollFab.vue'
import TimePeriod from '~/components/TimePeriod.vue'
import LazyImage from '~/components/LazyImage.vue'
import BlogToc from '~/components/blog/BlogToc.vue'
import BlogLink from '~/components/blog/BlogLink.vue'

export default Vue.extend({
  components: {
    Initials,
    ScrollFab,
    TimePeriod,
    LazyImage,
    BlogToc,
    BlogLink,
  },
  layout: 'none',
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
  computed: {
    published(): string | null {
      return this.document?.published || this.document?.createdAt
    },
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

.BlogPage_Aside {
  min-width: 13rem;
}

.BlogPage_HeroImage {
  mask-image: linear-gradient(180deg, white 50%, transparent);
  -webkit-mask-image: linear-gradient(180deg, white 50%, transparent);
}
</style>
