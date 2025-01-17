<svelte:options runes />

<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import { writable } from 'svelte/store'
  import { fly, slide } from 'svelte/transition'
  import { XIcon, MenuIcon } from 'lucide-svelte'
  import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'
  import TinyGesture from 'tinygesture'

  import { SOCIALS } from '$lib/constants'
  import * as breakpoints from '$lib/styles/breakpoints'
  import Initials from '$lib/components/Initials.svelte'
  import Navigation from '$lib/components/Navigation.svelte'
  import NavigationItem from '$lib/components/NavigationItem.svelte'
  import ThemeToggle from '$lib/components/ThemeToggle.svelte'
  import GithubIcon from '$lib/components/icons/GithubIcon.svelte'
  import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte'
  import MastodonIcon from '$lib/components/icons/MastodonIcon.svelte'
  import LinktreeIcon from '$lib/components/icons/LinktreeIcon.svelte'

  const scrollLock = writable(false)

  let clientWidth: number | undefined = $state(undefined)
  let isReady = $state(false)
  let isDesktopWidth = $derived(!!clientWidth && clientWidth >= breakpoints.lg)
  let isMenuOpen = $state(false)

  let isHeaderVisible = $state(true)
  let headerObserver: IntersectionObserver
  let gesture: TinyGesture

  $effect(() => scrollLock.set(!isDesktopWidth && isMenuOpen))

  onMount(() => {
    isMenuOpen = isDesktopWidth

    const htmlEl = document.querySelector('html')
    const bodyEl = document.querySelector('body')
    scrollLock.subscribe((isLocked: boolean) => {
      if (!bodyEl) return
      isLocked ? disableBodyScroll(bodyEl) : enableBodyScroll(bodyEl)
    })

    const headerEl = document.querySelector('header')
    if (headerEl) {
      headerObserver = new IntersectionObserver(
        (entries) => {
          if (entries.length < 1) return
          const [entry] = entries
          isHeaderVisible = entry?.isIntersecting ?? false
        },
        { threshold: 0 }
      )
      headerObserver.observe(headerEl)
    }

    if (htmlEl) {
      gesture = new TinyGesture(htmlEl, {
        velocityThreshold: 5,
        threshold: (axis) =>
          Math.max(
            5,
            Math.floor(
              0.1 *
                (axis === 'x'
                  ? window.innerWidth || document.body.clientWidth
                  : window.innerHeight || document.body.clientHeight)
            )
          )
      })
      gesture.on('swiperight', () => (isMenuOpen = true))
      gesture.on('swipeleft', () => (isMenuOpen = isDesktopWidth ? true : false))
    }

    isReady = true
  })

  onDestroy(() => {
    if (headerObserver) headerObserver.disconnect()
  })

  const toggleMenuOpen = () => (isMenuOpen = isDesktopWidth ? true : !isMenuOpen)
  const handleMenuKeyUp = (event: KeyboardEvent) => {
    if (event.defaultPrevented) return
    if ([' ', 'Enter'].includes(event.key)) {
      toggleMenuOpen()
      event.preventDefault()
    }
    if (['Escape'].includes(event.key) && isMenuOpen) {
      toggleMenuOpen()
      event.preventDefault()
    }
  }
</script>

<header bind:clientWidth>
  {#if isReady && !isDesktopWidth}
    <button
      class="menu-button"
      onclick={toggleMenuOpen}
      transition:slide={{ duration: 200, axis: 'x' }}
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
      class="menu-container"
      transition:fly={{ duration: 200, x: 0 }}
      onclick={toggleMenuOpen}
      onkeyup={handleMenuKeyUp}
      class:menu-container-full={!isHeaderVisible}
      tabindex={isDesktopWidth ? -1 : 0}
      role="menu"
    >
      <aside class="menu">
        <Navigation />
      </aside>
    </div>
  {/if}
  <div class="actions-container">
    <ThemeToggle />
    <NavigationItem href={SOCIALS.github.url} target="_blank">
      <GithubIcon />
    </NavigationItem>
    <NavigationItem href={SOCIALS.linkedin.url} target="_blank">
      <LinkedinIcon />
    </NavigationItem>
    <NavigationItem href={SOCIALS.mastodon.url} target="_blank" rel="me">
      <MastodonIcon />
    </NavigationItem>
    <NavigationItem href={SOCIALS.linktree.url} target="_blank">
      <LinktreeIcon />
    </NavigationItem>
  </div>
</header>

<style lang="scss">
  @use '$lib/styles' as *;

  header {
    transition: background-color var(--duration-default);
    position: sticky;
    top: 0;
    padding: var(--space-4x);
    display: flex;
    background-color: var(--color-surface);

    @include lg {
      background-color: transparent;
      pointer-events: none;
    }
  }

  .menu-button {
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
    height: 48px;
    width: 100px;

    & a {
      display: inline-block;
      height: 100%;
      width: 100%;
      color: var(--color-text);
      pointer-events: auto;

      @include dashed-outline;
    }

    @include md {
      margin-left: var(--space-4x);
    }
  }

  .actions-container {
    display: flex;
    gap: var(--space-4x);
    margin-left: auto;
    align-items: baseline;
    pointer-events: auto;
  }

  .menu-container {
    @include dashed-outline;

    transition: all var(--duration-default);
    position: fixed;
    left: 0;
    // y padding of header + initials container height
    top: calc((var(--space-4x) * 2) + 48px);
    // 100vh - y padding of header - initials container height - y drawer container padding
    height: calc(100vh - (var(--space-4x) * 2) - 48px - var(--space-8x));
    margin-left: var(--space-8x);
    padding-top: var(--space-8x);
    width: calc((100% - (var(--space-8x) * 2)));
    background: var(--color-surface);
    background: linear-gradient(
      90deg,
      var(--color-surface) 0%,
      var(--color-surface) 30%,
      transparent 100%
    );
    pointer-events: auto;

    &-full {
      top: 0;
      height: 100vh;
    }

    @include lg {
      width: var(--navigation-width);
      background: transparent;
    }
  }

  .menu {
    width: var(--menu-width);
  }
</style>
