<template>
  <input
    v-model="model"
    type="text"
    class="Search font-bold p-4 rounded-md bg-gray-50"
    placeholder="Search..."
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      model: null,
    }
  },
  watch: {
    model(payload: string) {
      this.$emit('input', payload)
    },
  },
})
</script>
