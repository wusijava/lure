<template>
    <div class="box">
        <van-form style="margin-top: 10px" @submit="toSearch">
            <van-field
                    v-model="form.outTradeNo"
                    clearable
                    type="text"
                    placeholder="请输入湖北移动订单编号"
            />
            <van-field
                    v-model="form.wayId"
                    clearable
                    type="text"
                    placeholder="请输入门店渠道编号"
            />
            <div style="margin: 16px;">
                <van-button class="button" block type="info" native-type="submit">
                    查询
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import {queryRefund} from '../../api/refund';

    export default {
        name: "refundIndex",
        data() {
            return {
                form: {}
            }
        },
        mounted() {
        },
        methods: {
            toSearch: async function() {
                if(this.form.outTradeNo == '' || this.form.outTradeNo == null) {
                    this.$toast({
                        message: '订单编号不能为空',
                        icon: 'warning-o'
                    });
                    return;
                }
                if(this.form.wayId == '' || this.form.wayId == null) {
                    this.$toast({
                        message: '渠道编码不能为空',
                        icon: 'warning-o'
                    });
                    return;
                }
                const result = await queryRefund(this.form)
                if(result.data.code == '20000') {
                    this.form = result.data.data;
                    this.$router.push({
                        name:'refundConfirm',
                        query:{
                            outTradeNo: this.form.outTradeNo,
                            wayId: this.form.wayId
                        }});
                }else {
                    this.$toast({
                        message: result.data.msg,
                        icon: 'warning-o'
                    });
                }
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
        background: #F2F5FA;
    }
    .button {
        border-radius: 3px;
    }
</style>