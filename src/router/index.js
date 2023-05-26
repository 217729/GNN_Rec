import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from '@/views/Homepage' //主页
import Login from "@/views/Login" //登陆
import Register from "@/views/Register"; //注册
import Guess_like from "@/views/Guess_like"//猜我喜欢
import goods_detail from "@/views/goods_detail"
import Mine from "@/views/Mine"

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    }, {
        path: '/Homepage',
        name: 'Homepage',
        component: Homepage
    },{
        path: '/Guess_like',
        name: 'Guess_like',
        component: Guess_like
    },{
        path: '/goods_detail',
        name: 'goods_detail',
        component: goods_detail
    },
    {
        path: '/Mine',
        name: 'Mine',
        component: Mine
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router