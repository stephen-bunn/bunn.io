<template>
  <section class="BlogEntry" @click="handleClick">
    <Card
      class="cursor-pointer transition-shadow duration-700 hover:shadow-2xl"
    >
      <div class="font-serif font-bold text-3xl">{{ entry.title }}</div>
      <div>{{ createdAt }}</div>
    </Card>
  </section>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import dayjs from 'dayjs'

export default Vue.extend({
  props: {
    entry: {
      type: Object,
      required: true,
    } as PropOptions<IContentDocument>,
  },
  computed: {
    createdAt(): string {
      return dayjs(this.entry.createdAt).format('MMM DD YYYY')
    },
  },
  methods: {
    handleClick() {
      this.$router.push(`/blog/${this.entry.slug}`)
    },
  },
})
</script>
