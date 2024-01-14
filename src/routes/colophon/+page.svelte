<script lang="ts">
  import { formatDate } from "$lib/utils/format"
  import Link from "$lib/components/Link.svelte"
  import { inspirations, resources } from "$lib/content/colophon.json"

  export let data
</script>

<svelte:head>
  <title>Stephen &ndash; Colophon</title>
</svelte:head>

<div>
  <h1>Colophon</h1>
  <p>
    This <Link href="https://en.wikipedia.org/wiki/Colophon_(publishing)" target="_blank">
      <em>colophon</em>
    </Link> describes how I created this site, the technologies used, and who helped or inspired me.
  </p>
  <p>
    I had previously just used a single blog post to describe this, but I prefer the approach of
    keeping a top-level route available for easy reference.
  </p>
</div>

<div class="section">
  <h2>Resources</h2>
  <ul>
    {#each resources as resource}
      <li>
        <Link href={resource.url} target="_blank">{resource.text}</Link>
        {resource.description}
      </li>
    {/each}
  </ul>
</div>

<div class="section">
  <h2>Inspirations</h2>
  <ul>
    {#each inspirations as inspiration}
      <li>
        <Link href={inspiration.url} target="_blank">{inspiration.text}</Link>
        {inspiration.description}
      </li>
    {/each}
  </ul>
</div>

<div class="detail">
  This site was last built on
  <strong>{formatDate(data.currentDate, "MMM DD YYYY")}</strong>
  {#if data.github}
    via Github Action <Link small href={data.github.actionUrl} target="_blank">
      {data.github.actionId}
    </Link>.
  {:else}
    <em>in development</em>.
  {/if}
  <br class="detail-break" />
  Source code is viewable on GitHub at <Link
    small
    href="https://github.com/stephen-bunn/bunn.io"
    target="_blank">stephen-bunn/bunn.io</Link
  >.
</div>

<style lang="scss">
  @use "$lib/styles/mixins" as *;

  p {
    font-size: var(--font-300);
  }

  ul {
    list-style: none;
    margin-left: 0;
  }

  .section {
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
