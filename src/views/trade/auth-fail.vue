<template>
    <div class="box">
        <div class="main">
            <h1>收款失败</h1>
        </div>
        <div class="content">
            <img src="@/assets/img/ico_lost@2x.png">
            <p>{{desc}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "authFail",
        data() {
            return {
                desc:null,
            }
        },
        mounted() {
            this.desc = this.$route.query.desc;
        }
    }
</script>
<style scoped>
    .box{
        padding: 15px;
    }
    .main{
        text-align: center;
        margin-bottom: 40px;
    }
    .main img{
        width: 60px;
    }
    .main h1 {
        font-family: PingFang-SC-Regular;
        font-size: 1em;
        text-align: center;
        line-height: 10px;
        color: #666666;
        padding: 5px 0;
    }
    .content{
        text-align: center;
        width: 100%;
    }
    .content img{
        width: 70px;
        height: 70px;
        margin: 0 auto;
    }
    .content span{
        font-family: PingFang-SC-Regular;
        font-size: 15px;
        color: #081828;
        line-height: 24px;
    }

</style>
