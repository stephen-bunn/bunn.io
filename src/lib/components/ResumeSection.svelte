<svelte:options runes />

<script lang="ts">
  import type { Snippet } from 'svelte'

  let { name, children }: { name: string; children: Snippet } = $props()
</script>

<section>
  <h2>{name}</h2>
  <div>
    {@render children()}
  </div>
</section>
