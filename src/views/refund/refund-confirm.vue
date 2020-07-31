<template>
    <div class="box">
        <van-cell-group style="margin-top: 10px">
            <van-field
                    v-model="detail.storeName"
                    clearable
                    :clickable="false"
                    :placeholder="detail.storeName"
                    input-align="right"
                    label-width="100"
                    label="商户名称"
                    readonly
            />
            <van-field
                    v-model="detail.outTradeNo"
                    clearable
                    :clickable="false"
                    :placeholder="detail.outTradeNo"
                    input-align="right"
                    label-width="100"
                    label="订单编号"
                    readonly
            />
            <van-field
                    v-model="detail.amount"
                    clearable
                    :clickable="false"
                    :placeholder="detail.amount"
                    input-align="right"
                    label-width="100"
                    label="订单金额"
                    readonly
            />
            <van-field
                    v-model="detail.num"
                    clearable
                    :clickable="false"
                    :placeholder="detail.num + '期'"
                    input-align="right"
                    label-width="100"
                    label="分期期数"
                    readonly
            />
            <van-field
                    v-model="detail.sellerNo"
                    clearable
                    :clickable="false"
                    :placeholder="detail.sellerNo"
                    input-align="right"
                    label-width="100"
                    label="支付宝付款账号"
                    readonly
            />
            <van-field
                    v-model="detail.finishTime"
                    clearable
                    :clickable="false"
                    :placeholder="detail.finishTime"
                    input-align="right"
                    label-width="100"
                    label="交易时间"
                    readonly
            />
            <van-field
                    v-model="detail.refundTypeDesc"
                    clearable
                    :clickable="false"
                    :placeholder="detail.refundTypeDesc"
                    input-align="right"
                    label-width="100"
                    label="是否赔偿违约金"
                    readonly
            />
            <div style="margin: 16px;">
                <van-button class="button" block type="info" native-type="submit" @click="confirmRefund">
                    确认退款
                </van-button>
            </div>
        </van-cell-group>
    </div>
</template>

<script>
    import {queryRefundDetail,confirmRefund} from '../../api/refund'

    export default {
        name: "refundConfirm",
        data() {
            return {
                outTradeNo: '',
                wayId: '',
                detail: {},
                refund: {}
            }
        },
        mounted() {
            this.outTradeNo = this.$route.query.outTradeNo;
            this.wayId = this.$route.query.wayId;
            this.getRefundDetail();
        },
        methods: {
            getRefundDetail: async function() {
                let params = {}
                params.outTradeNo = this.outTradeNo;
                params.wayId = this.wayId;

                const result = await queryRefundDetail(params)
                if(result.data.code == '20000') {
                    this.detail = result.data.data
                }else {
                    this.$toast({
                        message: result.data.msg,
                        icon: 'warning-o'
                    });
                }
            },
            confirmRefund: async function() {
                this.$router.push({name:'refund',query: { outTradeNo: this.outTradeNo, wayId: this.wayId}});
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