<script lang="ts">
  import { Tooltip } from "@svelte-plugins/tooltips"
  import type { Post } from "$lib/types/post"
  import { PostStage, getPostStage } from "$lib/utils/post"
  import { formatDate } from "$lib/utils/format"
  import Link from "$lib/components/Link.svelte"

  export let post: Post
  const postStage = getPostStage(post.metadata?.stage)

  let stageEmoji = "🌱"
  let stageDetail = "Growing; expect many changes"
  if (postStage === PostStage.BUDDING) {
    stageEmoji = "🌿"
    stageDetail = "Taking form; not yet fully grown"
  } else if (postStage === PostStage.EVERGREEN) {
    stageEmoji = "🌳"
    stageDetail = "Fully grown"
  }
</script>

<article>
  <h1>{post.title}</h1>
  <span class="detail"
    >Published in <Link small href={post.plot.href}>{post.plot.name}</Link>
    on {formatDate(post.published, "MMM DD YYYY")}.
    <span class="stage">
      <Tooltip content={stageDetail} arrow={false} position="right" maxWidth={300}>
        {stageEmoji}
      </Tooltip>
    </span>
  </span>
  <slot />
</article>

<style lang="scss">
  h1 {
    line-height: var(--line-height-tight);
  }

  .detail {
    font-size: var(--font-050);
    color: var(--color-text-disabled);
    font-family: var(--font-serif);
  }

  .stage {
    margin-left: var(--space-1x);
    cursor: default;
  }
</style>
