<template>
  <ResumeSection heading="Technical Skills" icon="thumbs-up">
    <div
      v-for="(skill, skillIndex) in resume.skills"
      :key="skillIndex"
      class="mb-2"
    >
      <h3 class="font-serif text-xl">{{ skill.name }}</h3>
      <Chip
        v-for="(keyword, keywordIndex) in skill.keywords"
        :key="keywordIndex"
      >
        {{ keyword }}
      </Chip>
    </div>
  </ResumeSection>
</template>

<script setup>
const resume = useResume()
</script>
