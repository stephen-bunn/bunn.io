<template>
  <div class="font-sans bg-gray-200 text-black">
    <div class="container mx-auto p-4 lg:max-w-screen-lg">
      <Navigation />
    </div>
    <div class="flex flex-col min-h-screen justify-center items-center">
      <h1 class="font-mono text-8xl">{{ error.statusCode }}</h1>
      <p class="mb-8">{{ error.message }}</p>
      <StyledLink autofocus to="/">Take me home</StyledLink>
    </div>
  </div>
</template>

<script setup>
const error = useError()
</script>
