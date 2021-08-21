<template>
  <div class="BlogToc">
    <div class="text-serif text-xs uppercase text-gray-500">
      Table of Contents
    </div>
    <hr class="my-2 border-gray-300" />
    <div
      v-for="tocItem in toc"
      :key="tocItem.id"
      class="BlogToc_Item my-1"
      :style="`margin-left: calc(${indent} * ${tocItem.depth - minTocDepth});`"
    >
      <Link :to="`#${tocItem.id}`" class="text-gray-500 hover:text-gray-700">
        {{ tocItem.text }}
      </Link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import Link from '~/components/Link.vue'

export interface TocItem {
  id: string
  text: string
  depth: number
}

export default Vue.extend({
  components: {
    Link,
  },
  props: {
    toc: {
      type: Array,
      required: true,
    } as PropOptions<TocItem[]>,
    indent: {
      type: String,
      default: '16px',
    },
  },
  computed: {
    minTocDepth(): number {
      if (this.toc.length === 0) return 0
      return Math.min(...this.toc.map((item) => item.depth))
    },
  },
  mounted() {
    this.$anime({
      targets: '.BlogToc_Item',
      easing: 'easeOutExpo',
      opacity: [0, 1],
      duration: 1500,
      direction: 'normal',
      delay: (_: Element, index: number) => 50 * index,
    })
  },
})
</script>
