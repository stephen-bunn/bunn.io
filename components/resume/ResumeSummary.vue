<template>
  <ResumeSection heading="Summary" icon="star">
    <p class="mb-2">{{ resume.basics.summary }}</p>
    <p class="font-bold">
      Located in {{ resume.basics.location.city }},
      {{ resume.basics.location.region }}.
    </p>
  </ResumeSection>
</template>

<script setup>
const resume = useResume()
</script>
