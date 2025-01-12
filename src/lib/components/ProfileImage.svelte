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
  let imageClass = $derived.by(() => {
    return ['ProfileImage', circle && 'ProfileImage-circle'].filter(Boolean).join(' ')
  })
  let imageStyle = $derived(`width: ${size}; height: ${size};`)
  let skeletonProps = $derived({ width: size, height: size, radius: circle ? '50%' : '0px' })

  onMount(() => {
    const image = new Image()
    image.src = IMAGE_SRC
    image.onload = () => (imageLoaded = Promise.resolve())
    image.onerror = () => (imageLoaded = Promise.reject())
  })
</script>

<div class="ProfileImage_Container" style={containerStyle}>
  {#await imageLoaded}
    <Skeleton {...skeletonProps} />
  {:then}
    <img
      src={IMAGE_SRC}
      alt={IMAGE_ALT}
      srcset={IMAGE_SRCSET}
      class={imageClass}
      style={imageStyle}
    />
  {:catch}
    <div class="ProfileImage_Error">
      <ImageIcon />
      <span>{IMAGE_ALT}</span>
    </div>
  {/await}
</div>

<style lang="scss">
  @use '$lib/styles';

  .ProfileImage {
    &_Container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &_Error {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: var(--font-mono);
      font-size: var(--font-050);
    }

    &-circle {
      border-radius: var(--radius-circle);
    }
  }
</style>
