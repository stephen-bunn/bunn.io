<template>
  <NuxtLayout>
    <Navigation />
    <main class="flex flex-col gap-8 items-start lg:items-start lg:flex-row">
      <NuxtImg
        class="rounded-full w-48 self-center lg:self-start lg:w-1/3"
        :src="profileSrc"
        :alt="profileAlt"
      />
      <div class="lg:w-2/3">
        <div class="markdown mb-4">
          <ContentDoc :head="null" />
        </div>
        <NuxtImg width="128" :src="signatureSrc" :alt="signatureAlt" />
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup>
const resume = useResume()
useHead({ title: `${resume.value.basics.name} | About` })

const profileSrc = computed(() => resume.value.basics.picture)
const profileAlt = computed(() => `Portrait of ${resume.value.basics.name}`)
const signatureSrc = '/icons/initials.svg'
const signatureAlt = computed(() => `${resume.value.basics.name}'s Signature'`)
</script>

<style>
@import '~/assets/styles/markdown.scss';
</style>
