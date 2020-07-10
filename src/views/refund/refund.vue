<template>
    <div class="box">
        <div class="main">
            <p>请顾客将支付宝打开，“扫一扫”向我付款</p>
            <div class="content-title">
                <p>订单编号：76026434644956</p>
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
                <div class="content-item">
                    <div class="receive">
                        <p>￥<span style="font-size: 22px;font-weight: bold;">534.00</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {submit} from '@/api/merchant'
    import util from '../../util/util';
    import QrCode from "../../components/QrCode";

    export default {
        name: "refund",
        data() {
            return {
                pay: null,
                url: null,
                queryInterval: null
            }
        },
        components:{
            QrCode
        },
        mounted() {
        },
        methods: {
            toSearch() {
                this.$router.push({name:'create'});
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
        color: #121212;
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