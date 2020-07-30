import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
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
                title: '办单登录'
            }
        },
        {
            path: '/entrance/select-action',
            name: 'selectAction',
            component: () => import('./views/entrance/select-action.vue'),
            meta: {
                title: '湖北移动直连'
            }
        },
        {
            path: '/merchant',
            name: 'merchantIndex',
            component: () => import('./views/merchant/index.vue'),
            meta: {
                title: '商户签约'
            }
        },
        {
            path: '/merchant/service-agreement',
            name: 'serviceAgreement',
            component: () => import('./views/merchant/service-agreement.vue'),
            meta: {
                title: '服务协议'
            }
        },
        {
            path: '/merchant/success',
            name: 'merchantSuccess',
            component: () => import('./views/merchant/success.vue'),
            meta: {
                title: '注册成功'
            }
        },
        {
            path: '/trade',
            name: 'tradeIndex',
            component: () => import('./views/trade/index.vue'),
            meta: {
                title: '业务办理'
            }
        },
        {
            path: '/trade/create',
            name: 'create',
            component: () => import('./views/trade/create.vue'),
            meta: {
                title: '订单确认'
            }
        },
        {
            path: '/trade/pay',
            name: 'pay',
            component: () => import('./views/trade/pay.vue'),
            meta: {
                title: '订单支付'
            }
        },
        {
            path: '/trade/payment-agreement',
            name: 'paymentAgreement',
            component: () => import('./views/trade/payment-agreement.vue'),
            meta: {
                title: '支付协议'
            }
        },
        {
            path: '/refund/refund-query',
            name: 'refundQuery',
            component: () => import('./views/refund/refund-query.vue'),
            meta: {
                title: '退款查询'
            }
        },
        {
            path: '/refund/refund-confirm',
            name: 'refundConfirm',
            component: () => import('./views/refund/refund-confirm.vue'),
            meta: {
                title: '退款查询'
            }
        },
        {
            path: '/refund',
            name: 'refund',
            component: () => import('./views/refund/refund.vue'),
            meta: {
                title: '订单退款'
            }
        },
        {
            path: '/order/list',
            name: 'orderList',
            component: () => import('./views/order/list.vue'),
            meta: {
                title: '订单列表'
            }
        },
        {
            path:'/trade/fail',
            name:'authFail',
            component:() => import('./views/trade/auth-fail.vue'),
            meta: {
                title: '收款失败'
            }
        },
        {
            path:'/trade/success',
            name:'authSuccess',
            component:() => import('./views/trade/auth-success.vue'),
            meta: {
                title: '授权成功'
            }
        },
    ]
})
