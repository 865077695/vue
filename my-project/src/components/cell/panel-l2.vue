<template>
  <div class="panel2">
    <div class="panel2-left">
      <img :src="imgSrc">
    </div>
    <div class="panel2-right">
      <p class="panel2-title">{{ title }}</p>
      <p class="panel2-descp">{{ descp }}</p>
      <p class="panel2-time">{{ startTime }}-{{ endTime }}</p>
    </div>
    <div class="panel2-bottom">
      <span class="panel2-price">&nbsp;¥ {{ price }}</span>
      <span class="panel2-number">有{{ number }}人正在学习&nbsp;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'panel-l2',
    props: {
      imgSrc: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      descp: {
        type: String
      },
      startTime: {},
      endTime: {},
      price: {},
      number: {}
    }
  }
</script>

<style scoped>
  .panel2 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 8px;
    background: #fff;
    margin: 10px 0;
    border-top: 1px solid transparent
  }

  .panel2-left {
    width: 30%;
  }

  .panel2-right {
    width: 60%;
    text-align: left
  }

  img {
    width: 100%;
    height: 100%
  }

  .panel2-title {
    font-size: 14px;
  }

  .panel2-descp, .panel2-time, .panel2-price, .panel2-number {
    font-size: 12px;
    color: #9e9e9e;
  }

  .panel2-descp {
    line-height: 50px;
    height: 50px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .panel2-bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
    line-height: 30px;
  }

  .panel2-price {
    color: red;
  }
</style>
