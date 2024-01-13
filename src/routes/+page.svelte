<script>
  import Link from "$lib/components/Link.svelte"
</script>

<svelte:head>
  <title>Stephen &ndash; About</title>
</svelte:head>

<div class="profile-container">
  <img src="/img/profile.png" alt="Stephen Bunn Portrait" />
  <div>
    <h1>Stephen Bunn</h1>
    <p>
      I'm a software developer building <em>small</em> and <strong>intuitive</strong> solutions to try
      and better the health and happiness of others.
    </p>
  </div>
</div>
<p>
  Occasionally I <Link href="/p">write</Link> about things I'm exploring or the products I'm using. These
  are just small opinion peices that highlight topics I think are interesting or worth discussing.
</p>
<p>
  If you are looking to talk about career opprotunities, please check out my
  <Link href="/resume">resume</Link> or feel free to <Link href="/contact">reach out to me</Link>.
</p>
<p><strong>Hope you have a great day!</strong></p>

<style lang="scss">
  @use "$lib/styles/mixins.scss" as *;

  .profile-container {
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

  img {
    width: 256px;
    height: 256px;
    border-radius: 50%;
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
