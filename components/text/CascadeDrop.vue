<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="CascadeDrop">
    <span
      v-for="(char, index) in characters"
      :key="`CascadeDrop_Char-${index}`"
      class="CascadeDrop_Char"
      v-html="char"
    ></span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    delay: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 1500,
    },
    offset: {
      type: Number,
      default: 50,
    },
  },
  data() {
    const animationTimeout: null | number = null
    return {
      animationTimeout,
    }
  },
  computed: {
    characters(): string[] {
      return (this.$slots?.default?.[0].text || '')
        .trim()
        .split('')
        .map((char: string) => (/\s+/.test(char) ? '&nbsp;' : char))
    },
  },
  mounted() {
    this.animationTimeout = setTimeout(() => {
      this.$anime({
        targets: '.CascadeDrop_Char',
        easing: 'easeOutExpo',
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: this.duration,
        delay: (_: Element, index: number) => {
          return this.offset * index
        },
        direction: 'normal',
        complete: () => {
          this.$emit('complete')
        },
      })
    }, this.delay)
  },
  beforeDestroy() {
    if (this.animationTimeout) clearTimeout(this.animationTimeout)
  },
})
</script>

<style>
.CascadeDrop_Char {
  opacity: 0;
  display: inline-block;
}
</style>
