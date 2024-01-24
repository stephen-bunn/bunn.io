<script lang="ts">
  import { onMount } from "svelte"
  import { SunIcon, MoonIcon } from "lucide-svelte"

  let isReady = false
  let isDarkMode = false
  onMount(() => {
    isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    isReady = true
  })

  const handleToggle = () => {
    if (!isReady) return

    const [htmlEl] = document.getElementsByTagName("html")
    if (!htmlEl) return

    htmlEl.classList.add(isDarkMode ? "light" : "dark")
    htmlEl.classList.remove(isDarkMode ? "dark" : "light")
    isDarkMode = !isDarkMode
  }
</script>

<button on:click={handleToggle}>
  {#if isDarkMode}
    <SunIcon />
  {:else}
    <MoonIcon />
  {/if}
</button>

<style lang="scss">
  @use "$lib/styles/mixins.scss" as *;

  button {
    @include dashed-outline;

    background: none;
    border: none;
    height: 100%;
    padding: var(--space-3x) 0;
    transition: color var(--duration-default);
    display: inline-block;
    color: var(--color-text-disabled);
    text-decoration: none;

    &:hover,
    &:active,
    &:focus-visible {
      color: var(--color-text);
      cursor: pointer;
    }
  }
</style>
