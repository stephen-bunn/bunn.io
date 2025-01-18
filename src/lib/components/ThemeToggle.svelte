<svelte:options runes />

<script lang="ts">
  import { onMount } from 'svelte'
  import { SunIcon, MoonIcon } from 'lucide-svelte'

  const storageKey = 'theme'
  const lightClass = 'light'
  const darkClass = 'dark'

  let isReady = $state(false)
  let isDarkMode = $state(false)

  onMount(() => {
    const storedThemeClass = localStorage.getItem(storageKey)
    isDarkMode = storedThemeClass
      ? storedThemeClass === darkClass
      : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    setThemeClass(isDarkMode ? darkClass : lightClass, isDarkMode ? lightClass : darkClass)
    isReady = true
  })

  const setThemeClass = (newClass: string, oldClass?: string) => {
    const [htmlEl] = document.getElementsByTagName('html')
    if (!htmlEl) return

    htmlEl.classList.add(newClass)
    localStorage.setItem(storageKey, newClass)
    if (oldClass) htmlEl.classList.remove(oldClass)
  }

  const handleToggleTheme = () => {
    if (!isReady) return
    setThemeClass(isDarkMode ? lightClass : darkClass, isDarkMode ? darkClass : lightClass)
    isDarkMode = !isDarkMode
  }
</script>

<button onclick={handleToggleTheme}>
  {#if isDarkMode}
    <SunIcon />
  {:else}
    <MoonIcon />
  {/if}
</button>

<style lang="scss">
  @use '$lib/styles' as *;

  button {
    @include dashed-outline;

    background: none;
    border: none;
    height: 100%;
    padding: var(--space-3x) 0;
    transition: color var(--duration-default);
    display: inline-block;
    color: var(--color-text-muted);
    text-decoration: none;

    &:hover,
    &:active,
    &:focus-visible {
      color: var(--color-text);
      cursor: pointer;
    }
  }
</style>
