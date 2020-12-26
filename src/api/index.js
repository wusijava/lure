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
        changeState: '/product/changeState'

    },
    upload:{
        getUploadToken:'/upload/getToken'
    },
    homework:{
        addHomework:'/api/addHomework',
        homeworkList:'/api/homeworkList'
    }
}
export default method;
