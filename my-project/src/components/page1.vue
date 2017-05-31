<template>
  <div class="page1">
    asd
    <h1>{{ msg }}</h1>
  
  </div>
</template>

<script>
  export default {
    name: 'page1',
    data () {
      return {
        msg: '页面1'
      }
    }
  }

</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
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
