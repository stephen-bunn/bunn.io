<template>
  <div class="Ordering flex min-h-16">
    <div
      class="
        font-serif font-bold
        text-lg
        px-2
        py-4
        self-center
        md:p-4
        uppercase
        rounded-l-md
        bg-gray-50
      "
    >
      {{ text || 'Sort' }}
    </div>
    <button
      class="px-2 py-4 md:py-4 md:pr-4 rounded-r-md bg-gray-50"
      @click="handleToggle"
    >
      <Icon :name="iconName" />
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
    text: {
      type: String,
      default: null,
    },
    value: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      model: true,
    }
  },
  computed: {
    iconName(): string {
      return this.model ? 'arrow-down' : 'arrow-up'
    },
  },
  mounted() {
    this.model = this.value
  },
  methods: {
    handleToggle() {
      this.model = !this.model
      this.$emit('input', this.model)
    },
  },
})
</script>
