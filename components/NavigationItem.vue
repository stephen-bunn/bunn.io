<template>
  <NuxtLink
    class="flex items-center px-2 font-serif rounded-lg outline-none outline-dashed outline-offset-4 transition-colors focus:outline-gray-700"
    :class="{
      'text-white bg-gray-700 hover:bg-gray-700 focus:bg-gray-700': isActive,
      'bg-gray-300': !external,
      'hover:bg-gray-300': external,
    }"
    :to="to"
    v-bind="attributes"
    :tabindex="isActive ? -1 : 0"
  >
    <FeatherIcon v-if="icon" :name="icon" />
    <img
      v-if="iconSrc"
      class="mr-2"
      :src="iconSrc"
      :alt="iconAlt"
      width="24"
      height="24"
    />
    <span class="font-serif">
      {{ text }}
    </span>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: String,
  text: String,
  icon: {
    type: String,
    required: false,
  },
  iconSrc: {
    type: String,
    required: false,
  },
  iconAlt: {
    type: String,
    required: false,
  },
  attributes: {
    type: Object,
    required: false,
  },
  external: {
    type: Boolean,
    default: false,
  },
})

const { path } = useRoute()
const isActive = computed(
  () => props.to === path.split('/').slice(0, 2).join('/')
)
</script>
