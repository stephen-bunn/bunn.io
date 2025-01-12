<script lang="ts">
  let {
    width = '100%',
    height = '100%',
    radius = '0px'
  }: { width?: string; height?: string; radius?: string } = $props()

  let skeletonStyle = $derived(`width: ${width}; height: ${height}; border-radius: ${radius};`)
</script>

<div class="Skeleton" style={skeletonStyle}></div>

<style lang="scss">
  @use '$lib/styles';

  .Skeleton {
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--color-surface-disabled);
    animation: skeleton-pulse var(--duration-long) infinite;
  }

  @keyframes skeleton-pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
</style>
