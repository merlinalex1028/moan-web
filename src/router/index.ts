import { createRouter, createWebHistory } from 'vue-router'
import type { Router, RouterOptions } from 'vue-router'
import { blogRoutes } from './blog'
import { projectRoutes } from './project'
import { noteRoutes } from './note'

const routerOptions: RouterOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Root',
      component: () => import('@/pages/index.vue')

    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/pages/test.md')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/404.md')
    },
    ...blogRoutes,
    ...projectRoutes,
    ...noteRoutes
  ]
}

const router: Router = createRouter(routerOptions)

export default router
