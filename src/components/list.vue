<template>
  <div>
      <p>欢迎来到list页面</p>
      {{msg}}
      <a href="#/home">跳转到home页面</a>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          msg:'hello list'
        }
      }
    }
</script>


<style scoped>
  p{
    color:red;
  }
</style>