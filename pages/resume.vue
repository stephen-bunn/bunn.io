<template>
  <main>
    <div class="ResumeHero flex flex-col place-items-center mb-16">
      <img
        class="w-48 h-48 rounded-full"
        :src="resume.basics.picture"
        :alt="resume.basics.name"
        :srcset="pictureSrcset"
      />
      <div class="font-serif text-2xl text-center">
        {{ resume.basics.label }}
      </div>
      <h1 class="font-serif font-bold text-8xl text-center uppercase">
        {{ resume.basics.name }}
      </h1>
    </div>
    <div class="ResumeContent flex flex-col md:flex-row space-x-16">
      <div class="ResumeContent_Left flex-1">
        <ResumeSection heading="About" icon="user">
          <p>{{ resume.basics.summary }}</p>
        </ResumeSection>
        <ResumeSection heading="Work" icon="briefcase">
          <ResumeWork
            v-for="(work, workIndex) in resume.work"
            :key="`resume-work-${workIndex}`"
            :work="work"
            class="ResumeWork my-8"
          >
            {{ work.company }}
          </ResumeWork>
        </ResumeSection>
        <ResumeSection heading="Publications" icon="bookmark">
          <div
            v-for="(publication, publicationIndex) in resume.publications"
            :key="`publication-${publicationIndex}`"
          >
            <a
              class="font-serif text-2xl text-blue-600"
              target="_blank"
              :href="publication.website"
            >
              {{ publication.name }}
            </a>
            <div class="mb-4">Published by {{ publication.publisher }}</div>
            <div>
              {{ publication.summary }}
            </div>
          </div>
        </ResumeSection>
        <ResumeSection heading="Awards" icon="award">
          <div
            v-for="(award, awardIndex) in resume.awards"
            :key="`award-${awardIndex}`"
          >
            <div class="font-serif text-2xl">{{ award.title }}</div>
            <div class="mb-4">By {{ award.awarder }}</div>
            <div>{{ award.summary }}</div>
          </div>
        </ResumeSection>
      </div>
      <div class="ResumeContent_Right flex-1">
        <ResumeSection heading="Contact" icon="at-sign">
          <div class="font-bold">
            Feel free to send me an email if you are intersted in recruitment.
          </div>
          <div class="mb-4">
            I'm available most daytime hours (
            <a class="text-blue-600" href="https://time.is/EDT" target="_blank">
              EDT
            </a>
            ) and am open to most all opportunities.
          </div>
          <div class="flex">
            <a
              :href="`mailto:${resume.basics.email}`"
              class="flex font-sans text-xl text-blue-600"
            >
              <Icon name="mail" class="self-center mr-2" />
              {{ resume.basics.email }}
            </a>
          </div>
        </ResumeSection>
        <ResumeSection heading="Languages" icon="globe">
          <div
            v-for="language in resume.languages"
            :key="language.language"
            class="flex"
          >
            <h3 class="font-serif text-2xl">
              {{ language.language }}
            </h3>
            <Chip class="self-center ml-2">{{ language.fluency }}</Chip>
          </div>
        </ResumeSection>
        <ResumeSection heading="Education" icon="book-open">
          <div
            v-for="(education, educationIndex) in resume.education"
            :key="`education-${educationIndex}`"
            class="mb-8"
          >
            <div class="font-serif text-2xl">{{ education.institution }}</div>
            <div class="mb-4">
              {{ education.studyType }} of {{ education.area }}
            </div>
            <div
              v-for="(course, courseIndex) in education.courses"
              :key="`education-${educationIndex}-${courseIndex}`"
              class="ml-8 mb-2"
            >
              {{ course }}
            </div>
          </div>
        </ResumeSection>
        <ResumeSection heading="Skills" icon="thumbs-up">
          <div
            v-for="(skill, skillIndex) in resume.skills"
            :key="`skill-${skillIndex}`"
            class="mb-8"
          >
            <div class="font-serif text-xl">{{ skill.name }}</div>
            <Chip
              v-for="(keyword, keywordIndex) in skill.keywords"
              :key="`skill-${skillIndex}-${keywordIndex}`"
              class="mr-1"
            >
              {{ keyword }}
            </Chip>
          </div>
        </ResumeSection>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import ResumeWork from '~/components/resume/ResumeWork.vue'
import ResumeSection from '~/components/resume/ResumeSection.vue'
import Chip from '~/components/Chip.vue'
import { JsonResume } from '~/types/JsonResume'

export default Vue.extend({
  components: {
    Chip,
    ResumeWork,
    ResumeSection,
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
  computed: {
    pictureSrcset(): string {
      const resume = this.resume
      if (!resume) {
        return ''
      }

      return Object.entries({
        '1x': 256,
        '2x': 512,
      })
        .map(([descriptor, size]) => {
          return `${resume.basics.picture}?s=${size} ${descriptor}`
        })
        .join(', ')
    },
  },
  mounted() {
    this.$anime({
      targets: ['.ResumeHero', '.ResumeSection'],
      easing: 'easeOutExpo',
      // translateX: [-100, 0],
      opacity: [0, 1],
      duration: 1500,
      delay: (_: Element, index: number) => {
        return 100 * index
      },
      direction: 'normal',
    })
  },
})
</script>
