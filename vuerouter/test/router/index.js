import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '..'
import About from '..'
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
    }
]
const router = new VueRouter({
    routers,
    mode: 'history',
    linkActiveClass
})

