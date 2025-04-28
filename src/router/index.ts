import type { Router, RouterOptions } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { blogRoutes } from './blog'
import { bookmarkRoutes } from './bookmark'
import { codeRoutes } from './code-snippet'
import { noteRoutes } from './note'
import { projectRoutes } from './project'

const routerOptions: RouterOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Root',
      component: () => import('@/pages/index.md')

    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/404.md')
    },
    ...blogRoutes,
    ...projectRoutes,
    ...noteRoutes,
    ...bookmarkRoutes,
    ...codeRoutes
  ]
}

const router: Router = createRouter(routerOptions)

export default router
