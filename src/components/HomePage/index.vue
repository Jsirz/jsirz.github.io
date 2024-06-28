<script setup>
import HelloWorld from './HelloWorld.vue'
import Navbar from './Navbar.vue'
import BackGround from "./BackGround.vue"
</script>

<template>
  <div>
    <Navbar />
    <BackGround />
  </div>
  <header class="Head">
    <img class="logo" src="/src/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="Hello world!" />
    </div>
  </header>

  <main>
  </main>
</template>

<style scoped>
.Head {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  flex-direction: column; /* 垂直方向布局 */
  height: 100vh; /* 使用视口高度作为header的高度 */
}

.center-wrapper {
  text-align: center; /* 将内容水平居中 */
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

</style>
