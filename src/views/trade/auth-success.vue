<template>
    <div class="box">
        <div class="main">
            <div style="text-align: center">
                <img src="@/assets/img/icon_complete@2x.png" style="width: 70px;height: 100%;margin-top: 16px">
                <p class="success">授权成功</p>
                <p class="money"><span style="font-size: 20px">￥</span>{{totalMoney}}</p>
            </div>
            <div class="info">
                <van-row type="flex" justify="space-between">
                    <van-col span="6"><p>商品</p></van-col>
                    <van-col span="18" class="right">
                        <p>{{title}}</p></van-col>
                </van-row>
                <van-row type="flex" justify="space-between">
                    <van-col span="6"><p>订单编号</p></van-col>
                    <van-col span="18" class="right">
                        <p>{{tradeNo}}</p>
                    </van-col>
                </van-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "authSuccess",
        data() {
            return {
                title:this.$route.query.title,
                tradeNo: this.$route.query.tradeNo,
                totalMoney: this.$route.query.totalMoney
            }
        },
        mounted() {
            // if(ap) {
            //     ap.setOptionButton({
            //         items: [{
            //             title: '切换账号'
            //         }],
            //         onClick: (data)=>{
            //             ap.confirm({
            //                 title: '温馨提示',
            //                 content: '是否确认切换账号？',
            //                 confirmButtonText: '确认',
            //                 cancelButtonText: '取消'
            //             }, function(){
            //                 window.location.href="/h5/logout?type=1"
            //             });
            //         }
            //     });
            // }
        },
        methods:{
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
        padding: 0 10px 10px 10px;
    }
    .info .right{
        text-align: right;
    }
    .info  p{
        font-size: 14px;
        line-height: 18px;
        word-wrap : break-word;
        margin-top: 3px;
        margin-bottom: 3px;
    }

</style>
