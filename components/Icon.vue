<template>
  <div class="Icon" v-html="content"></div>
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
    content(): string | null {
      return this.$feathericons?.[this.name]?.toSvg()
    },
  },
})
</script>
