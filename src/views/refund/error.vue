<template>
    <div class="box">
        <div class="main">
            <h1>冻结失败</h1>
        </div>
        <div class="content">
            <img src="@/assets/img/ico_lost@2x.png">
            <p>{{desc}}</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: "error",
        data() {
            return {
                desc:null,
            }
        },
        mounted() {
            this.desc = this.$route.query.desc;
        },
        methods:{
        }
    }
</script>

<style scoped lang="stylus">
    .box{
        padding: 15px;
    }
    .main {
        overflow: scroll
    }
</style>
