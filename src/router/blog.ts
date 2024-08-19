export const blogRoutes = [
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('@/pages/blog/index.md')
  },
  {
    path: '/blogs/web-components',
    name: 'WebComponents',
    component: () => import('@/pages/blog/web-components.md')
  }
]
