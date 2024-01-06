<script lang="ts">
  import { onDestroy, onMount } from "svelte"
  import { writable } from "svelte/store"
  import { fly, slide } from "svelte/transition"
  import { MenuIcon, XIcon } from "lucide-svelte"
  import TinyGesture from "tinygesture"
  import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock"

  import NavigationItem from "$lib/components/NavigationItem.svelte"
  import Initials from "$lib/components/Initials.svelte"
  import NavigationDrawer from "$lib/components/NavigationDrawer.svelte"
  import breakpoints from "$lib/utils/breakpoints"
  import MastodonIcon from "$lib/components/icons/MastodonIcon.svelte"
  import GithubIcon from "$lib/components/icons/GithubIcon.svelte"
  import LinkedinIcon from "$lib/components/icons/LinkedinIcon.svelte"

  const scrollLock = writable(false)

  let gesture: TinyGesture
  let isReady: boolean = false
  let clientWidth: number
  $: isDesktopWidth = clientWidth >= breakpoints.lg
  $: isMenuOpen = isDesktopWidth
  $: scrollLock.set(!isDesktopWidth && isMenuOpen)

  let headerObserver: IntersectionObserver
  let isHeaderVisible: boolean = true

  onMount(() => {
    const htmlEl = document.querySelector("html")
    const bodyEl = document.querySelector("body")
    scrollLock.subscribe((isLocked: boolean) => {
      if (!bodyEl) return
      isLocked ? disableBodyScroll(bodyEl) : enableBodyScroll(bodyEl)
    })

    const headerEl = document.querySelector("header")
    if (headerEl) {
      headerObserver = new IntersectionObserver(
        entries => {
          if (entries.length < 1) return
          const [entry] = entries
          isHeaderVisible = entry.isIntersecting
        },
        { threshold: 0 }
      )
      headerObserver.observe(headerEl)
    }

    if (htmlEl) {
      gesture = new TinyGesture(htmlEl, {
        threshold: (type, _) =>
          Math.max(
            5,
            Math.floor(
              0.1 *
                (type === "x"
                  ? window.innerWidth || document.body.clientWidth
                  : window.innerHeight || document.body.clientHeight)
            )
          ),
        velocityThreshold: 5,
      })
      gesture.on("swiperight", () => (isMenuOpen = true))
      gesture.on("swipeleft", () => (isMenuOpen = false))
    }

    isReady = true
  })

  onDestroy(() => {
    if (headerObserver) headerObserver.disconnect()
  })

  const toggleMenuOpen = () => (isMenuOpen = isDesktopWidth ? true : !isMenuOpen)
  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.defaultPrevented) return
    if ([" ", "Enter"].includes(event.key)) {
      toggleMenuOpen()
      event.preventDefault()
    }
  }
</script>

<header bind:clientWidth>
  {#if isReady && !isDesktopWidth}
    <button
      class="menu-toggle"
      on:click={toggleMenuOpen}
      transition:slide={{ duration: 200, axis: "x" }}
    >
      {#if isMenuOpen}
        <XIcon />
      {:else}
        <MenuIcon />
      {/if}
    </button>
  {/if}
  <div class="initials-container">
    <a href="/">
      <Initials />
    </a>
  </div>
  {#if isMenuOpen}
    <div
      class="drawer-container"
      transition:fly={{ duration: 200, x: 0 }}
      on:click={toggleMenuOpen}
      on:keyup={handleKeyUp}
      class:drawer-container-full={!isHeaderVisible}
      tabindex={isDesktopWidth ? -1 : 0}
      role="menu"
    >
      <aside class="drawer">
        <NavigationDrawer />
      </aside>
    </div>
  {/if}
  <div class="right">
    <NavigationItem href="https://github.com/stephen-bunn" target="_blank">
      <GithubIcon />
    </NavigationItem>
    <NavigationItem href="https://linkedin.com/in/stephen-bunn" target="_blank">
      <LinkedinIcon />
    </NavigationItem>
    <NavigationItem href="https://social.lol/@st" target="_blank" rel="me">
      <MastodonIcon />
    </NavigationItem>
  </div>
</header>

<style lang="scss">
  @use "$lib/styles/mixins.scss" as *;

  header {
    padding: var(--space-4x);
    display: flex;
  }

  .right {
    display: flex;
    gap: var(--space-4x);
    margin-left: auto;
    align-items: center;
  }

  .menu-toggle {
    height: 100%;
    color: var(--color-text);
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
    transition: all var(--transition-duration-default);
    position: fixed;
    left: 0;
    // y padding of header + initials container height
    top: calc((var(--space-4x) * 2) + 48px);
    // 100vh - y padding of header - initials container height - y drawer container padding
    height: calc(100vh - (var(--space-4x) * 2) - 48px - var(--space-8x));
    padding: var(--space-8x) 0 0 var(--space-8x);
    width: calc((100% - (var(--space-8x) * 2)));
    background: var(--color-surface);
    background: linear-gradient(
      90deg,
      var(--color-surface) 0%,
      var(--color-surface) 30%,
      rgba(245, 245, 245, 0.5) 70%,
      transparent 100%
    );

    &-full {
      top: 0;
      height: 100vh;
    }

    @include dashed-outline;
    @include lg {
      width: var(--navigation-width);
      background: transparent;
    }
  }

  .drawer {
    width: 200px;
  }
</style>
