<template>
  <ResumeSection heading="Publications" icon="bookmark">
    <div
      v-for="(publication, publicationIndex) in resume.publications"
      :key="publicationIndex"
      class="mb-2"
    >
      <div class="mb-2">
        <h3 class="font-serif text-2xl">
          <VLink :to="publication.website" target="_blank">
            {{ publication.name }}
          </VLink>
        </h3>
        <p>
          {{ publication.publisher }} &centerdot;
          <TimePeriod
            :start="publication.releaseDate"
            date-format="MMM dd yyyy"
          />
        </p>
      </div>
      <p>
        {{ truncate(publication.summary, { length: 240, separator: /,?\s+/ }) }}
      </p>
    </div>
  </ResumeSection>
</template>

<script setup>
import truncate from 'lodash.truncate'
const resume = useResume()
</script>
