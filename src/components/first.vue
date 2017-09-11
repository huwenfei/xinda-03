<template>
  <div>
     <p>这是首页除去头部的中间内容</p>
     <a href="#/home/second">跳转到第二个页面</a>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          msg:'hello vue'
        }
      }
    }
</script>


<style scoped>
  p{
    color:red;
  }
</style>