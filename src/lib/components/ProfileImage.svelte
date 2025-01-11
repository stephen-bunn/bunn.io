<svelte:options runes />

<script lang="ts">
  import { FIRST_NAME } from '$lib/constants'

  let { size = '256px', circle = false }: { size?: string; circle?: boolean } = $props()

  const IMAGE_SRC = '/img/profile.jpeg'
  const IMAGE_ALT = `Profile image of ${FIRST_NAME}`

  let imageClass = $derived.by(() => {
    return ['ProfileImage', circle && 'ProfileImage-circle'].filter(Boolean).join(' ')
  })
  let imageStyle = $derived(`width: ${size}; height: ${size};`)
</script>

<div class="ProfileImage_Container">
  <img src={IMAGE_SRC} alt={IMAGE_ALT} class={imageClass} style={imageStyle} />
</div>

<style lang="scss">
  .ProfileImage {
    &_Container {
      display: block;
    }

    &-circle {
      border-radius: 50%;
    }
  }
</style>
