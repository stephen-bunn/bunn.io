<script lang="ts">
  export let name: string | undefined = undefined
  export let dense: boolean = false
</script>

<div class:dense>
  <h3>
    <slot name="name">
      {#if name}{name}{/if}
    </slot>
  </h3>
  <p class="detail">
    <slot name="detail" />
  </p>
  <p><slot /></p>
</div>

<style lang="scss">
  div {
    margin-bottom: var(--space-8x);

    &.dense {
      margin-bottom: var(--space-4x);
    }
  }

  h3 {
    font-weight: normal;
  }

  .detail {
    font-size: var(--font-050);
  }
</style>
