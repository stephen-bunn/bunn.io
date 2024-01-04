<script lang="ts">
  export let name: string | undefined = undefined
</script>

<div class="resume-item">
  <h3 class="name">
    <slot name="name">
      {#if name}{name}{/if}
    </slot>
  </h3>
  <p class="detail">
    <slot name="detail" />
  </p>
  <p class="content">
    <slot />
  </p>
</div>

<style>
  .resume-item {
    margin-bottom: var(--space-8x);
  }

  .name {
    font-weight: normal;
  }

  .detail {
    font-size: var(--font-050);
  }

  .content {
    font-size: var(--font-100);
  }
</style>
