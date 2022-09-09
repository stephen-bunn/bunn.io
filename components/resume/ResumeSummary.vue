<template>
  <ResumeSection heading="Summary" icon="star">
    <p class="mb-2">{{ resume.basics.summary }}</p>
    <p class="font-bold">
      {{ resume.basics.name }} is currently located in
      {{ resume.basics.location.city }}, {{ resume.basics.location.region }} and
      is available during
      <StyledLink to="https://time.is/ET" target="_blank">EST</StyledLink>
      daytime hours.
    </p>
  </ResumeSection>
</template>

<script setup>
const resume = useResume()
</script>
