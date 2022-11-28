<template>
  <div class="mb-4">
    <button @click="toggleMenu"><FeatherIcon name="menu" /></button>
    <div v-show="isActive">
      <div
        class="absolute top-0 left-0 min-h-screen min-w-full bg-gradient-to-r from-gray-700 to-transparent"
        @click="toggleMenu"
      ></div>
      <div
        class="absolute top-0 left-0 p-6 w-2/3 h-screen bg-gray-200 lg:w-1/3"
      >
        <div class="grid h-full">
          <ul class="flex flex-col gap-2">
            <li v-for="item in navigation.internal" :key="item.to">
              <NavigationItem class="text-2xl" v-bind="item" />
            </li>
          </ul>
          <ul class="flex flex-col gap-2 self-end">
            <li v-for="item in navigation.social" :key="item.to">
              <NavigationItem class="text-2xl" v-bind="item" external />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const navigation = useNavigation()
const isActive = ref(false)
const toggleMenu = () => (isActive.value = !isActive.value)

onMounted(() => {
  watchEffect(() => {
    document.body.style.overflowY = isActive.value ? 'hidden' : 'inherit'
  })
})
</script>
