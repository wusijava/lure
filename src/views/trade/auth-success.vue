<template>
    <div class="box">
        <div class="main" v-if="pay != null">
            <div style="text-align: center">
                <img src="@/assets/img/icon_complete@2x.png" style="width: 70px;height: 100%;margin-top: 16px">
                <p class="success">授权成功</p>
                <p class="money"><span style="font-size: 20px">￥</span>{{pay.totalMoney}}</p>
            </div>
            <div class="info">
                <div class="left">
                    <p>商品</p>
                    <p>订单编号</p>
                </div>
                <div class="right">
                    <p>{{pay.title}}</p>
                    <p>{{pay.tradeNo}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {tradeStateQuery} from "../../api/trade";

    export default {
        name: "authSuccess",
        data() {
            return {
                pay:null,
                url:null,
                receiveRedPacket: 1 //1 可以领 0不可以领
            }
        },
        mounted() {
            this.queryStatus();
        },
        methods:{
            async queryStatus(){
                let params = {};
                params.tradeNo = this.$route.query.tradeNo
                const result = await tradeStateQuery(params)
                if(result.data.code=="20000"){
                    this.pay = result.data.data;
                    this.url = this.pay.url;
                    this.receiveRedPacket = result.data.receiveRedPacket
                }
            }
        }
    }
</script>

<style scoped>
    .box{
        padding: 15px;
    }
    .main {
        overflow: scroll
    }
    .main .success{
        font-family: PingFang-SC-Bold;
        font-size: 18px;
        color: #3396ff;
    }
    .main .money{
        font-family: Roboto-Bold;
        color: #081828;
        font-size: 35px;
        margin-top: 10px;
    }
    .info{
        display: flex;
        padding: 0 16px;
        margin-bottom: 40px;
        margin-top: -20px;
    }
    .info .left{
        flex: 1;
        text-align: left;
    }
    .info .left p{
        font-family: PingFang-SC-Regular;
        font-size: 13px;
        line-height: 30px;
        color: #666666;
        margin-bottom: -5px;
    }
    .info .right{
        flex: 1;
        text-align: right;
    }
    .info .right p{
        font-family: PingFang-SC-Regular;
        font-size: 13px;
        line-height: 30px;
        color: #081828;
        margin-bottom: -5px;
    }

</style>
