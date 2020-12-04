import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { Lazyload } from 'vant';

Vue.use(Lazyload);
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
    lazyComponent: true,
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1
});
// Vue.use(Lazyload, {
//     lazyComponent: true,
// });
// import lazyComponent from '@xunlei/vue-lazy-component'

// Vue.use(lazyComponent)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')