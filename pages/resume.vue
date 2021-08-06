<template>
  <main>
    <ResumeHero :basics="resume.basics" class="mb-16" />
    <div class="ResumeContent flex flex-col lg:flex-row lg:space-x-16">
      <div class="ResumeContent_Left lg:w-3/5">
        <ResumeSection heading="About" icon="user">
          <ResumeSummary :basics="resume.basics" />
        </ResumeSection>
        <ResumeSection heading="Work" icon="briefcase">
          <ResumeWork
            v-for="(work, workIndex) in resume.work"
            :key="`resume-work-${workIndex}`"
            :work="work"
            class="my-8"
          />
        </ResumeSection>
        <ResumeSection heading="Publications" icon="bookmark">
          <ResumePublication
            v-for="(publication, publicationIndex) in resume.publications"
            :key="`publication-${publicationIndex}`"
            :publication="publication"
          />
        </ResumeSection>
        <ResumeSection heading="Awards" icon="award">
          <ResumeAward
            v-for="(award, awardIndex) in resume.awards"
            :key="`award-${awardIndex}`"
            :award="award"
          />
        </ResumeSection>
      </div>
      <div class="ResumeContent_Right lg:w-2/5">
        <ResumeSection heading="Contact" icon="at-sign">
          <ResumeContact :basics="resume.basics" />
        </ResumeSection>
        <ResumeSection heading="Languages" icon="globe">
          <ResumeLanguage
            v-for="language in resume.languages"
            :key="language.language"
            :language="language"
          />
        </ResumeSection>
        <ResumeSection heading="Education" icon="book-open">
          <ResumeEducation
            v-for="(education, educationIndex) in resume.education"
            :key="`education-${educationIndex}`"
            :education="education"
            class="mb-8"
          />
        </ResumeSection>
        <ResumeSection heading="Skills" icon="thumbs-up">
          <ResumeSkill
            v-for="(skill, skillIndex) in resume.skills"
            :key="`skill-${skillIndex}`"
            :skill="skill"
            class="mb-8"
          />
        </ResumeSection>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  ResumeSection,
  ResumeAward,
  ResumeContact,
  ResumePublication,
  ResumeSummary,
  ResumeLanguage,
  ResumeEducation,
  ResumeSkill,
  ResumeWork,
  ResumeHero,
} from '~/components/resume'
import { JsonResume } from '~/plugins/resume/types'

export default Vue.extend({
  components: {
    ResumeWork,
    ResumeSummary,
    ResumeSection,
    ResumeAward,
    ResumeContact,
    ResumePublication,
    ResumeEducation,
    ResumeSkill,
    ResumeLanguage,
    ResumeHero,
  },
  layout: 'default',
  async asyncData({ $resume }) {
    const resume = await $resume.get()
    return { resume }
  },
  data() {
    return {
      resume: null as JsonResume.Resume | null,
    }
  },
  mounted() {
    this.$anime({
      targets: '.ResumeHero',
      easing: 'easeOutExpo',
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 1500,
      direction: 'normal',
    })
    this.$anime({
      targets: '.ResumeContent',
      easing: 'easeOutExpo',
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 1500,
      direction: 'normal',
    })
  },
})
</script>
