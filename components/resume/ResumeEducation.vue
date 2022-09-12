<template>
  <ResumeSection heading="Education" icon="book-open">
    <div
      v-for="(item, itemIndex) in resume.education"
      :key="itemIndex"
      class="mb-4"
    >
      <h3 class="mb-2">
        <div class="font-serif text-2xl">{{ item.institution }}</div>
        {{ item.studyType }} &centerdot;
        <TimePeriod
          :start="item.startDate"
          :end="item.endDate"
          date-format="yyyy"
        />
      </h3>
    </div>
  </ResumeSection>
</template>

<script setup>
const resume = useResume()
</script>
