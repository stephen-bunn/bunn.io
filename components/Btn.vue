<template>
  <button
    class="rounded-md text-black uppercase font-serif bg-gray-300 px-4 py-2 transition-colors hover:bg-gray-500 hover:text-white"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
