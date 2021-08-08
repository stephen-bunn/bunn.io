<template>
  <div class="BlogLayout min-h-screen bg-gray-200 px-8 md:px-16">
    <div class="BlogLayout_Navigation py-8">
      <Link
        class="inline-flex font-serif font-bold uppercase text-xl"
        to="/blog"
      >
        <Icon name="arrow-left" class="mr-2" />
        Back to blog
      </Link>
    </div>
    <div class="md:mx-auto md:max-w-3xl">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'
import Link from '~/components/Link.vue'

export default Vue.extend({
  components: {
    Icon,
    Link,
  },
})
</script>
