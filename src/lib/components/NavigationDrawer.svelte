<script>
  import NavigationItem from "$lib/components/NavigationItem.svelte"
</script>

<nav>
  <ul>
    <li><NavigationItem href="/about">About</NavigationItem></li>
    <li><NavigationItem href="/resume">Resume</NavigationItem></li>
    <li><NavigationItem href="https://st.omg.lol/now" external>Now</NavigationItem></li>
    <li><NavigationItem href="/uses">Uses</NavigationItem></li>
  </ul>
</nav>

<style>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
