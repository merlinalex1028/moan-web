<script setup lang="ts">
const a = ref(1)
</script>

<template>
  <RouterView />
  <div>a is {{ a }}</div>
</template>
