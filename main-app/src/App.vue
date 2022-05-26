<template>
  <div class="main">
    <header>
      <h1>Main App</h1>
      <ul>
        <!-- 主引用/基座 -->
        <li class="title">主应用：</li>
        <!-- <li><router-link to="/main-app">main-app</router-link></li> -->
        <li><span class="link" @click="onNavigate('/main-app')">main-app</span></li>
      </ul>
      <ul>
        <!-- 子引用 -->
        <li class="title">vue子应用：</li>
        <!-- <li><router-link to="/sub-app-vue">home</router-link></li> -->
        <!-- <li><router-link to="/sub-app-vue/about">about</router-link></li> -->
        <li><span class="link" @click="onNavigate('/sub-app-vue')">home</span></li>
        <li><span class="link" @click="onNavigate('/sub-app-vue/about')">about</span></li>
      </ul>
      <ul>
        <!-- 子引用 -->
        <li class="title">react子应用：</li>
        <!-- <li><router-link to="/sub-app-react">home</router-link></li> -->
        <!-- <li><router-link to="/sub-app-react/about">about</router-link></li> -->
        <li><span class="link" @click="onNavigate('/sub-app-react')">home</span></li>
        <li><span class="link" @click="onNavigate('/sub-app-react/about')">about</span></li>
      </ul>
    </header>

    <router-view></router-view>

    <div id="app-vue"></div>
    <div id="app-react"></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const onNavigate = (link) => {
  router.push({
    path: link
  })
}
</script>

<style scoped>
header {
  padding: 20px 0 20px 10px;
  background-color: #f6f6f6;
}
h1 {
  margin: 0;
  padding: 20px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin-right: 10px;
}
.title {
  width: 105px;
}
a, .link {
  color: #42b983;
  text-decoration: underline;
  cursor: pointer;
}
</style>
