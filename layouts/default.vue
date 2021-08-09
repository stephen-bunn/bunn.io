<template>
  <div class="DefaultLayout min-h-screen bg-gray-200">
    <Navigation :left="internal" :right="external" />
    <div class="p-8 lg:mx-auto lg:max-w-5xl">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navigation from '~/components/Navigation.vue'
import { NavigationItem } from '~/plugins/navigation/types'

export default Vue.extend({
  components: {
    Navigation,
  },
  data() {
    return {
      internal: null as NavigationItem[] | null,
      external: null as NavigationItem[] | null,
    }
  },
  created() {
    const nav = this.$navigation.get()
    this.internal = nav.internal
    this.external = nav.external
  },
})
</script>
