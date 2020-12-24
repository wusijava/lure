<template>
    <div class="box">
        <div class="content">
            <div style="margin-bottom: 25px">
                <div class="module" style="margin-right: 25px" @click="toBusiness(1)">
                    <img src="../../../src/assets/img/gu.png"/>
                    <p>新增销售</p>
                </div>
                <div class="module" @click="toSign">
                    <img src="../../../src/assets/img/jita.png"/>
                    <p>新增消费</p>
                </div>
            </div>
            <div>
                <div class="module" style="margin-right: 25px" @click="toRefund">
                    <img src="../../../src/assets/img/jiat2.png"/>
                    <p>销售记录</p>
                </div>
                <div class="module" @click="spend">
                    <img src="../../../src/assets/img/mai.png"/>
                    <p>消费记录</p>
                </div>
            </div>
            <div style="margin-top: 25px">
                <div class="module" style="margin-right: 25px" @click="toSearch">
                    <img src="../../../src/assets/img/bf2.png"/>
                    <p>用户登录</p>
                </div>
                <div class="module" @click="proState">
                    <img src="../../../src/assets/img/gu2.png"/>
                    <p>商品状态</p>
                </div>
            </div>
            <div style="margin-top: 25px">
                <div class="module" style="margin-right: 25px" @click="homework">
                    <img src="../../../src/assets/img/book.png"/>
                    <p>添加作业</p>
                </div>
                <div class="module" @click="homeworkList">
                    <img src="../../../src/assets/img/dog.png"/>
                    <p>作业记录</p>
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
         /*   if(ap) {
                // ap.setOptionButton({
                //     reset:true
                // });

                //隐藏右上角按钮
                ap.hideOptionButton();
            }*/
        },
        methods:{
            toSign(){
                this.$router.push({name:'create'});
            },
            toBusiness(info){
                this.$router.push({name:'taoBao'});
            },
            toRefund() {
                this.$router.push({name:'taoList'});
            },
            toSearch() {
                console.log("login")
                this.$router.push({name:'login'});
            },
            spend(){
                this.$router.push({name:'orderList'});
            },
            proState(){
                this.$router.push({name:'productState'});
            },
            homework(){
                this.$router.push({name:'addHomework'});
            },
            homeworkList(){
                this.$router.push({name:'homeworkList'});
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