<template>
  <div id="app">
    接入微前端字应用 micro-children-vue
    <p>
      <router-link to="/">child page 1</router-link> |
      <router-link to="/c">child page 2</router-link>
    </p>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
