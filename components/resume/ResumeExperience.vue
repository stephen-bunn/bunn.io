<template>
  <ResumeSection heading="Experience" icon="briefcase">
    <div v-for="(work, workIndex) in resume.work" :key="workIndex" class="mb-4">
      <template v-if="!work.hidden">
        <div class="mb-4">
          <h3 class="font-serif text-2xl">{{ work.position }}</h3>
          <p>
            <VLink :to="work.website" target="_blank">
              {{ work.company }}
            </VLink>
            &centerdot;
            <TimePeriod :start="work.startDate" :end="work.endDate" />
          </p>
        </div>
        <p class="mb-2">{{ work.summary }}</p>
        <ul class="list-disc ml-4">
          <li
            v-for="(highlight, highlightIndex) in work.highlights"
            :key="highlightIndex"
          >
            {{ highlight }}
          </li>
        </ul>
      </template>
    </div>
  </ResumeSection>
</template>

<script setup>
const resume = useResume()
</script>
