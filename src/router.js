import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
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
router.beforeEach((to, from, next) => {
    // console.log(to);
    // console.log(from);
    let isLogin = window.sessionStorage.getItem('user');
    // console.log('isLogin:' + isLogin);
    if (isLogin) {
        //如果用户信息存在则往下执行。
        next()
    } else {
        // console.log(to.path);
        //如果用户token不存在则跳转到login页面
        if (to.path === '/wode') {
            next()
        } else {
            next('/wode')
        }
    }
})
export default router;