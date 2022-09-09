<template>
  <div class="mb-12">
    <ResumeHero class="resume-hero mb-8 opacity-0" />
    <div
      class="resume-content flex flex-col gap-8 opacity-0 w-full lg:flex-row lg:flex-row-reverse"
    >
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
</template>

<script setup>
import anime from 'animejs'
definePageMeta({ layout: 'dense' })

const resume = useResume()
const { isBelowFold } = useScrollDepth()
useHead({ title: `${resume.value.basics.name} Resume` })

const isDesktop = ref(true)

onMounted(() => {
  const { isLg } = useBreakpoint()
  isDesktop.value = isLg.value
  watch(isLg, () => (isDesktop.value = isLg.value))

  anime({
    targets: '.resume-hero',
    easing: 'easeOutExpo',
    translateY: [-100, 0],
    opacity: [0, 1],
    duration: 1500,
    direction: 'normal',
  })

  anime({
    targets: '.resume-content',
    easing: 'easeOutExpo',
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 1500,
    direction: 'normal',
  })
})
</script>
