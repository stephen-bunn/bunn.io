<template>
  <NuxtLayout>
    <Navigation />
    <h1>Hello World</h1>
  </NuxtLayout>
</template>

<script setup>
const resume = useResume()
useHead({ title: `${resume.value.basics.name} | About` })
</script>
