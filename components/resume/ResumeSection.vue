<template>
  <section>
    <h2 class="font-serif font-bold text-3xl uppercase mb-4">
      <FeatherIcon v-if="icon" :name="icon" :size="32" />
      {{ heading }}
    </h2>
    <div>
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  heading: { type: String, required: true },
  icon: { type: String, default: null },
})
</script>
