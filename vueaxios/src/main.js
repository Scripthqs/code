import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// axios(config)

// 写法1：
// axios({
//   url:'https://httpbin.org/',
//   method:'get'
// }).then(res=>{})

// axios({
//   url:'http://localhost:8081/api/students',
//   params: {
//     type:'',
//     page:1
//   },
//   method:'get'
// }).then(res=>{
//   console.log(res.data);
// })
//写法2：http://localhost:5000/students

// axios.get('https://httpbin.org/').then(res=>{
//   console.log(res.data);
// })

// axios.get('http://localhost:8081/test/cars').then(
//   res => {
//     console.log('请求成功',res.data);
//   },
//   err => {
//     console.log('请求失败',err.message);
//   }
// )

//axios发送并发请求

// axios.all([axios({
//   url:'http://localhost:8081/api/students'
// }),axios({
//   url:'http://localhost:8081/test/cars'
// })]).then(res=>{
//   console.log(res);
// })



//全局配置

axios.defaults.baseURL = 'http://localhost:8081'
axios.defaults.timeout = 3000
axios.all([axios({
  url:'/api/students'
}),axios({
  url:'/test/cars'
})]).then(res=>{
  console.log(res);
})