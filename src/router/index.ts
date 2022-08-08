// index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
const routes: RouteRecordRaw[] = [
  { path: '/index', component: () => import('@/views/index.vue') },
  { path: '/empty', component: () => import('@/views/empty.vue') }
]

const router = createRouter({
  history: createWebHistory('/bm-wisdom-brain'),
  routes
})

export default router

router.beforeEach((to, from) => {
  if (!NProgress.isStarted()) {
    NProgress.start()
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})
