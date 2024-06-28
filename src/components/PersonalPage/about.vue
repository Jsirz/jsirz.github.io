<script setup>
import Navbar from '/src/components/HomePage/Navbar.vue'
import BackGround from "/src/components/HomePage/BackGround.vue"

</script>

<template>
    <Navbar />
    <BackGround />
    <div class="article-container">
    <div class="article-wrapper">
      <article class="article-content">
        <!-- 这里是文章内容 -->
        <h2 >J先生</h2>
        <p>一个简单博客网站</p>
        <p>记录我的学习与生活</p>
        <p>网站部署在githubpages上</p>
        <p>有什么建议可以提，不一定听</p>
        <p><a href="https://github.com/Jsirz" target="_blank">GitHub主页</a>&#8195;&#8195;网站还在建设中</p>
      </article>
    </div>
  </div>
</template>


<style setup>
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