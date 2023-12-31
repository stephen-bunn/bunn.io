<script lang="ts">
  import { fly } from "svelte/transition"
  import Initials from "$lib/components/Initials.svelte"
  import NavigationDrawer from "$lib/components/NavigationDrawer.svelte"

  import { MenuIcon, XIcon } from "lucide-svelte"

  let isMenuOpen: boolean = false
  const toggleMenuOpen = () => (isMenuOpen = !isMenuOpen)
</script>

<header>
  <button class="menu-toggle" on:click={toggleMenuOpen}>
    {#if isMenuOpen}
      <XIcon />
    {:else}
      <MenuIcon />
    {/if}
  </button>
  {#if isMenuOpen}
    <div class="drawer-container" transition:fly={{ duration: 200, x: 0 }}>
      <NavigationDrawer />
    </div>
  {/if}
  <div class="initials-container">
    <a href="/">
      <Initials />
    </a>
  </div>
  <!-- <a href="/">
    <div>
      <Initials />
    </div>
  </a>
  <NavigationDrawer /> -->
</header>

<style lang="scss">
  @use "$lib/styles/mixins.scss" as *;

  header {
    padding: var(--space-4x);
    display: flex;
  }

  .menu-toggle {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    background-color: transparent;
    border: none;
    padding: var(--space-3x);
    margin: 0 var(--space-3x);
    cursor: pointer;

    @include dashed-outline;
  }

  .initials-container {
    margin-left: var(--space-4x);
    height: 48px;
    width: 100px;

    & a {
      display: inline-block;
      height: 100%;
      width: 100%;
      color: var(--color-text);

      @include dashed-outline;
    }
  }

  .drawer-container {
    position: absolute;
    left: 0;
    top: calc(24px + var(--space-8x) * 2);
    height: 100vh;
    padding-left: var(--space-8x);
    width: var(--navigation-width);
    background: var(--color-surface);
    background: linear-gradient(
      90deg,
      var(--color-surface) 0%,
      var(--color-surface) 50%,
      transparent 100%
    );
  }

  // header {
  //   width: var(--navigation-width);
  //   box-sizing: border-box;
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   margin: var(--space-8x) 0 0 var(--space-8x);
  // }

  // a {
  //   display: inline-block;
  //   color: var(--color-text);
  //   width: 100%;
  //   padding: var(--space-4x) 0;
  //   outline: none;
  //   margin-bottom: var(--space-8x);

  //   &:focus-visible {
  //     outline: var(--space-1x) dashed var(--color-text);
  //     outline-offset: var(--space-2x);
  //   }
  // }

  // div {
  //   margin-right: var(--space-8x);
  // }
</style>
