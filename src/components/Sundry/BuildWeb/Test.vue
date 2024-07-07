<script setup>
import BackGround from "/src/components/HomePage/BackGround.vue"
import Navbar from "/src/components/HomePage/Navbar.vue"
</script>

<template>
    <Navbar />
    <BackGround />
<div style="display: flex; justify-content: center; align-items: center; height: 80vh;">
  <iframe src="http://localhost:5174/public/web/viewer.html?file=http://localhost:5174/public/test.pdf"
          style="width: 50%; height: 100%;" frameborder="0" border="0"></iframe>
</div>

</template>

<style scoped>

</style>