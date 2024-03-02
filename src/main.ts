/*
 * @Author: zhb
 * @Descripttion:
 * @Date: 2023-03-28 16:14:11
 * @LastEditors: zhb
 * @LastEditTime: 2023-07-04 19:33:49
 * @FilePath: /home-smallpigz-vue3/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 全局样式
import './assets/css/reset.css'
import './assets/css/global.css'

createApp(App).use(router).use(pinia).mount('#app')
