<script lang="ts">
  import { Tooltip } from "@svelte-plugins/tooltips"
  import type { Post } from "$lib/types/post"
  import { PostStage, getPostStage } from "$lib/utils/post"
  import { formatDate } from "$lib/utils/format"
  import Link from "$lib/components/Link.svelte"
  import { SproutIcon, LeafIcon, TreePineIcon } from "lucide-svelte"

  export let post: Post
  const postStage = getPostStage(post.metadata?.stage)

  let stageDetail = "Growing; expect many changes"
  if (postStage === PostStage.BUDDING) {
    stageDetail = "Taking form; not yet fully grown"
  } else if (postStage === PostStage.EVERGREEN) {
    stageDetail = "Fully grown"
  }
</script>

<article>
  <h1>{post.title}</h1>
  <span class="detail"
    >Published in <Link small padded href={post.plot.href}>{post.plot.name}</Link>
    on {formatDate(post.published, "MMM DD YYYY")}.
    <span class="stage">
      <Tooltip
        content={stageDetail}
        theme="stage-tooltip"
        arrow={false}
        position="right"
        maxWidth={300}
      >
        {#if postStage === PostStage.BUDDING}
          <LeafIcon size={16} />
        {:else if postStage === PostStage.EVERGREEN}
          <TreePineIcon size={16} />
        {:else}
          <SproutIcon size={16} />
        {/if}
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
    display: flex;
    font-size: var(--font-050);
    color: var(--color-text-disabled);
    font-family: var(--font-serif);
  }

  .stage {
    margin-left: var(--space-1x);
    cursor: default;
  }

  :global(.tooltip.stage-tooltip) {
    --tooltip-font-family: var(--font-serif);
    --tooltip-color: var(--color-text-disabled);
  }
</style>
