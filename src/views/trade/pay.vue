<template>
    <div class="box">
        <div class="main">
            <p>请顾客将支付宝打开，“扫一扫”向我付款</p>
            <div class="content-title">
                <p>{{detail.mealTitle}}</p>
            </div>
            <div class="content">
                <div class="content-code">
                    <div class="code" v-if="url">
                        <QrCode
                                :width="290"
                                :height="232"
                                :url="url"
                        />
                    </div>
                </div>
                <div class="content-price">
                    <div style="border-top: #efefef 1px solid;width:82%;margin-left: 10%;"></div>
                    <div class="content-item">
                        <div class="receive">
                            <img src="../../assets/img/icon_receive@2x.png">
                            <p>￥<span style="font-size: 22px;font-weight: bold;">{{detail.settleAmount}}</span></p>
                        </div>
                        <div class="pay">
                            <img src="../../assets/img/icon_pay@2x.png">
                            <p style="margin-top:15px;">分<span style="font-weight: bold">{{detail.num}}</span>期(含手续费)</p>
                            <p>￥<span style="font-size: 22px;font-weight: bold;">{{detail.amount}}</span>&nbsp;/期</p>
                        </div>
                    </div>
                </div>
            </div>
            <p style="text-align: left">注：该订单冻结期数为{{detail.num}}期，每期还款金额{{detail.eachMoney}}元</p>
        </div>
    </div>
</template>

<script>
    import {getPayDetail,createOrder} from "../../api/trade";
    import util from '../../util/util';
    import QrCode from "../../components/QrCode";

    export default {
        name: "pay",
        data() {
            return {
                pay: null,
                url: null,
                queryInterval: null,
                detail: {}
            }
        },
        components:{
            QrCode
        },
        mounted() {
            this.getPayDetail();
        },
        methods: {
            getPayDetail: async function() {
                let params = {}
                params.tradeNo = '123'
                const result = await getPayDetail(params)
                console.log(result.data)
                if(result.code == '20000') {
                    this.detail = result.data
                    console.log(result.data)
                }else {
                    this.$toast({
                        message: result.message,
                        icon: 'warning-o'
                    });
                }
            },
            async createPay(){
                let params = {};
                const result = await createOrder(params);
                if(result.code == "20000"){
                    this.pay = result.data;
                    this.url = this.pay.url;
                    this.queryInterval = setInterval(this.queryStatus,5000);
                }else {
                    this.$dialog.alert({
                        title: "订单创建失败",
                        message: result.message,
                    });
                }
            },
            async reload(){
                window.location.reload()
            }
        }
    }
</script>

<style scoped>
    .box{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #3385FF;
    }
    .main {
        padding: 20px;
    }
    .main p {
        font-size: 0.75rem;
        text-align: center;
        color: #ffffff;
        font-family: PingFang-SC-Regular;
    }
    .content{
        width: 100%;
        height: 420px;
        padding-bottom: 15px;
        border-radius: 0 0 6px 6px;
        background-color: #ffffff;
    }
    .content-title {
        background-color: #c6ddff;
        height: 42px;
        border-radius: 6px 6px 0px 0px;
    }
    .content-title p {
        font-size: 16px;
        line-height: 40px;
        color: #3385ff;
        text-align: center;
    }
    .content-code{
        /*padding:15px 47px ;*/
    }
    .content-code .code{
        width: 100%;
        height: auto;
        background-color: #ffffff;
    }
    .content-item{
        display: flex;
        text-align: center;
    }
    .content-item .receive,.pay{
        flex: 1;
        padding: 20px 0;
    }
    .receive img,.pay img{
        width: 30px;
        height: 30px;
    }
    .receive>p{
        color: #121212;
        font-size: 13px;
        padding-top: 10px;
        font-family: PingFang-SC-Regular;
    }
    .content-item .pay{
        flex: 1;
    }
    .pay p{
        font-size: 13px;
        color: #121212;
        font-family: PingFang-SC-Regular;
        margin: 0;
        border-left: 1px solid #F2F5FA;
    }
</style>