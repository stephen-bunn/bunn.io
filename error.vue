<template>
  <div class="bg-gray-200 text-black">
    <div
      class="flex flex-col mx-auto min-h-screen justify-center items-center lg:max-w-screen-lg"
    >
      <h1 class="font-mono text-8xl">{{ error.statusCode }}</h1>
      <p class="mb-8">{{ error.message }}</p>
      <StyledLink autofocus to="/">Back home</StyledLink>
    </div>
  </div>
</template>

<script setup>
const error = useError()
</script>
