<template>
  <div class="panel-1">
    <img src="../../assets/img/banner.jpg" alt="">
    <!--<img :src="imgSrc">-->
    <slot name="img"></slot>
    <p class="panel-title">{{ title }}</p>
    <p class="price">¥ <span>{{ price }}</span></p>
  </div>
</template>

<script>
  export default {
    name: 'panel-l1',
    props: {
      imgSrc: {
        type: String
      },
      title: {
        type: String
      },
      price: {
        type: Number
      }
    }
  }
</script>

<style scoped>
  img{width:100%;}
  .panel-title{font-size: 12px;padding-top: 10px;}
  .price{color:#e64340;}
</style>
