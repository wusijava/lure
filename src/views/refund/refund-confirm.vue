<template>
    <div class="box">
        <van-form style="margin-top: 10px" @submit="toSearch">
            <van-field
                    v-model="form.userName"
                    clearable
                    :clickable="false"
                    placeholder="湛江市赤坎区世贸通汇手机经营部"
                    input-align="right"
                    label-width="110"
                    label="商户名称"
                    readonly
            />
            <van-field
                    v-model="form.userName"
                    clearable
                    :clickable="false"
                    placeholder="76026434644956"
                    input-align="right"
                    label-width="110"
                    label="订单编号"
                    readonly
            />
            <van-field
                    v-model="form.userName"
                    clearable
                    :clickable="false"
                    placeholder="800.00"
                    input-align="right"
                    label-width="110"
                    label="订单金额"
                    readonly
            />
            <van-field
                    v-model="form.userName"
                    clearable
                    :clickable="false"
                    placeholder="24"
                    input-align="right"
                    label-width="110"
                    label="分期期数"
                    readonly
            />
            <van-field
                    v-model="form.userName"
                    clearable
                    :clickable="false"
                    placeholder="17954625426@.com"
                    input-align="right"
                    label-width="110"
                    label="支付宝付款账号"
                    readonly
            />
            <van-field
                    v-model="form.userName"
                    clearable
                    :clickable="false"
                    placeholder="2020-06-29 21:13:15"
                    input-align="right"
                    label-width="110"
                    label="交易时间"
                    readonly
            />
            <van-field
                    v-model="form.userName"
                    clearable
                    :clickable="false"
                    placeholder="无需赔偿违约金"
                    input-align="right"
                    label-width="110"
                    label="是否赔偿违约金"
                    readonly
            />
            <div style="margin: 16px;">
                <van-button class="button" block type="info" native-type="submit">
                    确认退款
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import {submit} from '@/api/merchant'
    import util from '../../util/util';

    export default {
        name: "refundIndex",
        data() {
            return {
                form: {
                    userName: null,
                }
            }
        },
        mounted() {
        },
        methods: {
            toSearch() {
                this.$router.push({name:'refund'});
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