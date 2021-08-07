<template>
  <div class="min-h-screen bg-gray-200">
    <Navigation :left="leftNav" :right="rightNav" />
    <div class="p-8 lg:mx-auto lg:max-w-5xl">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navigation from '~/components/Navigation.vue'

const LEFT_NAV_ITEMS = [
  { to: '/', icon: 'home', label: 'Home' },
  { to: '/resume', icon: 'book-open', label: 'Resume' },
]
const RIGHT_NAV_ITEMS = [
  {
    to: 'https://linkedin.com/in/stephen-bunn/',
    icon: 'linkedin',
    label: null,
    target: '_blank',
  },
  {
    to: 'https://github.com/stephen-bunn/',
    icon: 'github',
    label: null,
    target: '_blank',
  },
]

export default Vue.extend({
  components: {
    Navigation,
  },
  data() {
    return {
      leftNav: LEFT_NAV_ITEMS,
      rightNav: RIGHT_NAV_ITEMS,
    }
  },
})
</script>
