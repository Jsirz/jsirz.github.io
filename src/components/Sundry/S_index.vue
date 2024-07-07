<script setup>
import BackGround from "/src/components/HomePage/BackGround.vue"
import Navbar from "/src/components/HomePage/Navbar.vue"
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const testt = () => {
    router.push("/sundry/test")
}
</script>

<template>
    <Navbar />
    <BackGround />
<div class="article-container">
    <div class="article-wrapper">
      <article class="article-content">
        <!-- 这里是文章内容 -->
        <h2  style="display: flex; justify-content: center; align-items: center;">杂物间首页</h2>
        <div @click="testt">文章测试</div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.article-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 让容器铺满整个视口高度 */
}

.article-wrapper {
  width: 70%; /* 文章框的宽度 */
  background-color: #f0f0f0; /* 背景颜色 */
  padding: 20px; /* 内边距 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
}

.article-content {
  /* 可以根据需要添加更多样式 */
  font-family: Arial, sans-serif;
  line-height: 1.6;
}
</style>