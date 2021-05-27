<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    {{ name }}
    <cpn></cpn>
  </div>
</template>

<script>

import Cpn from './Cpn'


export default {
  name: "App",
  components: {
      Cpn
  },
  data(){
        return{
            message: '你好，世界',
            name: 'Vue组件离开了卡萨丁放假啦十分艰苦拉萨的飞机的'
        }
    }
};
</script>

<style scoped>
    .title {
        color:green;
    }
</style>
