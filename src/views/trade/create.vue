<template>
    <div class="box" v-if="showForm===true">
        <van-cell-group>
            <van-cell
                    :title="detail.name"
                    :label="detail.desc"
                    title-class="title"
            />
            <van-field
                    v-model="detail.settleAmt"
                    clearable
                    :clickable="false"
                    :placeholder="detail.settleAmt"
                    input-align="right"
                    label-width="110"
                    label="套餐金额"
                    readonly
            >
            </van-field>
            <van-field
                    v-model="detail.num"
                    clearable
                    :clickable="false"
                    type="digit"
                    :placeholder="detail.num + '期'"
                    input-align="right"
                    label-width="110"
                    label="套餐期数"
                    readonly
            >
            </van-field>
            <van-field
                    v-model="detail.payAmt"
                    clearable
                    :clickable="false"
                    :placeholder="detail.payAmt"
                    input-align="right"
                    label-width="110"
                    label="冻结金额"
                    readonly
            >
            </van-field>
            <van-field
                    v-model="form.customerName"
                    clearable
                    :clickable="false"
                    placeholder="请输入客户姓名"
                    input-align="right"
                    label-width="110"
                    label="客户姓名"
            >
            </van-field>
            <van-field
                    v-model="form.customerPhone"
                    clearable
                    :clickable="false"
                    placeholder="请输入办理业务手机号"
                    input-align="right"
                    label-width="110"
                    label="客户手机号"
            >
            </van-field>
            <van-field
                    v-model="form.customerCertNo"
                    clearable
                    :clickable="false"
                    placeholder="请输入身份证号"
                    input-align="right"
                    label-width="110"
                    label="客户身份证号"
            >
            </van-field>

            <van-cell
                    v-if="cashier == '请选择营业员'"
                    title="选择营业员"
                    is-link
                    :value="cashier"
                    @click="showPicker = true">
            </van-cell>

            <van-field
                    v-else
                    is-link
                    :value="cashier"
                    @click="showPicker = true"
                    input-align="right"
                    label-width="110"
                    label="选择营业员"
            />

            <van-popup
                    v-model="showPicker"
                    position="bottom"
            >
                <van-picker
                        show-toolbar
                        :columns="cashierList"
                        @cancel="showPicker = false"
                        @confirm="onConfirm"
                />
            </van-popup>
        </van-cell-group>

        <div class="box2" style="margin: 15px">
            <van-button class="button" @click="submit" type="info" size="large" :loading="loading">确认并付款</van-button>
        </div>
    </div>

    <div v-else-if="showForm === false">

    </div>
    <div v-else style="margin-top: 40%">
        <van-loading type="spinner" color="#1989fa"/>
    </div>
</template>

<script>
    import {getCashierList} from '../../api/trade'
    import areaJson from '@/util/area'
    import util from '../../util/util';

    export default {
        name: "merchantIndex",
        data() {
            return {
                loading: false,
                showForm: true,
                detail: {},
                form: {
                    customerName: '',
                    customerPhone: '',
                    customerCertNo: ''
                },
                showPicker: false,
                cashier: '请选择营业员',
                cashierList: [],
            }
        },
        mounted() {
            this.detail = this.$route.query.mealDetail
            this.wayId = this.$route.query.wayId
            this.getCashierList()
            // this.getPayDetail()
        },
        methods: {
            getCashierList: async function() {
                let params = {}
                params.wayId = this.wayId

                const result = await getCashierList(params)
                console.log(result.data)
                if(result.data.code == '20000') {
                   this.cashier = result.data.data
                }else{
                    this.$toast({
                        message: result.data.msg,
                        icon: 'warning-o'
                    });
                }
                this.showPicker = false;
            },
            onConfirm() {

            },
            async submit() {
                let params = {};
                params.mealId = this.detail.id
                params.customerName = this.form.customerName
                params.customerPhone = this.form.customerPhone
                params.customerCertNo = this.form.customerCertNo
                params.cashierId = this.cashier.id
                params.wayId = this.wayId
                const result = await getCashierList(params)
                console.log(result.data)
                if(result.data.code == '20000') {
                    console.log(result.data)
                    this.cashier = result.data.data
                }else{
                    this.$toast({
                        message: result.data.msg,
                        icon: 'warning-o'
                    });
                }
                this.$router.push({name:'pay'});
            },
        }
    }
</script>

<style scoped>
    .box2 {
        margin-top: 10px;
    }
    .box::before {
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #F2F5FA;
    }
    .button {
        border-radius: 6px;
    }
    .title {
        font-size: 1.125rem;
    }
</style>