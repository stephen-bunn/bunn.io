<template>
  <div class="inline-block">
    <label class="text-sm mr-2" :for="id">{{ label }}</label>
    <select
      :id="id"
      class="px-4 py-2 rounded-md text-black uppercase font-serif bg-gray-300 outline-transparent outline-dashed outline-2 outline-offset-4 transition-colors focus:outline-gray-700"
      :class="{ 'text-gray-400': disabled, 'appearance-none': hideArrow }"
      :disabled="disabled"
      v-bind="$attrs"
      v-model="model"
    >
      <option
        v-for="{ value, text } in displayOptions"
        :key="value"
        :value="value"
      >
        {{ text }}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  hideArrow: {
    type: Boolean,
    default: false,
  },
})

const displayOptions = computed(() =>
  props.options.map(option => ({
    value: option?.value || option,
    text: option?.text || String(option),
  }))
)
</script>
