<template>
  <div>
      <h2>我是Cpn的标题</h2>
      <p>我是cpn的内容</p>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data(){
        return{
            message: '你好，cpn',
            name: 'cpn组件的name'
        }
    }
};
</script>

<style scoped>
    * {
        color: yellow;
    }
</style>
