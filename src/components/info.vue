<template>
  <div>
      <div>这是注册登陆修改密码业务逻辑的头部，很明显在这里没有搜索框</div>
      <router-view></router-view>
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