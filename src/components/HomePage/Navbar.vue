<template>
<ul>
    <li @click="home">首页</li>
    <li>
        <div class="dropdown"> <a href="#" class="dropbtn">菜单</a>
            <div class="dropdown-content"> <a @click="konwledge">知识屋</a> <a @click="practice">实践房</a> <a @click="sundry">杂物间</a> </div>
        </div>
    </li>
    <li @click="about">关于</li>
</ul>
</template>


<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()

const about = () => {
    router.push("/about")
}
const home = () => {
    router.push("/")
}
const konwledge = () => {
    router.push("/knowledge")
}
const practice = () => {
    router.push("/practice")
}
const sundry = () => {
    router.push("/sundry")
}

</script>

<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden; /* 去除背景颜色时，可以去除背景颜色设置 */
}

li {
    color: white; /* 将菜单项字体颜色改为黑色 */
    padding: 14px 16px;
    display: inline-block;
    text-decoration: none;
}

li a {
    color: white; /* 将菜单项字体颜色改为黑色 */
    padding: 14px 16px;
    display: inline-block;
    text-decoration: none;
}

li>a:hover:not(a.active),
.dropbtn:hover {
    background-color: #555;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 100px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    display: block;
    z-index: 1;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
    color: deepskyblue;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>
