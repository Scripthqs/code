import Vue from 'vue'
//1.导入vue-router插件
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//2.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)
//3.创建VueRouter对象，单独的抽离出来
const routes = [
  // {
    // path:'',
    //redirect重定向
    // redirect: '/home'
  // },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { 
    path: '/user/:id', 
    name: 'User',
    component: () => import('../views/User.vue') 
  }
]

const router = new VueRouter({
  //配置路由和组件之间的应用关系routes:[]
  routes,
  //默认路由是hash值模式，通过mode更改
  mode:'history'
})
//4.将router对象传入Vue实例，在main.js中导入并使用router
export default router
