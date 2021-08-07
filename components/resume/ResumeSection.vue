<template>
  <section class="ResumeSection mb-8 lg:mb-16">
    <div class="ResumeSection_Heading flex mb-2 lg:mb-8">
      <Icon
        v-if="icon"
        :name="icon"
        class="transform self-center lg:scale-150"
      />
      <div
        class="font-serif font-bold text-2xl uppercase ml-2 lg:text-3xl lg:ml-4"
      >
        {{ heading }}
      </div>
    </div>
    <div class="ResumeSection_Content">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  components: {
    Icon,
  },
  props: {
    heading: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: null,
    },
  },
})
</script>
