<template>
  <div class="main">
    <header>
      <h1>Main App</h1>
      <ul>
        <!-- 主引用/基座 -->
        <li class="title">主应用：</li>
        <li><router-link to="/main-app">main-app</router-link></li>
      </ul>
      <ul>
        <!-- 子引用 -->
        <li class="title">vue子应用：</li>
        <li><router-link to="/sub-app-vue">home</router-link></li>
        <li><router-link to="/sub-app-vue/about">about</router-link></li>
      </ul>
      <ul>
        <!-- 子引用 -->
        <li class="title">react子应用：</li>
        <li><router-link to="/sub-app-react">home</router-link></li>
        <li><router-link to="/sub-app-react/about">about</router-link></li>
      </ul>
    </header>

    <router-view></router-view>

    <div id="app-vue"></div>
    <div id="app-react"></div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
a {
  color: #42b983;
}
</style>
