<svelte:options runes />

<script lang="ts">
  import NAVIGATION from '$lib/data/navigation.json'
  import NavigationItem from '$lib/components/NavigationItem.svelte'
</script>

<nav>
  <ul>
    {#each NAVIGATION as item}
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
