<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="svg" class="Icon" v-html="svg"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    svg(): string | null {
      return this.$feathericons?.[this.name]?.toSvg()
    },
  },
})
</script>
