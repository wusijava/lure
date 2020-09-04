<template>
    <div class="box">
        <div class="content">
            <div style="margin-bottom: 25px">
                <!--<div class="module" style="margin-right: 25px" @click="toBusiness(1)">
                    <img src="../../../src/assets/img/icon_order@2x.png"/>
                    <p>办单</p>
                </div>-->
                <div class="module" @click="toSign">
                    <img src="../../../src/assets/img/icon_sign@2x.png"/>
                    <p>新增消费</p>
                </div>
            </div>
            <div>
                <!--<div class="module" style="margin-right: 25px" @click="toRefund">
                    <img src="../../../src/assets/img/icon_refund@2x.png"/>
                    <p>退款</p>
                </div>-->
                <div class="module" @click="toSearch(2)">
                    <img src="../../../src/assets/img/icon_inquire@2x.png"/>
                    <p>消费记录</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "selectAction",
        data(){
            return{
                appId: '',
                indexData:[],
                row:null
            }
        },
        //页面加载就开始查询按钮数据
        mounted() {
            if(ap) {
                // ap.setOptionButton({
                //     reset:true
                // });

                //隐藏右上角按钮
                ap.hideOptionButton();
            }
        },
        methods:{
            toSign(){
                this.$router.push({name:'create'});
            },
            toBusiness(info){
                this.$router.push({name:'login', query:{type: info}});
            },
            toRefund() {
                this.$router.push({name:'refundQuery'});
            },
            toSearch(info) {
                this.$router.push({name:'login', query:{type: info}});
            }
        }
    }
</script>

<style scoped>
    .box{
        width: 100%;
    }
    .box::before {
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #ffffff;
    }
    .content {
        position: relative;
        text-align: center;
        margin: 25px 10px;
    }
    .module {
        background-color: #ffffff;
        box-shadow: 1px 1px 8px 1px #D2DDFF;
        border-radius: 8px;
        padding: 20px;
        width: 30%;
        display: inline-block;
    }
    .module img{
        width: 33px;
    }
    .module p{
       margin: 0;
    }


</style>