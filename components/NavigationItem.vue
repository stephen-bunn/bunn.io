<template>
  <Link
    class="
      NavigationItem
      flex
      px-4
      py-5
      space-x-2
      transition-colors
      duration-700
      hover:text-black
    "
    :class="navitemClasses"
    :to="to"
  >
    <Icon v-if="icon" :name="icon" />
    <span v-if="label" class="font-bold font-serif uppercase self-center">
      {{ label }}
    </span>
  </Link>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'
import Link from '~/components/Link.vue'

export default Vue.extend({
  components: {
    Icon,
    Link,
  },
  props: {
    to: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
  },
  computed: {
    isActive(): boolean {
      return this.$route.path.toLowerCase() === this.to
    },
    navitemClasses(): Object {
      return {
        'bg-gray-300': this.isActive,
        'bg-transparent text-gray-400': !this.isActive,
      }
    },
  },
})
</script>
