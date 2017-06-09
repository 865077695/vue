<template>
  <div class="my-center">
    <div class="shop hr">
      <p><i class="iconfont icon-yinhang"> </i> 我的订单</p> <span style="color:#9e9e9e">|</span>
      <p><i class="iconfont icon-youhuiquan"></i> 我的优惠券</p>
    </div>
    <div class="hr">
      <group>
        <!--<cell title="我的课堂" value="value" is-link></cell> -->
        <cell is-link v-for="(item,index) in list1" :key="index">
          <span slot="title">
            <i :class="item.icon"></i>
            <span style="vertical-align:middle;">{{item.name}}</span>
            <badge v-if="item.badge"></badge>
          </span>
        </cell>
      </group>
    </div>
    <div class="hr">
      <group>
        <cell is-link v-for="(item,index) in list2" :key="index">
        <span slot="title"><i :class="item.icon"></i> <span
          style="vertical-align:middle;">{{item.name}}</span>

          <badge v-if="item.badge"></badge></span>
        </cell>
      </group>
    </div>
    <div class="hr">
        <cell title="账号设置" is-link></cell>
    </div>

    <!--退出当前账号-->
    <p style="text-align: center;line-height: 40px;border-bottom: 1px solid #eee;color:#e64340;font-size:14px;font-weight:500"><i class="iconfont icon-tuichu"></i> 退出当前账号</p>
  </div>
</template>

<script>
  import {Group, Cell, Badge} from 'vux'
  const list1 = [
    {name: '我的课堂', icon: 'iconfont icon-my', href: 'WDKT'},
    {name: '看课记录', icon: 'iconfont icon-jilu', href: 'KKJL', badge: 1},
    {name: '缓存下载', icon: 'iconfont icon-huancun', href: 'HCXZ'}
  ]
  const list2 = [
    {name: '我的收藏', icon: 'iconfont icon-star', href: 'WDSC', badge: 1},
    {name: '我的错题', icon: 'iconfont icon-cuotiben', href: 'WDCT'},
    {name: '我的模拟考试', icon: 'iconfont icon-tiku', href: 'ZTMK'}
  ]
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        list1: list1,
        list2: list2
      }
    },
    components: {
      Group, Cell, Badge
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .shop p {
    text-align: center;
    width: 44%;
    line-height: 40px;
    display: inline-block;
    font-size: 12px;
  }

  i {
    font-size: 16px;
  }

  .hr {
    border-bottom: 10px solid #eee;
  }
</style>
