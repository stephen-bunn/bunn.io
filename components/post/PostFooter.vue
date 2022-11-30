<template>
  <div>
    <hr class="border-b border-b-gray-300 my-4 lg:my-8" />
    <div
      class="flex flex-col text-gray-500 gap-2 justify-center lg:gap-4 lg:flex-row-reverse"
    >
      <div>
        <p>Thanks for reading!</p>
        <p v-if="postSourceUrl">
          If you found any details that are factually incorrect, you can
          <VLink :to="postSourceUrl" target="_blank">suggest an edit</VLink>.
        </p>
        <p>All content &copy; {{ displayName }}</p>
      </div>
      <NuxtImg class="self-center" src="/initials.svg" :width="128" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

const { displayName, repositoryUrl } = useConstants()
const postSourceUrl = computed(() =>
  props.post._file ? `${repositoryUrl}/content/${props.post._file}` : null
)
</script>
