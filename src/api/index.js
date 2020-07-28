const method = {
    user:{
        login: '/web/v1/login',
    },
    merchant:{
        submit: '/merchant/merchantApply',
    },
    trade:{
        store: '/meal/getStoreInfo',
        mealList: '/meal/getMealList',
        cashierList: '/meal/getCashierList',
        createOrder:'/trade/createOrder',
        payDetail:'/meal/getPayDetail',
        queryState:'com.zanclick.query.orderState',
        create:'/create/auth/prePay',
        queryContract:'con.zanclick.zcpay.contract.getOrderDetail',
        saveContract:'con.zanclick.zcpay.contract.saveNameAndCertNo',
    },
    upload:{
        getUploadToken:'upload/getToken'
    },
}
export default method;
