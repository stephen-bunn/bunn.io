<template>
  <input
    v-model="model"
    type="text"
    class="
      Search
      font-bold
      py-2
      px-4
      rounded-xl
      outline-none
      border-4
      focus:border-blue-500
    "
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
