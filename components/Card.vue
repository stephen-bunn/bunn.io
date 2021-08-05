<template>
  <div class="Card bg-gray-50 shadow-xl rounded-lg p-8">
    <div v-if="title" class="Card_Title">{{ title }}</div>
    <div class="Card_Content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: null,
    },
  },
})
</script>
