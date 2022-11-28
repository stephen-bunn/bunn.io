<template>
  <div>
    <NuxtLink :to="value._path">{{ value.title }}</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  value: Object,
})
</script>
