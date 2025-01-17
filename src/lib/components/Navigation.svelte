<svelte:options runes />

<script lang="ts">
  import NavigationItem from '$lib/components/NavigationItem.svelte'

  const navigationItems = [
    { text: 'About', href: '/' },
    { text: 'Resume', href: '/resume' }
  ]
</script>

<nav>
  <ul>
    {#each navigationItems as item}
      <li>
        <NavigationItem href={item.href}>
          {item.text}
        </NavigationItem>
      </li>
    {/each}
  </ul>
</nav>

<style>
  ul {
    list-style: none;
  }
</style>
