<template>
  <button
    v-tooltip.left="{
      content: tooltip,
      classes: 'mr-2 px-2 py-1 bg-gray-300 rounded-md text-xs',
    }"
    class="
      ScrollFab
      p-4
      bg-blue-500
      text-white
      rounded-full
      fixed
      bottom-8
      right-8
      md:right-16
      transition-opacity
      shadow-lg
    "
    :class="activeClasses"
    :disabled="!isActive"
    @click="handleClick"
  >
    <Icon name="arrow-up" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  components: {
    Icon,
  },
  props: {
    tooltip: {
      type: String,
      default: 'Back to top',
    },
    foldPercentage: {
      type: Number,
      default: 30,
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    activeClasses(): string {
      return this.isActive ? 'opacity-100' : 'opacity-0 cursor-default'
    },
  },
  mounted() {
    this.handleScroll()
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isActive =
        window.scrollY > window.screen.height * (this.foldPercentage / 100)
    },
    handleClick() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
})
</script>
