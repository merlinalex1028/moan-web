import { createHead } from '@unhead/vue/client'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@unocss/reset/tailwind.css'
import 'markdown-it-github-alerts/styles/github-colors-light.css'
import 'markdown-it-github-alerts/styles/github-colors-dark-class.css'
import 'markdown-it-github-alerts/styles/github-base.css'

import '@shikijs/twoslash/style-rich.css'

import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'
import 'uno.css'

const app = createApp(App)
const head = createHead()
app.use(head)
app.use(router)
app.mount('#app')
