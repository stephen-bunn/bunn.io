<template>
  <NuxtLayout>
    <Navigation />
    <main class="lg:pt-8">
      <BlogEntry v-for="entry in blogEntries" :key="entry._id" :value="entry" />
    </main>
  </NuxtLayout>
</template>

<script setup>
const blogEntries = await queryContent('blog').find()
</script>
