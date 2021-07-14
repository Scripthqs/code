<!--  -->
<template>
  <div>
      <h2>我是User用户页面</h2>
      <h2>我是User用户页面的内容</h2>
      <h2>{{ $route.params.id}}</h2>

  </div>
</template>

<script>
export default {
    name: 'User',
    computed: {
        id(){
           return this.$route.params.id
        }
    }
}

</script>

<style scoped>
    
</style>