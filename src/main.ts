/*
 * @Author: zhb
 * @Descripttion:
 * @Date: 2023-03-28 16:14:11
 * @LastEditors: zhb
 * @LastEditTime: 2023-04-12 15:02:14
 * @FilePath: /home-smallpigz-vue3/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import './assets/css/reset.css'
import './assets/css/global.css'

createApp(App).use(router).use(pinia).mount('#app')
