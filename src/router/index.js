import Vue from 'vue'
import VueRouter from 'vue-router'
// 1. 定义路由组件.
import Home from '../views/Home'
import About from '../views/About'
import Main from '../views/Main'
import Mall from '../views/Mall'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'

Vue.use(VueRouter)
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    {
        path: '/',
        component: Main,
        redirect: '/home',
        children: [
            { path: 'home', component: Home},
            { path: 'about', component: About},
            { path: 'page1', component: PageOne},
            { path: 'page2', component: PageTwo},
            { path: 'mall', component: Mall}
        ]
    }

]
// 3. 创建路由实例并传递 `routes` 配置
const router = new VueRouter({
    routes,
})

export default router