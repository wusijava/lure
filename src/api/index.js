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
        list: 'spendList',
        detail: 'spendDetail',
        taoList: 'logList',
        taoDetail: 'logDetail'

    },
    upload:{
        getUploadToken:'/upload/getToken'
    },
}
export default method;
