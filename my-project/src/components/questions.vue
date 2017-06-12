<template>
  <div class="question root">
    <div class="box">
      <div class="content1">
        <div class="content1-left">
          <b>{{ wrong }}</b> 道
          <br>
          全部错题
        </div>
        <div class="content1-right">
          <b>{{ star }}</b> 道
          <br>
          考题收藏
        </div>
      </div>
      <div class="content2">
        <grid :rows="2">
          <grid-item v-for="i in item" :key="i">
            <i slot="icon" class="iconfont item" :class="i.icon" @click="go(i.href)"></i>
            <span slot="label" class="label">{{ i.label }}</span>
          </grid-item>
        </grid>
      </div>
      <div class="content3 content">
        <p>练习工具</p>
        <div class="ktsc">
          <div><i class="iconfont icon-meizhouyilian"></i></div>
          <div><span>考题收藏</span></div>
        </div>
        <div class="ctb">
          <div><i class="iconfont icon-meizhouyilian"></i></div>
          <div><span>错题本</span></div>
        </div>
      </div>
      <div class="content4 content">
        <p>数据中心</p>
        <div class="item">
          <p>累积练题</p>
          <p><span>855</span> 道</p>
        </div>
        <div class="item">
          <p>超过人数</p>
          <p>86%</p>
        </div>
        <div class="item">
          <p>已收藏</p>
          <p><span>12</span> 道</p>
        </div>
        <divider>***</divider>
        <div class="item">
          <p>正确</p>
          <p><span>500</span> 道</p>
        </div>
        <div class="item">
          <p>错误</p>
          <p><span>355</span> 道</p>
        </div>
        <div class="item">
          <p>正确率</p>
          <p>76%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Grid, GridItem, GroupTitle, Card, Divider} from 'vux'

  const item = [         // 四个grid数据
    {label: '快速练习', icon: 'icon-meizhouyilian', href: 'KSLX'},
    {label: '真题模拟', icon: 'icon-monida', href: 'ZTMN'},
    {label: '历年真题', icon: 'icon-hushitouxiang', href: 'LNZT'},
    {label: '章节练习', icon: 'icon-guoneibeikao', href: 'ZJLX'}
  ]
  export default {
    name: 'question',
    components: {Grid, GridItem, GroupTitle, Card, Divider},
    data: function () {
      return {
        wrong: 440,
        star: 40,
        item: item
      }
    },
    methods: {
      go (a) {
        console.log(a)
      }
    }
  }
</script>

<style scoped>
  .box {
    background: #eee;
  }

  .content1 {
    padding: 0 0 30px 0;
    background: #2dc37c;
    overflow: hidden;
    padding: 30px 10px;
  }

  .content1-left, .content1-right {
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
    text-align: center;
    font-size: 14px;
    color: #fff;
  }

  .content1-left {
    border-right: 1px solid #9e9e9e;
  }

  .content2 {
    background: #fff;
    margin: 10px 10px;
  }

  .iconfont {
    color: #3cc51f;
  }
  .content{background: #fff;padding:10px}
  .content p{font-size: 12px; color:#9e9e9e;margin-bottom: 20px;}
  .content span{font-size: 12px;color:#9e9e9e}
  .content .iconfont{color:#e64340;}
  .ktsc,.ctb{width:30%;display: inline-block;}
  .ktsc div{text-align: center}
  .ctb div{text-align: center}

  .content4{margin-top: 10px;}
  .item{width:30%;display: inline-block;text-align: center;}
  .item span{color:#e64340}
</style>
