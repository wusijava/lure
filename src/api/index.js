const method = {
    user:{
        login: '/web/v1/login',
    },
    merchant:{
        submit: 'zanclick.Pay.Create.Merchant',
    },
    trade:{
        createOrder:'com.zanclick.createOrder',
        queryState:'com.zanclick.query.orderState',
        create:'com.zanclick.create.auth.prePay',
        queryContract:'con.zanclick.zcpay.contract.getOrderDetail',
        saveContract:'con.zanclick.zcpay.contract.saveNameAndCertNo',
    },
    upload:{
        getUploadToken:'upload/getToken'
    },
}
export default method;
