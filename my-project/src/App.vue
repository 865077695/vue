<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p><router-link to="/hello">hello</router-link></p>
    <p><router-link to="/page1">page1</router-link></p>
    <p><router-link to="/">首页</router-link></p>
    <p @click="do0">{{message}}</p>
    <p @click="getData">getData</p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        message: 'this is components app'
      }
    },
    methods: {
      do0: function () {
        alert(1)
      },
      getData: function () {
        console.log(this.$http)
//        console.log(axios)
      }
    },
    created: function () {
//      alert('create')
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
