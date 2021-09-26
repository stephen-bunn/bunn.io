<template>
  <div class="NoneLayout bg-gray-200">
    <Navigation class="absolute z-10" :left="internal" />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NavigationItem as NavItem } from '~/plugins/navigation/types'

export default Vue.extend({
  data() {
    return {
      internal: null as NavItem[] | null,
    }
  },
  created() {
    const nav = this.$navigation.get()
    this.internal = nav.internal.filter((item) => item.to === '/blog')
  },
})
</script>

<style lang="scss">
.NoneLayout {
  min-height: 100vh;
}
</style>
