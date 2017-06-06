<template>
  <div id="app">
    <tab>
      <tab-item selected><router-link to="/">首页</router-link></tab-item>
      <tab-item><router-link to="/page1">page1</router-link></tab-item>
      <tab-item><router-link to="hello">hello</router-link></tab-item>
    </tab>
    <img src="./assets/logo.png">
    <loading v-model="isLoading" loading="false"></loading>
    <p @click="do0">{{message}}</p>
    <p @click="getData">getData</p>
    <router-view>as</router-view>
  </div>
</template>

<script>
  //  import {mapState} from 'vuex'
  import store from './store.js'
  // vux
  import { Tab, TabItem, Loading } from 'vux'
  
  export default {
    name: 'app',
    store,
    data () {
      return {
        message: 'this is components app'
      }
    },
    components: {
      Tab, TabItem, Loading
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
