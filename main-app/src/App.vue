<template>
  <div class="main">
    <header>
      <h1>Main App</h1>
      <ul>
        <!-- 主引用/基座 -->
        <li><router-link to="/main-app">main-app</router-link></li>
  
        <!-- 子引用 -->
        <li><router-link to="/sub-app-vue">sub-app-vue</router-link></li>
  
        <!-- 子引用 -->
        <li><router-link to="/sub-app-react">sub-app-react</router-link></li>
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
.main {
  text-align: center;
}
header {
  padding: 20px 0;
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
