<!--
 * @Author: zhb
 * @Descripttion: 
 * @Date: 2023-04-14 14:29:44
 * @LastEditors: zhb
 * @LastEditTime: 2023-04-14 17:10:45
 * @FilePath: /home-smallpigz-vue3/src/components/home/home1.vue
-->
<script setup lang="ts"></script>

<template>
  <div
    class="flex h-screen min-h-[800px] w-screen min-w-[1200px] flex-col items-center justify-center"
  >
    <div
      class="flex h-1/2 w-3/4 items-center justify-around rounded-3xl bg-orange-100/75 shadow-xl shadow-cyan-500/40 hover:bg-orange-100 hover:shadow-indigo-500/70"
    >
      <div class="">
        <span class="text-6xl text-cyan-950">welcome</span>
      </div>
      <div class="flex flex-col items-center">
        <img
          class="h-[300px] w-[300px] rounded-full"
          src="@/assets/images/headPicture/smallpigz_github_2.png"
          alt=""
        />
        <a
          href="https://github.com/smallpigz"
          class="mt-8 inline-block h-8 w-8 rounded-full bg-[url('@/assets/images/icons/github.png')] bg-cover hover:cursor-pointer"
        ></a>
      </div>
    </div>
    <div
      class="mt-16 flex w-3/4 items-center justify-start rounded-3xl bg-orange-100/75 p-6 shadow-xl shadow-cyan-500/40 hover:bg-orange-100 hover:shadow-indigo-500/70"
    >
      <div class="mr-4 text-3xl text-cyan-950">特别鸣谢：</div>
      <div class="flex flex-col items-center">
        <img
          class="h-16 w-16 rounded-full"
          src="@/assets/images/headPicture/aziphale.jpeg"
          alt=""
        />
        <a
          href="https://github.com/aziphale"
          class="mt-2 inline-block h-4 w-4 rounded-full bg-[url('@/assets/images/icons/github.png')] bg-cover hover:cursor-pointer"
        ></a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
