/*
 * @Author: zhb
 * @Descripttion:
 * @Date: 2023-04-12 13:44:23
 * @LastEditors: zhb
 * @LastEditTime: 2023-04-12 14:29:14
 * @FilePath: /home-smallpigz-vue3/src/store/index.ts
 */
import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'main',

  // 变量
  state: () => ({
    test: '',
  }),

  // 计算
  getters: {},

  // 同步/异步方法
  actions: {},

  // 持久化处理
  persist: [{ storage: localStorage, key: 'test', paths: ['test'] }],
})
