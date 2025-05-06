<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="min-h-screen flex flex-col font-mao">
    <div class="sticky top-0 z-50">
      <NavBar />
    </div>
    <main class="flex-1 overflow-x-hidden">
      <RouterView />
    </main>
    <Footer v-if="route.meta.showFooter" />
  </div>
</template>
