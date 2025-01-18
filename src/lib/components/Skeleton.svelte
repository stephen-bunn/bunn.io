<script lang="ts">
  let {
    width = '100%',
    height = '100%',
    radius = '0px'
  }: { width?: string; height?: string; radius?: string } = $props()

  let skeletonStyle = $derived(`width: ${width}; height: ${height}; border-radius: ${radius};`)
</script>

<div style={skeletonStyle}></div>

<style lang="scss">
  @use '$lib/styles';

  div {
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--color-surface-muted);
    animation: fade-in-out var(--duration-long) infinite;
  }

  @keyframes fade-in-out {
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
