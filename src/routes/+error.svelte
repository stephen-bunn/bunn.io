<script lang="ts">
  import { page } from '$app/state'
</script>

<div>
  <h1>{page.status}</h1>
  {#if page.error?.message}
    <p>{page.error.message}</p>
  {/if}
</div>

<style lang="scss">
  div {
    align-self: center;
  }

  p {
    font-family: var(--font-mono);
  }
</style>
