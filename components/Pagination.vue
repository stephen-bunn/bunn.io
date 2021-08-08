<template>
  <div class="Pagination flex">
    <button
      class="Pagination_Left p-4 bg-gray-50 rounded-l-md"
      :class="leftClasses"
      :disabled="isMinimum"
      @click="updatePage(-1)"
    >
      <Icon name="chevron-left" />
    </button>
    <div class="Pagination_Number p-4 bg-gray-50">
      <div class="font-bold text-lg w-8 outline-none text-center">
        {{ page }}
      </div>
    </div>
    <button
      class="Pagination_Right p-4 bg-gray-50 rounded-r-md"
      :class="rightClasses"
      :disabled="isMaximum"
      @click="updatePage(1)"
    >
      <Icon name="chevron-right" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  components: {
    Icon,
  },
  props: {
    value: {
      type: Number,
      required: true,
    },
    minimum: {
      type: Number,
      default: 1,
    },
    maximum: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      page: 0,
    }
  },
  computed: {
    isMinimum(): boolean {
      return this.page <= this.minimum
    },
    isMaximum(): boolean {
      if (!this.maximum) return false
      return this.page >= this.maximum
    },
    leftClasses(): string {
      return this.isMinimum ? 'text-gray-300' : 'text-black'
    },
    rightClasses(): string {
      return this.isMaximum ? 'text-gray-300' : 'text-black'
    },
  },
  mounted() {
    this.page = this.value
  },
  methods: {
    updatePage(delta: number) {
      const newPage = this.page + delta
      if (newPage < this.minimum) {
        return
      }

      this.page = newPage
      this.$emit('input', this.page)
    },
  },
})
</script>
