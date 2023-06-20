/*
 * @Author: zhb
 * @Descripttion:
 * @Date: 2023-03-28 16:14:11
 * @LastEditors: zhb
 * @LastEditTime: 2023-04-14 17:25:34
 * @FilePath: /home-smallpigz-vue3/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // lintOnStart: true, // dev启动时校验（保存时做了校验这里就不用了）
      include: ['src/*.ts', 'src/*.vue', 'src/**/*.vue', 'src/**/*.ts'],
      exclude: ['./node_modules/**'],
      cache: false,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
  },
})
