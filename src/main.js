import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vant from 'vant'
import 'vant/lib/index.css'

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(NutUI)

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    const token = localStorage.getItem("login_token");
    if (to.path === '/login' && token) {
        router.push({name:'home'})
    }
    if (whiteList.indexOf(to.path) !== -1) {
        next();
    } else {
        if (token) {
            next()
        } else {
            router.push({name:'login'})
        }
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
