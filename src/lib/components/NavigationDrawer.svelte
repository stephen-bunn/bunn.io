<script>
  import NavigationItem from "$lib/components/NavigationItem.svelte"

  const navigationItems = [
    { text: "About", href: "/" },
    { text: "Resume", href: "/resume" },
    { text: "Contact", href: "/contact" },
    { text: "Uses", href: "/uses" },
    { text: "Blog", href: "https://st.weblog.lol/", target: "_blank" },
  ]
</script>

<nav>
  <ul>
    {#each navigationItems as item}
      <li>
        <NavigationItem href={item.href} target={item.target}>
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
