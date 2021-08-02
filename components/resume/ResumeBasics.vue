<template>
  <div class="flex flex-col flex-grow place-items-center">
    <img class="w-32 h-32 rounded-full" :src="data.picture" />
    <div class="font-serif font-normal text-2xl text-gray-600">
      {{ data.label }}
    </div>
    <CascadeDrop class="font-serif font-bold uppercase text-8xl">
      {{ data.name }}
    </CascadeDrop>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { JsonResume } from '~/types/JsonResume'
import CascadeDrop from '~/components/text/CascadeDrop.vue'

export default Vue.extend({
  components: {
    CascadeDrop,
  },
  props: {
    data: {
      type: Object,
      required: true,
    } as PropOptions<JsonResume.Basics>,
  },
})
</script>
