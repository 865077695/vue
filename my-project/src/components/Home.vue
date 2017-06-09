<template>
  <div class="home">
    <!--幻灯片-->
    <div>
      <swiper auto loop :aspect-ratio="300/800">
        <swiper-item v-for="(item,index) in list" :key="index">
          <a :href="item.url"><img class="swiper-img" :src="item.img">
            <h3 class="swiper-text">{{ item.title }}</h3></a>
        </swiper-item>
      </swiper>
    </div>
    <!--快速入口-->
    <div>
      <grid :rows="4">
        <grid-item v-for="i in item" :key="i">
          <i slot="icon" class="iconfont item" :class="i.icon" @click="go(i.href)"></i>
          <span slot="label" class="label">{{ i.label }}</span>
        </grid-item>
      </grid>
    </div>
    <div class="hr">
      <grid :rows="2">
        <grid-item v-for="i in item2" :key="i">
          <i slot="icon" class="iconfont item grid-left" :class="i.icon" @click="go(i.href)"></i>
          <span slot="label" class="label">{{ i.label }}</span>
        </grid-item>
      </grid>
    </div>
    <!--热门课程-->
    <div class="hot-class hr">
      <span class="class-title"><i class="iconfont icon-shuxian"></i>  热门课程</span>
      <div class="class-items">
        <div class="panel" v-for="(panel,index) in hotClassList" :key="index">
          <panel-l1 :title="panel.title" :src="panel.imgSrc" :price="panel.price">
            <img slot="img" :src="panel.imgSrc" alt="">
            <p class="count" slot="count">¥ <span>{{ panel.price }}</span></p>
          </panel-l1>
        </div>
      </div>
      <div class="more-class">更多课程 ></div>
    </div>
    <!--免费好课-->
    <div class="free-class hr">
      <span class="class-title"><i class="iconfont icon-shuxian"></i> 免费好课</span>
      <div class="class-items">
        <div class="panel" v-for="(panel,index) in freeClassList" :key="index">
          <panel-l1 :title="panel.title" :src="panel.imgSrc" :price="panel.price">
            <img slot="img" :src="panel.imgSrc" alt="">
            <p class="count" slot="count"><span>{{ panel.number }}</span> 人学习</p>
          </panel-l1>
        </div>
      </div>
      <div class="more-class">更多课程 ></div>
    </div>
    <!--考试攻略-->
    <div class="test-cut">
      <span class="class-title"><i class="iconfont icon-shuxian"></i> 考试攻略</span>
      <div class="test-cut-content">
        <img src="../assets/img/banner_1.jpg" alt="">
        <p> &nbsp;2017年临床执业助理医师资格考试报考指南须知</p>
      </div>
    </div>
  </div>

</template>

<script>
  import {Swiper, SwiperItem, Grid, GridItem} from 'vux'
  import panelL1 from '@/components/cell/panel-l1'
  // swiper基础数据
  const imgList = [
    {url: '//www.baidu.com', img: 'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff', title: '送你一朵花'},
    {url: '//www.baidu.com', img: 'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff', title: '送你一辆车'},
    {url: '//www.baidu.com', img: 'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff', title: '送你一次旅行'}
  ]
  // hot-class-list
  const hotClassList = [
    {imgSrc: './static/img/banner.jpg', title: '2017中医执业/助理精讲特色班', price: 650},
    {imgSrc: './static/img/banner.jpg', title: '2017临床助理医师-1对1VIP保过班', price: 660},
    {imgSrc: './static/img/banner.jpg', title: '2017临床执业医师-1对1VIP保过班', price: 230},
    {imgSrc: './static/img/banner.jpg', title: '2017临床助理医师-实践技能班', price: 199}
  ]

  // free-class-list
  const freeClassList = [
    {imgSrc: './static/img/banner.jpg', title: '2017中医执业/助理精讲特色班', number: 650},
    {imgSrc: './static/img/banner.jpg', title: '2017临床助理医师-1对1VIP保过班', number: 1111},
    {imgSrc: './static/img/banner.jpg', title: '2017临床执业医师-1对1VIP保过班', number: 2222},
    {imgSrc: './static/img/banner.jpg', title: '2017临床助理医师-实践技能班', number: 3333}
  ]
  export default {
    name: 'Home',
    components: {Swiper, SwiperItem, Grid, GridItem, panelL1},
    data () {
      return {
        imgSrc: '123',
        list: imgList,  // swiper数据
        item: [         // 四个grid数据
          {label: '每日一题', icon: 'icon-meizhouyilian', href: 'MRYT'},
          {label: '真题模考', icon: 'icon-monida', href: 'ZTMN'},
          {label: '护士圈', icon: 'icon-hushitouxiang', href: 'HSQ'},
          {label: '备考资讯', icon: 'icon-guoneibeikao', href: 'BKZX'}
        ],
        item2: [        // 两个grid数据
          {label: '累计练题', icon: 'icon-ttl-fill', href: 'LJLT'},
          {label: '看课时长', icon: 'icon-video', href: 'KKSC'}
        ],
        hotClassList: hotClassList,
        freeClassList: freeClassList
      }
    },
    methods: {
      go (a) {
        console.log(a)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .swiper-img {
    width: 100%;
  }

  .swiper-text {
    position: absolute;
    bottom: 10px;
    left: 20px;
    color: #000000;
  }

  .item {
    color: green
  }

  .icon-hushitouxiang {
    color: deeppink
  }

  .icon-meizhouyilian {
    color: #e59313
  }

  .icon-guoneibeikao {
    color: #e64340
  }

  .icon-ttl-fill {
    color: #10aeff
  }

  .icon-video {
    color: #000000
  }

  .label {
    line-height: 40px;
  }

  .hr {
    border-bottom: 10px solid #eee
  }

  .hot-class,.free-class,.test-cut {
    text-align: left
  }

  .icon-shuxian {
    color: #52a341;
    font-size: 12px
  }

  .class-title {
    line-height: 40px;
  }

  .class-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .more-class{text-align: center;line-height: 40px;color:#9e9e9e;font-size:14px;}

  .test-cut{position: relative;overflow: hidden;}
  .test-cut-content img{width: 100%;float: left}
  .test-cut-content p{position: absolute;bottom: 0;line-height: 26px;background: rgba(0,0,0,.3);color:#fff;width: 100%;font-size: 12px;}

  .panel {
    width: 40%;
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
