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
      <ul v-if="item.courses.length > 0" class="list-none">
        <li v-for="(course, courseIndex) in item.courses" :key="courseIndex">
          {{ course }}
        </li>
      </ul>
    </div>
  </ResumeSection>
</template>

<script setup>
const resume = useResume()
</script>
