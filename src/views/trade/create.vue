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
                    v-model="customerName"
                    clearable
                    :clickable="false"
                    placeholder="请输入客户姓名"
                    input-align="right"
                    label-width="110"
                    label="客户姓名"
            >
            </van-field>
            <van-field
                    v-model="customerPhone"
                    clearable
                    :clickable="false"
                    type="tel"
                    maxlength="11"
                    placeholder="请输入办理业务手机号"
                    input-align="right"
                    label-width="110"
                    label="客户手机号"
            >
            </van-field>
            <van-field
                    v-model="customerCertNo"
                    clearable
                    :clickable="false"
                    maxlength="18"
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
                        v-model="cashier"
                        show-toolbar
                        :columns="cashierList"
                        value-key="name"
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
    import {getCashierList,createOrder} from '../../api/trade'

    export default {
        name: "create",
        data() {
            return {
                loading: false,
                showForm: true,
                detail: {},
                customerName: '',
                customerPhone: '',
                customerCertNo: '',
                showPicker: false,
                cashier: '请选择营业员',
                cashierCode: '',
                cashierList: [],
                storeNo:  JSON.parse(localStorage.getItem('store')).storeNo,
                wayId:  JSON.parse(localStorage.getItem('store')).wayId,
                tradeNo: ''
            }
        },
        mounted() {
            this.detail = JSON.parse(localStorage.getItem('info'))
            this.getCashierList()
            console.log(JSON.parse(localStorage.getItem('store')).wayId)
        },
        methods: {
            getCashierList: async function() {
                let params = {}
                params.storeNo = this.storeNo

                const result = await getCashierList(params)
                if(result.data.code == '20000') {
                    this.cashierList = result.data.data
                }else{
                    this.$toast({
                        message: result.data.msg,
                        icon: 'warning-o'
                    });
                }
                this.showPicker = false;
            },
            onConfirm(value) {
                this.cashier = value.name;
                this.cashierCode = value.id;
                this.showPicker = false;
            },
            async submit() {
                let params = {};
                if(this.customerName == '' || this.customerName == null) {
                    this.$toast({
                        message: '客户姓名不能为空',
                        icon: 'warning-o'
                    });
                    return;
                }
                if(this.customerPhone == '' || this.customerPhone == null) {
                    this.$toast({
                        message: '客户手机号不能为空',
                        icon: 'warning-o'
                    });
                    return;
                }
                if(this.customerCertNo == '' || this.customerCertNo == null) {
                    this.$toast({
                        message: '身份证号不能为空',
                        icon: 'warning-o'
                    });
                    return;
                }
                if(this.cashierCode == '' || this.cashierCode == null) {
                    this.$toast({
                        message: '请选择营业员',
                        icon: 'warning-o'
                    });
                    return;
                }
                params.mealId = this.detail.id
                params.customerName = this.customerName
                params.customerPhone = this.customerPhone
                params.customerCertNo = this.customerCertNo
                params.cashierId = this.cashierCode
                params.wayId = this.wayId
                params.storeNo = this.storeNo

                const result = await createOrder(params)
                if(result.data.code == '20000') {
                    this.tradeNo = result.data.data.tradeNo
                }else{
                    this.$toast({
                        message: result.data.msg,
                        icon: 'warning-o'
                    });
                }
                this.$router.push({name:'pay', query:{tradeNo: this.tradeNo}});
            }
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