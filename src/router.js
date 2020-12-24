import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

export default new Router({
    mode: 'hash',
    base: 'h5',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/login.vue'),
            meta: {
                title: '登录'
            }
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import('./views/logout.vue'),
            meta: {
                title: '切换账号'
            }
        },
        {
            path: '/entrance/select-action',
            name: 'selectAction',
            component: () => import('./views/entrance/select-action.vue'),
            meta: {
                title: '小柠檬之家'
            }
        },

        {
            path: '/trade/create',
            name: 'create',
            component: () => import('./views/trade/create.vue'),
            meta: {
                title: '新增消费'
            }
        }
        ,
        {
            path: '/order/taoList',
            name: 'taoList',
            component: () => import('./views/order/taoList.vue'),
            meta: {
                title: '销售列表'
            }
        }
        ,
        {
            path: '/trade/taobao',
            name: 'taoBao',
            component: () => import('./views/trade/taobao.vue'),
            meta: {
                title: '销售记录'
            }
        },
        {
            path: '/order/list',
            name: 'orderList',
            component: () => import('./views/order/list.vue'),
            meta: {
                title: '消费列表'
            }
        },
        {
            path: '/product/productState',
            name: 'productState',
            component: () => import('./views/product/product-state.vue'),
            meta: {
                title: '商品状态'
            }
        }
    ]
})
