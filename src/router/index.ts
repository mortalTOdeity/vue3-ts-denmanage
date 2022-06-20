import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

import { firstMenu } from '@/utils/map-menus'
// import store from '@/store'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue'),
    children: []
  },
  {
    path: '/:patchMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
    // const userMenus = (store.state as any).login.userMenus
    // const routes = mapMenusToRoutes(userMenus)
    // console.log('changeUserMenus')

    // routes.forEach((route) => {
    //   router.addRoute('main', route)
    // })
  }
  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
