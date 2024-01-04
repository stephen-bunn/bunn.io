<script>
  import NavigationItem from "$lib/components/NavigationItem.svelte"
</script>

<nav>
  <ul>
    <li><NavigationItem href="/">About</NavigationItem></li>
    <li><NavigationItem href="/resume">Resume</NavigationItem></li>
    <li><NavigationItem href="/contact">Contact</NavigationItem></li>
    <li><NavigationItem href="/uses">Uses</NavigationItem></li>
    <li><NavigationItem href="https://st.omg.lol/now" target="_blank">Now</NavigationItem></li>
  </ul>
</nav>

<style>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
