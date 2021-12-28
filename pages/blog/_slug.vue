<template>
  <div class="BlogPage">
    <div v-if="document.heroImage" class="BlogPage_Hero relative">
      <LazyImage
        :src="document.heroImage"
        class="BlogPage_HeroImage w-full h-full max-h-96 object-cover"
      />
      <div
        v-if="document.heroAttribution"
        class="
          absolute
          bottom-0
          right-0
          text-gray-500
          bg-gray-200
          py-2
          px-4
          rounded-tl-lg
        "
      >
        <a
          v-if="document.heroAttributionLink"
          :href="document.heroAttributionLink"
          target="_blank"
        >
          {{ document.heroAttribution }}
        </a>
        <template v-else>
          {{ document.heroAttribution }}
        </template>
      </div>
    </div>
    <div class="BlogPage_Content flex mx-4 pt-8 lg:mx-auto lg:pt-16">
      <aside
        class="
          BlogPage_Aside
          hidden
          lg:w-64 lg:ml-8 lg:mr-16 lg:block lg:mx-auto
        "
      >
        <div class="sticky top-8">
          <button
            class="
              font-serif font-bold
              text-2xl
              uppercase
              flex
              my-4
              text-blue-500
              hover:text-blue-700
              transition-colors
              duration-500
            "
            @click="handleToTop"
          >
            Back to Top
          </button>
          <BlogToc :toc="document.toc" />
        </div>
      </aside>
      <main class="BlogPage_Main w-full lg:max-w-3xl">
        <div class="BlogPage_Heading mb-8">
          <div class="font-serif font-bold text-6xl mb-2 lg:max-w-xl">
            {{ document.title }}
          </div>
          <div class="BlogPage_Details">
            <span v-if="published" class="BlogPage_Published">
              Published
              <TimePeriod
                class="BlogPage_TimePeriod underline"
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
    <ScrollFab class="lg:hidden" />
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

export default Vue.extend({
  components: {
    Initials,
    ScrollFab,
    TimePeriod,
    LazyImage,
    BlogToc,
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
  methods: {
    handleToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
})
</script>

<style lang="scss">
@import '~/assets/style/blog.scss';

.BlogPage_Aside {
  min-width: 13rem;
}

.BlogPage_TimePeriod {
  text-decoration-style: dotted;
  text-underline-offset: 0.125rem;
}
</style>
