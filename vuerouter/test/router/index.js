import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '..'
import About from '../'
Vue.use(VueRouter)

const routers = [
    {
        path: '/',
        redirct:'/home'
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/about',
        component: About
    },
    {
        path:'/user/:userid',
        component: User
    }
]
const router = new VueRouter({
    routers,
    mode: 'history',
    linkActiveClass
})

export default router

