
import Vue from 'vue'
import App from './App.vue'
import Test from './Test.vue'

Vue.component('myTest', Test)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
// new Vue({
//   el: '#app',
//   render: h => h(App),
// })
// new Vue({
//   render: h => h(Test),
// }).$mount('#app')