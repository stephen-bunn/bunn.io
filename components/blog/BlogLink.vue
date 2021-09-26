<template>
  <Link
    class="
      NavigationItem
      flex
      px-4
      py-5
      space-x-2
      transition-colors
      duration-700
      hover:text-black
    "
    to="/blog"
  >
    <Icon name="book-open" />
    <span class="font-bold font-serif uppercase self-center"> Blog </span>
  </Link>
</template>

<script lang="ts">
import Vue from 'vue'
import Link from '~/components/Link.vue'

export default Vue.extend({
  components: {
    Link,
  },
})
</script>
