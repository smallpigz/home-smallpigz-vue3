<!--
 * @Author: zhb
 * @Descripttion: 
 * @Date: 2023-04-12 10:49:00
 * @LastEditors: zhb
 * @LastEditTime: 2023-04-13 14:27:41
 * @FilePath: /home-smallpigz-vue3/src/views/index.vue
-->
<script setup lang="ts">
import { useStore } from '../store/index'
import test from '@/components/test.vue'

const store = useStore()

const handle = () => {
  store.test = '这是一个测试'
}

const reset = () => {
  store.$reset()
}
</script>

<template>
  <div class="text-3xl font-bold underline">{{ store.test }}</div>
  <button class="h-32 w-32 border border-indigo-600" @click="handle">+</button>
  <button @click="reset">-</button>
  <test></test>
</template>

<style scoped></style>
