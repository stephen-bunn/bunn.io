<script>
  import "$lib/styles/content.scss"
  import Link from "$lib/components/Link.svelte"
</script>

<svelte:head>
  <title>Stephen Bunn &ndash; About</title>
</svelte:head>

<div class="container">
  <img
    src="https://gravatar.com/avatar/02651d15ffdc3bb8e7cb4d20b33b7f1c?s=512"
    alt="Stephen Bunn Portrait"
  />
  <div>
    <h1>Stephen Bunn</h1>
    <p>
      I'm a software developer building <em>small</em> and <strong>intuitive</strong> solutions to try
      and better the health and happiness of others.
    </p>
  </div>
</div>
<p>
  Occasionally I <Link href="https://weblog.lol/st">write</Link> about things I'm exploring or the products
  I'm using. These are mostly just opinion pieces that act as notes while I try to figure out what the
  heck is going on.
</p>
<p>
  If you are looking to talk about career opprotunities, please check out my
  <Link href="/resume">resume</Link> or <Link href="/contact">reach out to me</Link>.
</p>
<p><strong>Hope you have a great day!</strong></p>

<style lang="scss">
  @use "$lib/styles/mixins.scss" as *;

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

  img {
    width: 256px;
    height: 256px;
    border-radius: 50%;
  }

  h1 {
    text-align: center;

    @include lg {
      text-align: left;
    }
  }
</style>
