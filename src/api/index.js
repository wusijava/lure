const method = {
    user:{
        login: '/login',
    },
    merchant:{
        submit: '/merchant/merchantApply',
    },
    trade:{
        createOrder:'com.zanclick.createOrder',
        queryState:'com.zanclick.query.orderState',
        create:'/create/auth/prePay',
        queryContract:'con.zanclick.zcpay.contract.getOrderDetail',
        saveContract:'con.zanclick.zcpay.contract.saveNameAndCertNo',
    },
    upload:{
        getUploadToken:'/upload/getToken'
    },
}
export default method;
