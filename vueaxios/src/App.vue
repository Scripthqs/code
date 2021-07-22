<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <img alt="Vue logo" :src=" result " />
    <div>{{ result }}</div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "App",
  components: {},
  data() {
    return {
      result: ''
    }
  },
  created() {
  //   axios({
  //     url: "http://localhost:8081/abc/banner",
  //   }).then((res) => {
  //     console.log(res.data.banners[0]);
  //     this.result = res.data.banners[0].imageUrl
  //   });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
