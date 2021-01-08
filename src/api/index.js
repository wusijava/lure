import {addHouseWork} from "./homework";

const method = {
    user:{
        login: '/login',
    },
    merchant:{
        submit: '/merchant/merchantApply',
    },
    trade:{
        store: 'api/merchantStore/getStoreInfo',
        mealList: 'api/meal/getMealList',
        cashierList: 'api/merchantStore/getCashierList',
        createOrder:'/saveSpend',
        payDetail:'api/trade/getPayDetail',
        create:'createAuthPrePay',
        queryContract:'orderDetail',
        queryState:'api/trade/queryTradeState',
        saveContract:'contract/signatureUpload',
        createSell: "order/save"
    },
    refund:{
        queryRefund: 'refund/getOrderResult',
        queryRefundDetail: 'refund/getRefundDetail',
        confirmRefund: 'refund/getRefundQr',
        queryTradeState: 'refund/queryTradeState'
    },
    order:{
        orderList: 'spendList',
        detail: 'spendDetail',
        taoList: 'logList',
        taoDetail: 'logDetail',
        showProductState: '/product/showProductState',
        monitorRecord: '/product/monitorRecord',
        changeState: '/product/changeState',
        deleteRow: '/spendDel',
        myTask : '/api/myTask',
        receiveWork: '/api/receiveWork',
        address: '/api/address',
        remind: '/api/remind',
        deleteRec: '/api/deleteRec',
        ssqRecord: '/api/ssq/getSsqRecord',
        buyRecord: '/api/ssq/buyRecord',
        changeSsqState:'/api/ssq/changeSsqState'



    },
    upload:{
        getUploadToken:'/upload/getToken'
    },
    homework:{
        addHomework:'/api/addHomework',
        homeworkList:'/api/homeworkList',
        addHouseWork:'/api/addHouseWork',
        sendMsg: '/api/sendMsg',
        saveAdd :'/api/saveAdd',
        getResult: '/api/ssq/getSsqNum',
        addSsq: '/api/ssq/addSsq',
        faQiDaiMai: '/api/ssq/addSsq',
        suiJi: '/api/ssq/suiJi'

    }
}
export default method;
