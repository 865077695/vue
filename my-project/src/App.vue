<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/hello">hello</router-link>
      <router-link to="/page1">page1</router-link>
      <router-link to="/">首页</router-link>
    </p>
    <loading v-model="isLoading" loading="false"></loading>
    <p @click="do0">{{message}}</p>
    <p @click="getData">getData</p>
    <router-view></router-view>
  </div>
</template>

<script>
  import {Loading} from 'vux'
  //  import {mapState} from 'vuex'
  import store from './store.js'

  export default {
    name: 'app',
    store,
    data () {
      return {
        message: 'this is components app'
      }
    },
    components: {
      Loading
    },
    computed: {
      isLoading () {
        return this.$store.state.isLoading
      }
    },
    methods: {
      do0: function () {
        alert(1)
      },
      getData: function () {
        console.log(this.$http)
      }
    },
    created: function () {
//      alert('create')
    }
  }
</script>
<style lang="less">
  // 引入初始化样式
  @import '~vux/src/styles/reset.less';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  a {
    text-decoration: none;
  }
</style>
