<svelte:options runes />

<script>
  import { FULL_NAME } from '$lib/constants'
  import ProfileImage from '$lib/components/ProfileImage.svelte'
  import Link from '$lib/components/Link.svelte'
</script>

<svelte:head>
  <title>{FULL_NAME}</title>
</svelte:head>

<main>
  <div class="container">
    <ProfileImage circle />
    <div>
      <h1>{FULL_NAME}</h1>
      <p>
        I'm a software developer building <em>small</em> and <strong>intuitive</strong> solutions to
        try and better the health and happiness of others.
      </p>
    </div>
  </div>
  <p>
    If you are looking to talk about career opprotunities, please check out my
    <Link href="/resume">resume</Link> or feel free to <Link href="/contact">reach out to me</Link>.
  </p>
  <p><strong>Hope you have a great day!</strong></p>
</main>

<style lang="scss">
  @use '$lib/styles' as *;
  @use '$lib/styles/mixins' as *;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include lg {
      gap: var(--space-8x);
      margin-bottom: var(--space-4x);
      align-items: left;
      flex-direction: row;
    }
  }

  h1 {
    text-align: center;
    line-height: var(--line-height-tight);

    @include lg {
      text-align: left;
    }
  }

  p {
    font-size: var(--font-300);
    margin-bottom: var(--space-4x);
  }
</style>
