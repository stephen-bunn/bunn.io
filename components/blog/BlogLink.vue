<template>
  <Link class="font-serif font-bold text-2xl uppercase flex my-4" to="/blog">
    Back to Blog
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
