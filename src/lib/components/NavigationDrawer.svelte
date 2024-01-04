<script>
  import NavigationItem from "$lib/components/NavigationItem.svelte"

  const navigationItems = [
    { text: "About", href: "/" },
    { text: "Resume", href: "/resume" },
    { text: "Contact", href: "/contact" },
    { text: "Uses", href: "/uses" },
    { text: "Now", href: "https://st.omg.lol/now", target: "_blank" },
  ]
</script>

<nav>
  <ul>
    {#each navigationItems as item}
      <li>
        <NavigationItem href={item.href} target={item?.target || null}>
          {item.text}
        </NavigationItem>
      </li>
    {/each}
  </ul>
</nav>

<style>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
