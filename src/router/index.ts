import { createRouter, createWebHistory } from 'vue-router'
import type { Router, RouterOptions } from 'vue-router'
import { blogRoutes } from './blog'
import { projectRoutes } from './project'
import { noteRoutes } from './note'
import { bookmarkRoutes } from './bookmark'

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
    ...bookmarkRoutes
  ]
}

const router: Router = createRouter(routerOptions)

export default router
