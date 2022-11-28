<template>
  <div class="grid gap-2 sm:grid-cols-2">
    <div class="font-serif">
      <h1 class="font-bold uppercase text-5xl lg:text-7xl">
        {{ resume.basics.name }}
      </h1>
      <p class="text-3xl">{{ resume.basics.label }}</p>
    </div>
    <div class="font-mono sm:text-right">
      <div v-for="(link, linkIndex) in links" :key="linkIndex">
        <StyledLink :to="link.to" target="_blank">{{ link.text }}</StyledLink>
      </div>
      <a
        href="/resume.pdf"
        :download="`${resume.basics.name} Resume`"
        class="text-blue-500 rounded-sm outline-dashed outline-2 outline-offset-2 outline-transparent transition-colors hover:text-blue-700 focus:text-blue-700 focus:outline-blue-700"
      >
        Download PDF
        <FeatherIcon name="download" :size="16" class="mb-1" />
      </a>
    </div>
  </div>
</template>

<script setup>
const resume = useResume()
const links = computed(() => {
  return [
    {
      to: `mailto:${resume.value.basics.email}`,
      text: resume.value.basics.email,
    },
  ]
})
</script>
