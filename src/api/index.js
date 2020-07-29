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
        createOrder:'api/trade/createOrder',
        payDetail:'api/trade/getPayDetail',
        queryState:'com.zanclick.query.orderState',
        create:'create/auth/prePay',
        queryContract:'contract/orderDetailTest',
        saveContract:'contract/signatureUpload',
    },
    upload:{
        getUploadToken:'/upload/getToken'
    },
}
export default method;
