<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <NavBar />
  <main class="of-x-hidden px-7 py-10">
    <RouterView />
    <Footer :key="route.path" />
  </main>
</template>
