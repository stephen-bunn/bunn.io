<script lang="ts">
  export let title: string
</script>

<h2>{title}</h2>
<p><slot /></p>

<style>
  p {
    font-size: var(--font-100);
  }
</style>
