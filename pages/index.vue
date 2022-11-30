<template>
  <NuxtLayout>
    <Navigation />
    <main class="flex flex-col gap-8 items-start lg:flex-row">
      <NuxtImg
        class="rounded-full w-48 self-center lg:self-start lg:w-1/3"
        :src="profilePictureSrc"
        :alt="profilePictureAlt"
      />
      <div class="lg:w-2/3">
        <div class="text-xl markdown mb-4">
          <ContentDoc :head="null" />
        </div>
        <NuxtImg width="128" src="/initials.svg" :alt="signatureAlt" />
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup>
const { displayName, profilePictureSrc, profilePictureAlt } = useConstants()
useHead({ title: `${displayName} | About` })

const signatureAlt = computed(() => `${displayName}'s Signature'`)
</script>

<style>
@import '~/assets/styles/markdown.scss';
</style>
