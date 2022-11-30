<template>
  <div class="border-b border-gray-300 py-8">
    <h2 class="text-3xl font-bold">
      <VLink :to="post._path">{{ post.title }}</VLink>
    </h2>
    <PostDetails :date="date" :tags="tags" />
    <p>{{ post.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({ post: { type: Object, required: true } })

const date = computed(() =>
  props.post?.date ? new Date(props.post.date) : null
)
const tags = computed(() => props.post?.tags || null)
</script>
