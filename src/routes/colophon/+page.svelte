<svelte:options runes />

<script lang="ts">
  import dayjs from 'dayjs'
  import { page } from '$app/state'
  import { FULL_NAME, REPOSITORY_NAME, REPOSITORY_URL } from '$lib/constants'
  import Link from '$lib/components/Link.svelte'
  import { resources } from '$lib/data/colophon.json'

  const { data } = page
</script>

<svelte:head>
  <title>{FULL_NAME} &ndash; Colophon</title>
</svelte:head>

<main>
  <h1>Colophon</h1>
  <p>
    This <Link href="https://en.wikipedia.org/wiki/Colophon_(publishing)" target="_blank">
      <em>colophon</em>
    </Link> describes how I created this site, the technologies used, and who helped or inspired me.
  </p>

  <section>
    <h2>Resources</h2>
    <ul>
      {#each resources as resource}
        <li>
          <Link href={resource.url} target="_blank">{resource.text}</Link>
          {resource.description}
        </li>
      {/each}
    </ul>
  </section>

  <div class="detail">
    This site was last built on
    <strong>{dayjs(data.currentDate).format('MMM DD YYYY')}</strong>
    {#if data.github}
      via Github Action <Link small href={data.github.actionUrl} target="_blank">
        {data.github.actionId}
      </Link>.
    {:else}
      <em>in development</em>.
    {/if}
    <br class="detail-break" />
    Source code is viewable on GitHub at <Link small href={REPOSITORY_URL} target="_blank"
      >{REPOSITORY_NAME}</Link
    >.
  </div>
</main>

<style lang="scss">
  @use '$lib/styles' as *;
  @use '$lib/styles/mixins' as *;

  p {
    font-size: var(--font-300);
  }

  ul {
    list-style: none;
    margin-left: 0;
  }

  section {
    margin-top: var(--space-8x);
  }

  .detail {
    margin-top: var(--space-8x);
    font-size: var(--font-050);
    color: var(--color-text-disabled);

    &-break {
      display: none;

      @include md {
        display: block;
      }
    }
  }
</style>
