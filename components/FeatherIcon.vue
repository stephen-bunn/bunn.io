<template>
  <span v-html="iconSvg" />
</template>

<script setup>
import feather from 'feather-icons'

const props = defineProps({
  name: {
    type: String,
    required: true,
    validator: name =>
      Object.prototype.hasOwnProperty.call(feather.icons, name),
  },
  size: {
    type: Number,
    default: 24,
    validator: value => value > 0,
  },
  class: {
    type: String,
    default: '',
  },
})

const iconSvg = computed(() =>
  feather.icons[props.name].toSvg({
    class: ['inline-block', props.class].join(' '),
    width: props.size,
    height: props.size,
  })
)
</script>
