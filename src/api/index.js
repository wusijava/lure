import {addHouseWork} from "./homework";

const method = {
    user:{
        login: '/login',
        changePassWord:  '/api/web/user/changePassword'
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
        changeSsqState:'/api/ssq/changeSsqState',
        history: '/api/ssq/history',
        gaiLv: '/api/ssq/getHistoryTimes',
        blueThree: '/api/ssq/blueThree',
        mathLog: '/api/math/homeworkLog',
        handleState: '/product/handleState',
        homeworkTotal: '/api/math/homeworkTotal',
        mind: 'api/mind',
        getTime: 'getTime',
        monthSpend: '/monthSpend',
        shouDongSaoMiao: '/product/getProductState',
        refundMoney: 'refundMoney',
        passwordList: 'api/password/list',
        save: 'api/password/save',
        showPwd: 'api/password/showPassword',
        deletePassword: 'api/password/deletePassword'



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
        suiJi: '/api/ssq/suiJi',
        getOnlineNum: '/api/ssq/getOnlineNum',
        ssqQuick: '/api/ssq/SsqQuick',
        getHistory: '/api/ssq/getHistory',
        getTi: '/api/math/getTi',
        checkTi: '/api/math/checkTi',
        dingDing: '/sendDingDingMessage',
        cuoTi: '/api/math/cuoTi',
        shouDong: '/api/ssq/getBonusNum',
        saveImg: '/api/ssq/saveImg',
        english: '/english',
        du: '/du',
        wangYi: '/wangYi',
        changeBlue: '/api/ssq/changeBlue',
        huiFu: '/huiFu',
        getSongCi: '/songCi',
        getTaiCi: '/dialogue',
        getTiKindTwo: '/api/math/getTiKindTwo',
        checkTiKindTwo: '/api/math/checkTiKindTwo'

    }
}
export default method;
