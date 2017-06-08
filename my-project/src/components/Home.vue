<template>
  <div class="home">
    <div>

      <swiper auto loop :aspect-ratio="300/800">
        <swiper-item v-for="(item,index) in list" :key="index">
          <a :href="item.url"><img class="swiper-img" :src="item.img">
            <h3 class="swiper-text">{{ item.title }}</h3></a>
        </swiper-item>
      </swiper>
    </div>
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

    <div class="hot-class">
      <span class="hot-class-title"><i class="iconfont icon-shuxian"></i>  热门课程</span>

      <div class="hot-class-items">
        <div class="panel" v-for="(panel,index) in panelList" :key="index">
          <panel-l1 :title="panel.title" :src="panel.imgSrc" :price="panel.price">
            <img slot="img" :src="panel.imgSrc" alt="">
          </panel-l1>
        </div>
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
  // panel-l1数据
  const panelList = [
    {imgSrc: './static/img/banner.jpg', title: '2017中医执业/助理精讲特色班', price: 650},
    {imgSrc: './static/img/banner.jpg', title: '2017临床助理医师-1对1VIP保过班', price: 650},
    {imgSrc: './static/img/banner.jpg', title: '2017临床执业医师-1对1VIP保过班', price: 650},
    {imgSrc: './static/img/banner.jpg', title: '2017临床助理医师-实践技能班', price: 650},
    {imgSrc: './static/img/banner.jpg', title: 'title', price: 660},
    {imgSrc: './static/img/banner.jpg', title: 'title', price: 680}
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
        panelList: panelList
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

  .hot-class {
    text-align: left
  }

  .icon-shuxian {
    color: #52a341;
    font-size: 12px
  }

  .hot-class-items{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .panel{width:40%;}
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
