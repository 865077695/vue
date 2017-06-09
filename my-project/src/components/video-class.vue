<template>
  <div class="page1">
    <div class="panel" v-for="(panel,index) in videoList" :key="index">
      <panel-l2 :imgSrc="panel.imgSrc" :title="panel.title" :descp="panel.descp" :startTime="panel.startTime"
                :endTime="panel.endTime" :price="panel.price" :number="panel.number"></panel-l2>
    </div>
    <divider>到底了</divider>
  </div>
</template>

<script>
  import panelL2 from '@/components/cell/panel-l2'
  import {Divider} from 'vux'

  const videoList = [
    {
      imgSrc: './static/img/banner.jpg',
      title: '2017中医执业/助理精讲特色班',
      descp: '详情描述详情描述详情描述详情描述详情描述详情描述详情描述',
      startTime: '2016.10.01',
      endTime: '2017.09.04',
      price: '680',
      number: 123
    },
    {
      imgSrc: './static/img/banner.jpg',
      title: '2017中医执业/助理精讲特色班',
      descp: '详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述',
      startTime: '2016.10.01',
      endTime: '2017.09.04',
      price: '610',
      number: 123
    },
    {
      imgSrc: './static/img/banner.jpg',
      title: '2017中医执业/助理精讲特色班',
      descp: '详情描述',
      startTime: '2016.10.01',
      endTime: '2017.09.04',
      price: '380',
      number: 123
    },
    {
      imgSrc: './static/img/banner.jpg',
      title: '2017中医执业/助理精讲特色班',
      descp: '详情描述',
      startTime: '2016.10.01',
      endTime: '2017.09.04',
      price: '480',
      number: 123
    },
    {
      imgSrc: './static/img/banner.jpg',
      title: '2017中医执业/助理精讲特色班',
      descp: '详情描述',
      startTime: '2016.10.01',
      endTime: '2017.09.04',
      price: '530',
      number: 123
    },
    {
      imgSrc: './static/img/banner.jpg',
      title: '2017中医执业/助理精讲特色班',
      descp: '详情描述',
      startTime: '2016.10.01',
      endTime: '2017.09.04',
      price: '320',
      number: 123
    },
    {
      imgSrc: './static/img/banner.jpg',
      title: '2017中医执业/助理精讲特色班',
      descp: '详情描述',
      startTime: '2016.10.01',
      endTime: '2017.09.04',
      price: '180',
      number: 123
    }
  ]
  export default {
    name: 'videoClass',
    data () {
      return {
        msg: '页面1',
        videoList: videoList
      }
    },
    components: {panelL2, Divider}
  }

</script>

<style scoped>
  .page1 {
    background: #eee;
    padding: 10px;
  }

</style>
