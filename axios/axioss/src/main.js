import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import {request} from './network/request'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios.defaults.baseURL = ''
// axios.defaults.timeout = 5000
// axios({
//   url: 'https://httpbin.org/',
//   method:'get'

// }).then(res => {
//   console.log(res);
// })
// request({
//   url: ''
// },res => {
//     console.log(res);
// },err => {
//   console.log(err);
// })



// request({
//   baseConfig:{

//   },
//   success(res){

//   },
//   failure(err){

//   }
// })


// request({
//   url:''
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })


request({
  url:''
}).then(res => {
  console.log(res);
}).catch(err => {
  // console.log(err);
})