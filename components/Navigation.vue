<template>
  <NavigationDrawer v-if="showDrawer" />
  <NavigationHeader v-else />
</template>

<script setup>
const showDrawer = ref(true)

onMounted(() => {
  const { isMd } = useBreakpoint()
  showDrawer.value = !isMd.value
  watch(isMd, () => {
    showDrawer.value = !isMd.value
  })
})
</script>
