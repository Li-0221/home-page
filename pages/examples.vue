<template>
  <client-only>
    <el-switch
      v-model="colorMode"
      inline-prompt
      active-text="dark"
      inactive-text="light"
      size="large"
    ></el-switch>
  </client-only>
</template>

<script setup lang="ts">
const color = useColorMode();
const colorMode = computed({
  get: () => color.value === "dark",
  set: () => (color.preference = color.value === "dark" ? "light" : "dark")
});
</script>
