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
        ,
        {
            path: '/homework/addHomework',
            name: 'addHomework',
            component: () => import('./views/homework/add.vue'),
            meta: {
                title: '添加作业'
            }
        },
        {
            path: '/homework/homeworkList',
            name: 'homeworkList',
            component: () => import('./views/homework/homework-list.vue'),
            meta: {
                title: '添加记录'
            }
        },
        {
            path: '/product/monitor',
            name: 'monitor',
            component: () => import('./views/product/monitor.vue'),
            meta: {
                title: '监控记录'
            }
        }
        ,
        {
            path: '/housework/add',
            name: 'houseworkAdd',
            component: () => import('./views/housework/add.vue'),
            meta: {
                title: '家务安排'
            }
        },
        {
            path: '/housework/myTask',
            name: 'myTask',
            component: () => import('./views/housework/my.vue'),
            meta: {
                title: '我的任务'
            }
        },
        {
            path: '/housework/toTask',
            name: 'toTask',
            component: () => import('./views/housework/to.vue'),
            meta: {
                title: '我的安排'
            }
        },
        {
            path: '/homework/myAddress',
            name: 'myAddress',
            component: () => import('./views/homework/myAddress.vue'),
            meta: {
                title: '我的足迹'
            }
        }
        ,
        {
            path: '/homework/remind',
            name: 'remind',
            component: () => import('./views/homework/remind.vue'),
            meta: {
                title: '提醒记录'
            }
        } ,
        {
            path: '/ssq/ssq',
            name: 'ssq',
            component: () => import('./views/ssq/ssq.vue'),
            meta: {
                title: '人生巅峰'
            }
        } ,
        {
            path: '/ssq/buySsq',
            name: 'buySsq',
            component: () => import('./views/ssq/buySsq.vue'),
            meta: {
                title: '飞黄腾达'
            }
        }
    ]
})
