<template>
  <header class="flex mb-8 text-xl place-content-between">
    <div class="flex gap-4">
      <NavigationItem
        v-for="item in navigation.internal"
        :key="item.to"
        v-bind="item"
      />
    </div>
    <div class="flex gap-4">
      <NavigationItem
        v-for="item in navigation.social"
        :key="item.to"
        external
        v-bind="item"
      />
    </div>
  </header>
</template>

<script setup>
const navigation = useNavigation()
</script>
