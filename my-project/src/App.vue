<template>
  <div id="app">
    <!--顶部页面标题-->
    <p class="title">{{ routerTitle }}</p>
    <!--路由加载动画-->
    <loading v-model="isLoading" loading="false"></loading>
    <!--路由容器-->
    <router-view></router-view>
    <!--底部菜单选项-->
    <div class="bottom-nav">
      <tabbar>
        <tabbar-item selected link="/Home" :icon-class="'iconfont icon-shouye'" badge="11">
          <i slot="icon"></i>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item show-dot link="/video-class" :icon-class="'iconfont icon-lesson'" show-dot>
          <i slot="icon"></i>
          <span slot="label">课程</span>
        </tabbar-item>
        <tabbar-item show-dot link="/questions" :icon-class="'iconfont icon-tiku'" show-dot>
          <i slot="icon"></i>
          <span slot="label">题库</span>
        </tabbar-item>
        <tabbar-item :icon-class="'iconfont icon-my'" link="/my">
          <i slot="icon"></i>
          <!--<img slot="icon" src="./assets/1.png">-->
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>
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
        message: 'this is components app'
      }
    },
    components: {
      Tabbar, TabbarItem, Loading, router
    },
    computed: {
      isLoading () {
        return this.$store.state.isLoading
      },
      routerTitle () {
        return this.$store.state.title
      }
    },
    methods: {
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
  /*引入初始化样式*/
  @import '~vux/src/styles/reset.less';
  /*引入阿里字体图标*/
  @import '//at.alicdn.com/t/font_lxvq2c22dab2csor.css';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-bottom: 50px;
  }

  .title {
    line-height: 2.5em;
    background: #2dc37c;
    text-align: center;
    color: #fff;
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

  /*字体图标大小*/
  .iconfont {
    font-size: 24px;
  }
</style>
