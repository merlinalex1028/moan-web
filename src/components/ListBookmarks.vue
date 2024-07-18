<script setup lang="ts">
import { bookmarks } from '../../data/bookmarks'

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\/]+/g, '-')
}
</script>

<template>
  <div class="mx-auto max-w-300">
    <p mb3 mt--6 text-center text-4xl font-bold>
      Bookmarks
    </p>
    <p mb5 text-center text-lg italic op50>
      Websites that I collected.
    </p>
    <div
      v-for="key, cidx in Object.keys(bookmarks)" :key="key" slide-enter
      :style="{ '--enter-stage': cidx + 1 }"
    >
      <div
        :id="slug(key)"
        slide-enter pointer-events-none relative h20 select-none
        :style="{
          '--enter-stage': cidx - 2,
          '--enter-step': '60ms'
        }"
      >
        <span absolute left--1rem top-0rem text-5em color-transparent font-bold leading-1em text-stroke-1.5 text-stroke-hex-aaa op35 dark:op20>{{ key }}</span>
      </div>
      <div
        class="project-grid mx-auto max-w-500 w-max py-2"
        grid="~ cols-1 md:cols-2 gap-4 lg:cols-3"
      >
        <a
          v-for="item, idx in bookmarks[key]"
          :key="idx"
          class="item relative items-center"
          :href="item.link"
          target="_blank"
          :title="item.name"
        >
          <div h-60>
            <img h-full w-full object-contain :src="item.image">
          </div>
          <div class="text-normal">{{ item.name }}</div>
          <div class="desc text-sm font-normal opacity-50" v-html="item.desc" />
        </a>
      </div>
    </div>
  </div>
  <div>
    <div class="table-of-contents">
      <div class="table-of-contents-anchor">
        <div class="i-ri-menu-2-fill" />
      </div>
      <ul>
        <li v-for="key of Object.keys(bookmarks)" :key="key">
          <a :href="`#${slug(key)}`">{{ key }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.project-grid a.item {
  background: transparent;
  font-size: 1.1rem;
  width: 350px;
  max-width: 100%;
  padding: 0.5rem 0.875rem 0.875rem;
  border-radius: 6px;
  border: 1px solid #888888;
}

.project-grid a.item:hover {
  border-color: #0a6ed9b7;
}
</style>
