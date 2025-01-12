<svelte:options runes />

<script lang="ts">
  import '$lib/styles/index.scss'

  let { children } = $props()
</script>

<div>
  {@render children()}
</div>
