<script>
  import { page } from "$app/stores"
</script>

<div>
  <h1>Error {$page.status}</h1>
  {#if $page.error?.message}
    <p>{$page.error.message}</p>
  {/if}
</div>

<style lang="scss">
  h1 {
    margin: 0;
    font-family: var(--font-mono);
    font-size: var(--font-500);
  }

  p {
    font-family: var(--font-mono);
    font-size: var(--font-300);
  }
</style>
