<script lang="ts">
  import type { ResumeSchema } from "@kurone-kito/jsonresume-types"
  export let basics: ResumeSchema["basics"]
</script>

<div>
  <h1 class="name">{basics?.name}</h1>
  <p class="label">{basics?.label}</p>
  <p class="description">{basics?.summary}</p>
</div>

<style>
  .name {
    margin-bottom: 0;
    line-height: var(--line-height-tight);
  }

  .label {
    font-family: var(--font-serif);
  }

  .description {
    font-size: var(--font-100);
  }
</style>
