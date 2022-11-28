<template>
  <NuxtLayout>
    <Navigation />
    <div class="mb-12">
      <ResumeHero class="mb-8" />
      <div class="flex flex-col gap-8 w-full lg:flex-row lg:flex-row-reverse">
        <ResumeSummary v-if="!isDesktop" />
        <div class="flex flex-col gap-8 lg:w-2/3">
          <ResumeExperience />
        </div>
        <div class="flex flex-col gap-8 lg:w-1/3">
          <ResumeSummary v-if="isDesktop" />
          <ResumeEducation />
          <ResumeSkills />
          <ResumePublications />
          <ResumeAwards />
        </div>
      </div>
      <ScrollFab v-if="isBelowFold" />
    </div>
  </NuxtLayout>
</template>

<script setup>
const resume = useResume()
const { isBelowFold } = useScrollDepth()
useHead({ title: `${resume.value.basics.name} | Resume` })

const isDesktop = ref(true)

onMounted(() => {
  const { isLg } = useBreakpoint()
  isDesktop.value = isLg.value
  watch(isLg, () => (isDesktop.value = isLg.value))
})
</script>
