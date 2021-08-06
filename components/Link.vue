<template>
  <component
    :is="componentTag"
    v-bind="componentAttributes"
    class="
      Link
      text-blue-500
      hover:text-blue-700
      transition-colors
      duration-500
    "
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  computed: {
    isExternal(): boolean {
      return typeof this.to === 'string' && this.to.search(/()^\/|^#/g) === -1
    },
    isNative(): boolean {
      return this.isExternal || !this.$router
    },
    componentTag(): string {
      const routerTag = this.$nuxt ? 'NuxtLink' : 'RouterLink'
      return this.isNative ? 'a' : routerTag
    },
    componentAttributes(): Object {
      return {
        [this.isNative ? 'href' : 'to']: this.to,
      }
    },
  },
})
</script>
