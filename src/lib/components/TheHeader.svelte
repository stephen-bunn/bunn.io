<script>
  import Initials from "$lib/components/Initials.svelte"
  import Navigation from "$lib/components/Navigation.svelte"
</script>

<header>
  <a href="/">
    <div>
      <Initials />
    </div>
  </a>
  <Navigation />
</header>

<style lang="scss">
  header {
    width: var(--navigation-width);
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    margin: var(--space-8x) 0 0 var(--space-8x);
  }

  a {
    display: inline-block;
    color: var(--color-text);
    width: 100%;
    padding: var(--space-4x) 0;
    outline: none;
    margin-bottom: var(--space-8x);

    &:focus-visible {
      outline: var(--space-1x) dashed var(--color-text);
      outline-offset: var(--space-2x);
    }
  }

  div {
    margin-right: var(--space-8x);
  }
</style>
