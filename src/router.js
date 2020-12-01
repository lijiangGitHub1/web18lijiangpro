import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'index',
            component: () =>
                import ('./views/Index')
        },
        {
            path: '/index',
            component: () =>
                import ('./views/Index')
        },
        {
            path: '/wode',
            component: () =>
                import ('./views/Wode')
        },
        {
            path: '/shujia',
            component: () =>
                import ('./views/Shujia')
        }
    ]
})