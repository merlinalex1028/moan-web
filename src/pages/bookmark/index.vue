<script setup lang="ts">
import { bookmarkCategories } from '@/../data/bookmark'
import { useHead } from '@unhead/vue'
import { ref } from 'vue'

useHead({
  title: 'Bookmarks - Merlin Alex'
})

const contentAreaRef = ref<HTMLElement | null>(null)

function scrollToCategory(categoryId: string) {
  if (!contentAreaRef.value)
    return

  const element = document.getElementById(categoryId)
  if (element) {
    const contentArea = contentAreaRef.value
    const elementTop = element.getBoundingClientRect().top
    const containerTop = contentArea.getBoundingClientRect().top
    const relativeTop = elementTop - containerTop + contentArea.scrollTop

    contentArea.scrollTo({
      top: relativeTop - 20,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div class="max-h-[calc(100vh-88px)] flex flex-col">
    <div class="sticky top-0 z-10 w-full bg-white py-4 text-center">
      <div class="m-0 text-4xl font-semibold">
        website
      </div>
      <div class="text-sm text-gray-500">
        A collection of websites I like
      </div>
    </div>

    <div class="relative flex flex-1">
      <div class="sticky top-[100px] h-[calc(100vh-180px)] w-240px flex-shrink-0 overflow-y-auto bg-white px-12">
        <div class="relative rounded-[20px] bg-white/80 p-4 text-center backdrop-blur-sm after:absolute before:absolute after:inset-[1px] before:inset-0 before:animate-[gradient_3s_ease_infinite] before:border-[3px] before:border-transparent after:rounded-[18px] before:rounded-[20px] after:bg-white/80 before:from-blue-400 before:via-purple-400 before:to-pink-400 before:bg-gradient-to-r before:bg-clip-border after:content-[''] before:content-['']">
          <ul class="relative z-10 m-0 list-none p-0">
            <li v-for="category in bookmarkCategories" :key="category.id" class="mb-3 last:mb-0">
              <a
                href="#"
                class="relative inline-block px-4 text-gray-600 no-underline transition-all duration-300 before:absolute before:inset-[-4px] hover:scale-[1.02] before:border before:border-transparent before:rounded-full hover:text-blue-600 before:transition-all before:content-[''] hover:before:border-blue-100 hover:before:bg-blue-50/50"
                @click.prevent="scrollToCategory(category.id)"
              >
                {{ category.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div ref="contentAreaRef" class="h-[calc(100vh-180px)] flex-1 overflow-y-auto">
        <div class="mx-auto max-w-1200px p-6">
          <div
            v-for="category in bookmarkCategories"
            :key="category.id"
            class="mb-12"
          >
            <div
              :id="category.id"
              class="mb-6 mt-0 border-b border-gray-200 pb-2"
            >
              {{ category.title }}
            </div>
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
              <a
                v-for="bookmark in category.bookmarks"
                :key="bookmark.title"
                :href="bookmark.url"
                target="_blank"
                rel="noopener noreferrer"
                class="block border border-gray-200 rounded-lg bg-white p-4 text-inherit no-underline transition-all duration-200 hover:translate-y-[-2px] hover:border-gray-300 hover:shadow-md"
              >
                <div>
                  <div class="mb-2 font-medium">{{ bookmark.title }}</div>
                  <div class="truncate text-sm text-gray-500">{{ bookmark.url }}</div>
                  <div v-if="bookmark.tag" class="mt-2 flex flex-wrap gap-2">
                    <span v-for="tag in bookmark.tag" :key="tag" class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
