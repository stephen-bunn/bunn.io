<template>
  <ResumeSection heading="Awards" icon="award">
    <div v-for="(award, awardIndex) in resume.awards" :key="awardIndex">
      <div class="mb-2">
        <h3 class="font-serif text-2xl">{{ award.title }}</h3>
        <p>
          {{ award.awarder }} &centerdot;
          <TimePeriod :start="award.date" date-format="MMM dd yyyy" />
        </p>
      </div>
      <p>{{ award.summary }}</p>
    </div>
  </ResumeSection>
</template>

<script setup>
const resume = useResume()
</script>
