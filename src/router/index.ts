/*
 * @Author: zhb
 * @Descripttion:
 * @Date: 2023-04-12 10:44:36
 * @LastEditors: zhb
 * @LastEditTime: 2024-03-02 18:49:25
 * @FilePath: /home-smallpigz-vue3/src/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
  },

  // 首页
  {
    path: '/index',
    component: () => import('@/views/home/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
