<!--
 * @Author: zhb
 * @Descripttion: 
 * @Date: 2023-07-04 11:27:05
 * @LastEditors: zhb
 * @LastEditTime: 2024-03-02 17:48:18
 * @FilePath: /home-smallpigz-vue3/src/components/home/homeVideo.vue
-->
<script setup lang="ts">
// vue相关
import { ref } from 'vue'
// 背景视频
import home_video from '@/assets/videos/home_video.mp4'

/* ******************** 文字列表块 ******************** */
// 文字列表
const titleList: string[] = ['W', 'e', 'l', 'c', 'o', 'm', 'e']

/* ******************** 视频块 ******************** */
const videoRef: any = ref(null) // 视频ref
const videoCurrentTime: any = ref(0) // 视频当前时间
// function-视频播放
const handleVideoTimeUpdate = () => {
  videoCurrentTime.value = parseInt(videoRef.value.currentTime)
  if (videoCurrentTime.value === 5) {
    showHideTextList.value = true
  } else if (videoCurrentTime.value === 23) {
    videoRef.value.currentTime = 0
  }
}

/* ******************** 隐藏文字块 ******************** */
const showHideTextList: any = ref(false) // 是否显示隐藏文字
// 隐藏文字列表
const hideTextList: string[] = ['我', '是', '隐', '藏']

const handleGitHubClick = () => {
  window.open('https://github.com/smallpigz', '_blank')
}
</script>

<template>
  <div class="h-full min-h-[800px] w-full min-w-[1200px] overflow-auto">
    <!-- 视频 -->
    <video
      ref="videoRef"
      :src="home_video"
      muted
      loop
      autoplay
      class="fixed left-0 top-0 -z-10 h-auto min-h-full w-auto min-w-full object-cover"
      @timeupdate="handleVideoTimeUpdate"
    ></video>

    <!-- 欢迎 -->
    <div
      class="absolute left-[250px] top-[100px] flex h-[300px] w-[900px] items-center justify-between rounded-[12px] p-[10px]"
    >
      <div
        v-for="(item, index) in titleList"
        class="animate-pulse font-mono text-[90px] font-bold italic text-black antialiased blur-[1px] brightness-95 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
        :key="index"
      >
        {{ item }}
      </div>
    </div>

    <!-- 头像 -->
    <div class="absolute left-[250px] top-[350px] flex flex-col items-center">
      <img
        class="h-[150px] w-[150px] rounded-full"
        src="@/assets/images/headPicture/smallpigz_github_2.png"
        alt=""
      />
      <div
        class="mt-8 inline-block h-8 w-8 animate-pulse rounded-full bg-[url('@/assets/images/icons/github.png')] bg-cover blur-[1px] brightness-95 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] hover:cursor-pointer"
        @click="handleGitHubClick"
      ></div>
    </div>

    <!-- 隐藏文字块 -->
    <div :class="showHideTextList ? 'block' : 'hidden'">
      <div
        class="absolute left-[500px] top-[400px] flex w-[120px] items-center justify-between pb-[2px] pl-[12px] pr-[12px] pt-[2px]"
      >
        <!-- <img class="h-[40px] w-[40px]" src="@/assets/svg/homeVideoSvg.svg" alt="" /> -->
        <!-- <div class="font-mono text-[18px] font-black text-[#2f373a]">进入</div> -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
