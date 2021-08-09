<template>
  <nav class="flex place-content-between">
    <div class="InternalNavigation flex">
      <NavigationItem
        v-for="(item, itemIndex) in left"
        :key="`nav-left-${itemIndex}`"
        v-bind="item"
        :class="itemIndex === 0 ? 'rounded-br-lg' : 'rounded-b-lg'"
      />
    </div>
    <div class="ExternalNavigation flex">
      <NavigationItem
        v-for="(item, itemIndex) in right"
        :key="`nav-right-${itemIndex}`"
        v-bind="item"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import NavigationItem from '~/components/NavigationItem.vue'
import { NavigationItem as NavItem } from '~/plugins/navigation/types'

export default Vue.extend({
  components: {
    NavigationItem,
  },
  props: {
    left: {
      type: Array,
      default: () => [],
    } as PropOptions<NavItem[]>,
    right: {
      type: Array,
      default: () => [],
    } as PropOptions<NavItem[]>,
  },
})
</script>
