<template>
  <img
    :src="src"
    :srcset="srcset"
    :alt="alt"
    class="LazyImage transition-opacity duration-700"
    :class="imageClasses"
    @load="handleLoad"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    srcset: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      isReady: false,
    }
  },
  computed: {
    imageClasses(): string {
      return this.isReady ? 'opacity-100' : 'opacity-0'
    },
  },
  methods: {
    handleLoad() {
      this.isReady = true
    },
  },
})
</script>
