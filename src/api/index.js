const method = {
    user:{
        login: '/web/v1/login',
    },
    merchant:{
        submit: '/h5/v1/merchant/merchantApply',
    },
    trade:{
        createOrder:'com.zanclick.createOrder',
        queryState:'com.zanclick.query.orderState',
        create:'/h5/v1/create/auth/prePay',
        queryContract:'con.zanclick.zcpay.contract.getOrderDetail',
        saveContract:'con.zanclick.zcpay.contract.saveNameAndCertNo',
    },
    upload:{
        getUploadToken:'upload/getToken'
    },
}
export default method;
