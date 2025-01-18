<svelte:options runes />

<script lang="ts">
  import { onMount } from 'svelte'
  import { ImageIcon } from 'lucide-svelte'
  import { FULL_NAME } from '$lib/constants'
  import Skeleton from '$lib/components/Skeleton.svelte'

  let { size = '256px', circle = false }: { size?: string; circle?: boolean } = $props()

  const IMAGE_ENTRIES = {
    '1x': '/img/profile.jpeg',
    '2x': '/img/profile-2x.jpeg'
  }
  const IMAGE_SRC = IMAGE_ENTRIES['1x']
  const IMAGE_ALT = `${FULL_NAME}'s portrait`
  const IMAGE_SRCSET = Object.entries(IMAGE_ENTRIES)
    .map(([size, src]) => `${src} ${size}`)
    .join(', ')

  let imageLoaded = $state(new Promise<void>(() => {}))
  let containerStyle = $derived(`width: ${size}; height: ${size};`)
  let imageStyle = $derived(`width: ${size}; height: ${size};`)
  let skeletonProps = $derived({ width: size, height: size, radius: circle ? '50%' : '0px' })

  onMount(() => {
    const image = new Image()
    image.src = IMAGE_SRC
    image.onload = () => (imageLoaded = Promise.resolve())
    image.onerror = () => (imageLoaded = Promise.reject())
  })
</script>

<div style={containerStyle}>
  {#await imageLoaded}
    <Skeleton {...skeletonProps} />
  {:then}
    <img class:circle src={IMAGE_SRC} alt={IMAGE_ALT} srcset={IMAGE_SRCSET} style={imageStyle} />
  {:catch}
    <div class="error">
      <ImageIcon />
      <span>{IMAGE_ALT}</span>
    </div>
  {/await}
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle {
    border-radius: var(--radius-circle);
  }

  .error {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-mono);
    font-size: var(--font-050);
  }
</style>
