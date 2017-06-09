<template>
  <div class="panel-1">
    <slot name="img"></slot>
    <p class="panel-title">{{ title }}</p>
    <slot name="count"></slot>
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
  .panel-1{padding: 5px 0;}
  img{width:100%;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;}
  .panel-title{font-size: 12px;padding-top: 0px;}
  .count{color:#e64340;font-size: 12px;}
</style>
