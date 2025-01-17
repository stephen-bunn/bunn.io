<svelte:options runes />

<script lang="ts">
  import dayjs from 'dayjs'
  import type { ResumeSchema } from '$lib/types/Resume'
  import { FULL_NAME } from '$lib/constants'
  import { truncate } from '$lib/utils/truncate'
  import { isValidEducation, isValidPublication, isValidWork } from '$lib/utils/resume'
  import RESUME_DATA from '$lib/data/resume.json'
  import ResumeSection from '$lib/components/ResumeSection.svelte'
  import ResumeItem from '$lib/components/ResumeItem.svelte'
  import Link from '$lib/components/Link.svelte'

  const resume: ResumeSchema = RESUME_DATA
  const work = $derived((resume?.work ?? []).filter(isValidWork))
  const education = $derived((resume?.education ?? []).filter(isValidEducation))
  const publications = $derived((resume?.publications ?? []).filter(isValidPublication))
</script>

<svelte:head>
  <title>{FULL_NAME} &ndash; Resume</title>
</svelte:head>

<main>
  {#if resume.basics}
    <h1>{resume.basics.name ?? FULL_NAME}</h1>
    {#if resume.basics.label}
      <p class="label">{resume.basics.label}</p>
    {/if}
    {#if resume.basics.summary}
      <p class="summary">{resume.basics.summary}</p>
    {/if}
    {#if resume.basics.location?.city && resume.basics.location?.region}
      <p class="location">
        Located in {resume.basics.location.city}, {resume.basics.location.region}
      </p>
    {/if}
  {/if}

  {#if work.length > 0}
    <ResumeSection name="Experience">
      {#each work as workItem}
        <ResumeItem name={workItem.position}>
          {#snippet detail()}
            <span class="dim">
              {#if workItem.name}
                {#if workItem.url}
                  <Link href={workItem.url} target="_blank">{workItem.name}</Link>
                {:else}
                  {workItem.name}
                {/if}
                {#if workItem.startDate}
                  <span class="delimiter">&bull;</span>
                  {dayjs(workItem.startDate).format('MMM YYYY')}
                  &dash;
                  {workItem.endDate ? dayjs(workItem.endDate).format('MMM YYYY') : 'Present'}
                {/if}
              {/if}
            </span>
          {/snippet}
          <p>{workItem.summary}</p>
          {#if workItem.highlights.length > 0}
            <ul>
              {#each workItem.highlights as highlight}
                <li>{highlight}</li>
              {/each}
            </ul>
          {/if}
        </ResumeItem>
      {/each}
    </ResumeSection>
  {/if}

  {#if education.length > 0}
    <ResumeSection name="Education">
      {#each education as educationItem}
        <ResumeItem name={educationItem.institution}>
          {#snippet detail()}
            {educationItem.studyType} of {educationItem.area}
            {#if educationItem.startDate}
              <span class="dim">
                <span class="delimiter">&bull;</span>
                {dayjs(educationItem.startDate).format('YYYY')}
                {#if educationItem.endDate}
                  &dash;
                  {educationItem.endDate ? dayjs(educationItem.endDate).format('YYYY') : 'Present'}
                {/if}
              </span>
            {/if}
          {/snippet}
        </ResumeItem>
      {/each}
    </ResumeSection>
  {/if}

  {#if publications.length > 0}
    <ResumeSection name="Publications">
      {#each publications as publication}
        <ResumeItem>
          {#snippet name()}
            {#if publication.url}
              <Link href={publication.url} target="_blank">
                {publication.name}
              </Link>
            {:else}
              {publication.name}
            {/if}
          {/snippet}
          {#snippet detail()}
            {publication.publisher}
            {#if publication.releaseDate}
              <span class="dim">
                <span class="delimiter">&bull;</span>
                {dayjs(publication.releaseDate).format('MMM D YYYY')}
              </span>
            {/if}
          {/snippet}
          <p>{truncate(publication.summary, { length: 480 })}</p>
        </ResumeItem>
      {/each}
    </ResumeSection>
  {/if}
</main>

<style lang="scss">
  .label {
    font-family: var(--font-serif);
  }

  .summary {
    margin-bottom: var(--space-8x);
  }

  .dim {
    color: var(--color-text-disabled);
  }

  .delimiter {
    margin: 0 calc(var(--space-1x) / 2);
  }

  // .skills {
  //   list-style: none;
  //   margin: 0;

  //   &-keyword {
  //     display: inline-block;
  //     padding: var(--space-halfx) var(--space-2x);
  //     margin-left: var(--space-2x);
  //     border-radius: var(--radius-hard);
  //     background-color: var(--color-text);
  //     color: var(--color-surface);
  //   }
  // }
</style>
