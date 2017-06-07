<template>
  <div id="app">
    <img src="./assets/logo.png">
    <loading v-model="isLoading" loading="false"></loading>
    <p @click="do0">{{message}}</p>
    <p @click="getData">getData</p>
    <router-view>as</router-view>
    <!--<group>-->
    <!--<cell is-link title="Simple" link="/component/tabbar-simple"></cell>-->
    <!--<cell is-link title="Switch icons" link="/component/tabbar-icon"></cell>-->
    <!--</group>-->
    <!--<div class="bottom-nav">-->
    <tabbar>
      <tabbar-item selected link="/Home">
        <!--<img slot="icon" src="../assets/demo/icon_nav_button.png">-->
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/page1">
        <!--<img slot="icon" src="../assets/demo/icon_nav_msg.png">-->
        <span slot="label">页面1</span>
      </tabbar-item>
      <tabbar-item link="/Hello">
        <!--<img slot="icon" src="../assets/demo/icon_nav_article.png">-->
        <span slot="label">Hello页</span>
      </tabbar-item>
    </tabbar>
  </div>
  <!--</div>-->
</template>

<script>
  // 引入路由
  import router from '@/router/index'
  //  import {mapState} from 'vuex'
  import store from './store.js'
  // vux
  import {Tabbar, TabbarItem, Loading} from 'vux'

  export default {
    name: 'app',
    store,
    data () {
      return {
        message: 'this is components app',
        color: 'red'
      }
    },
    components: {
      Tabbar, TabbarItem, Loading, router
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
      },
      onItemClick: function (param) {
        router.push({name: 'Home'})
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
  }

  a {
    text-decoration: none;
  }

  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
