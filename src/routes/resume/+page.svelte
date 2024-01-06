<script lang="ts">
  import dayjs from "dayjs"

  import resume from "$lib/content/resume.json"
  import Link from "$lib/components/Link.svelte"
  import ResumeSection from "$lib/components/ResumeSection.svelte"
  import ResumeItem from "$lib/components/ResumeItem.svelte"

  export const formatDate = (date: string, format: string) => dayjs(date).format(format)
  export const truncate = (value: string, length: number, end: string = "...") =>
    value.length < length ? value : value.substring(0, length) + end
</script>

<svelte:head>
  <title>Stephen Bunn &ndash; Resume</title>
</svelte:head>

<h1 class="name">{resume.basics.name}</h1>
<p class="label">{resume.basics.label}</p>
<p class="summary">
  {resume.basics.summary}
  <strong>
    Located in {resume.basics.location.city}, {resume.basics.location.region}
  </strong>
</p>

{#if resume.work}
  <ResumeSection name="Experience">
    {#each resume.work as work}
      <ResumeItem name={work.position}>
        <span slot="detail">
          {#if work.name}
            {#if work.url}
              <Link href={work.url} target="_blank">{work.name}</Link>
            {:else}
              {work.name}
            {/if}
            {#if work.startDate}
              <span class="delimiter">&bull;</span>
              {formatDate(work.startDate, "MMM YYYY")}
              &dash;
              {work.endDate ? formatDate(work.endDate, "MMM YYYY") : "Current"}
            {/if}
          {/if}
        </span>
        <p>{work.summary}</p>
        {#if work.highlights}
          <ul>
            {#each work.highlights as highlight}
              <li>{highlight}</li>
            {/each}
          </ul>
        {/if}
      </ResumeItem>
    {/each}
  </ResumeSection>
{/if}

{#if resume.education}
  <ResumeSection name="Education">
    {#each resume.education as education}
      <ResumeItem name={education.institution}>
        <span slot="detail">
          {education.studyType} of {education.area}
          {#if education.startDate}
            <span class="delimiter">&bull;</span>
            {formatDate(education.startDate, "YYYY")}
            {#if education.endDate}
              &dash;
              {education.endDate ? formatDate(education.endDate, "YYYY") : "Current"}
            {/if}
          {/if}
        </span>
      </ResumeItem>
    {/each}
  </ResumeSection>
{/if}

{#if resume.publications}
  <ResumeSection name="Publications">
    {#each resume.publications as publication}
      <ResumeItem>
        <span slot="name">
          <Link href={publication.url} target="_blank">{publication.name}</Link>
        </span>
        <span slot="detail">
          {publication.publisher}
          {#if publication.releaseDate}
            <span class="delimiter">&bull;</span>
            {formatDate(publication.releaseDate, "MMM D YYYY")}
          {/if}
        </span>
        <p>{truncate(publication.summary, 480)}</p>
      </ResumeItem>
    {/each}
  </ResumeSection>
{/if}

{#if resume.certificates}
  <ResumeSection name="Certificates">
    {#each resume.certificates as certificate}
      <ResumeItem>
        <span slot="name">
          <Link href={certificate.url} target="_blank">{certificate.name}</Link>
        </span>
        <span slot="detail">
          {certificate.issuer}
          <span class="delimiter">&bull;</span>
          {formatDate(certificate.date, "MMM D YYYY")}
        </span>
      </ResumeItem>
    {/each}
  </ResumeSection>
{/if}

{#if resume.awards}
  <ResumeSection name="Awards">
    {#each resume.awards as award}
      <ResumeItem name={award.title}>
        <span slot="detail">
          {award.awarder}
          <span class="delimiter">&bull;</span>
          {formatDate(award.date, "MMM D YYYY")}
        </span>
        <p>{award.summary}</p>
      </ResumeItem>
    {/each}
  </ResumeSection>
{/if}

{#if resume.skills}
  <ResumeSection name="Skills">
    {#each resume.skills as skill}
      <ResumeItem name={skill.name} dense>
        <ul class="skills">
          {#each skill.keywords as keyword}
            <li class="skills-keyword">{keyword}</li>
          {/each}
        </ul>
      </ResumeItem>
    {/each}
  </ResumeSection>
{/if}

<style lang="scss">
  .name {
    margin-bottom: 0;
    line-height: var(--line-height-tight);
  }

  .label {
    font-family: var(--font-serif);
  }

  .summary {
    margin-bottom: var(--space-8x);
  }

  .delimiter {
    margin: 0 var(--space-halfx);
  }

  .skills {
    list-style: none;
    margin: 0;

    &-keyword {
      display: inline-block;
      background-color: var(--color-text);
      color: var(--color-surface);
      padding: var(--space-halfx) var(--space-2x);
      border-radius: var(--radius-hard);
      margin-left: var(--space-2x);
    }
  }
</style>
