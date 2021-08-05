<template>
  <section class="ResumeSection mb-16">
    <div class="ResumeSection_Heading flex mb-8">
      <Icon v-if="icon" :name="icon" class="transform scale-150 self-center" />
      <h2 class="font-sans text-3xl uppercase font-bold ml-4">
        {{ heading }}
      </h2>
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
