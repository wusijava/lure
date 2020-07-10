<template>
    <div class="box" v-if="showForm===true">
        <van-cell-group>
            <van-cell :title="title" :label="content" title-class="title"/>
            <van-field
                    v-model="form.userName"
                    clearable
                    :clickable="false"
                    placeholder="534.3"
                    input-align="right"
                    label-width="110"
                    label="套餐金额"
                    readonly
            >
            </van-field>
            <van-field
                    v-model="form.userName"
                    clearable
                    :clickable="false"
                    placeholder="24"
                    input-align="right"
                    label-width="110"
                    label="套餐期数"
                    readonly
            >
            </van-field>
            <van-field
                    v-model="form.userName"
                    clearable
                    :clickable="false"
                    placeholder="600"
                    input-align="right"
                    label-width="110"
                    label="冻结金额"
                    readonly
            >
            </van-field>
            <van-field
                    v-model="form.userName"
                    clearable
                    :clickable="false"
                    placeholder="请输入客户姓名"
                    input-align="right"
                    label-width="110"
                    label="客户姓名"
            >
            </van-field>
            <van-field
                    v-model="form.userName"
                    clearable
                    :clickable="false"
                    placeholder="请输入办理业务手机号"
                    input-align="right"
                    label-width="110"
                    label="客户手机号"
            >
            </van-field>
            <van-field
                    v-model="form.password"
                    clearable
                    :clickable="false"
                    placeholder="请输入身份证号"
                    input-align="right"
                    label-width="110"
                    label="客户身份证号"
            >
            </van-field>
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
    import {submit} from '../../api/merchant'
    import areaJson from '@/util/area'
    import util from '../../util/util';

    export default {
        name: "merchantIndex",
        data() {
            return {
                appId: '202005041652231204911',
                loading: false,
                showForm: true,
                title: '套餐一号',
                content: '兑换时间法华寺见好就收分开发的',
                form: {
                    sellerNo: null,//支付宝账号
                    contactName: null,
                    contactPhone: null,
                    storeSubjectName: null,
                    storeSubjectCertNo: null,
                    storeProvince: null,
                    storeProvinceCode: null,
                    storeCity: null,
                    storeCityCode: null,
                    storeCounty: null,
                    storeCountyCode: null,
                    wayId: null,
                    storeLegalPerson: null,
                    aliPayType: null,
                    userName: null,
                    password:null
                }
            }
        },
        mounted() {
        },
        methods: {
            async submit() {
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