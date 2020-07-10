<template>
    <div class="box" v-if="showForm===true">
        <div>
            <van-cell-group>
                <van-cell
                        v-if="type == '请选择支付宝类型'"
                        title="支付宝类型"
                        is-link
                        :value="type"
                        @click="showPicker = true">
                </van-cell>

                <van-field
                        v-else
                        is-link
                        :value="type"
                        @click="showPicker = true"
                        input-align="right"
                        label-width="110"
                        label="支付宝类型"
                />

                <van-popup
                        v-model="showPicker"
                        position="bottom"
                >
                    <van-picker
                            show-toolbar
                            :columns="columns"
                            @cancel="showPicker = false"
                            @confirm="onConfirm"
                    />
                </van-popup>

                <van-field
                        v-model="form.sellerNo"
                        clearable
                        :clickable="false"
                        placeholder="请输入支付宝账号"
                        input-align="right"
                        label-width="110"
                        label="支付宝账号"
                >
                </van-field>
            </van-cell-group>
        </div>
        <div class="box2">
            <van-cell-group>
                <van-field
                        v-model="form.wayId"
                        placeholder="请输入网点渠道编码"
                        clearable
                        :clickable="false"
                        input-align="right"
                        label-width="110"
                        label="网点渠道编码"
                >
                </van-field>
                <van-field
                        v-model="form.storeSubjectCertNo"
                        clearable
                        :clickable="false"
                        placeholder="请输入营业执照编号"
                        input-align="right"
                        label-width="110"
                        label="营业执照编号"
                >
                </van-field>

                <van-field
                        v-model="form.storeSubjectName"
                        clearable
                        :clickable="false"
                        placeholder="请输入营业执照名称"
                        input-align="right"
                        label-width="110"
                        label="营业执照名称"
                >
                </van-field>

                <van-cell
                        v-if="area == '请选择营业执照地址'"
                        title="营业执照地址"
                        is-link
                        :value="area"
                        @click="showArea=true"
                />

                <van-field
                        v-else
                        is-link
                        :value="area"
                        @click="showArea=true"
                        input-align="right"
                        label-width="110"
                        label="营业执照地址"
                >
                </van-field>

                <van-popup
                        v-model="showArea"
                        position="bottom"
                        :style="{ height: '50%' }"
                        round
                >
                    <van-area :area-list="areaList"
                              value="420000"
                              @confirm="confirmArea"
                              @cancel="showArea=false"
                    />
                </van-popup>

                <van-field
                        v-model="form.storeLegalPerson"
                        clearable
                        :clickable="false"
                        placeholder="请输入经营者/法人"
                        input-align="right"
                        label-width="110"
                        label="经营者/法人"
                >
                </van-field>

                <van-field
                        v-model="form.contactName"
                        clearable
                        :clickable="false"
                        label="联系人"
                        placeholder="请输入联系人"
                        input-align="right"
                        label-width="110"
                >
                </van-field>

                <van-field
                        v-model="form.contactPhone"
                        clearable
                        :clickable="false"
                        placeholder="请输入联系电话"
                        input-align="right"
                        label-width="110"
                        label="联系电话"
                >
                </van-field>
            </van-cell-group>
        </div>

        <div class="box2">
            <van-cell-group>
                <van-field
                        v-model="form.userName"
                        clearable
                        :clickable="false"
                        placeholder="请输入商户登陆手机号"
                        input-align="right"
                        label-width="110"
                        label="商户登陆账号"
                >
                </van-field>
                <van-field
                        v-model="form.password"
                        clearable
                        :clickable="false"
                        placeholder="请输入登陆密码"
                        input-align="right"
                        label-width="110"
                        label="商户登陆密码"
                >
                </van-field>
            </van-cell-group>
        </div>

        <div class="box2" style="margin: 15px">
            <div class="agreement">
                <p>查看
                    <router-link tag="span"
                                 :to="{path:'/merchant/service-agreement',query: {storeName: form.storeName}}">《服务协议》
                    </router-link>
                </p>
            </div>
            <van-button class="button" @click="submit" type="info" size="large" :loading="loading">同意协议并提交</van-button>
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
                area: '请选择营业执照地址',
                showArea: false,
                loading: false,
                cipherJson: '',
                areaList: areaJson,
                showPicker: false,
                type: '请选择支付宝类型',
                columns: ['个人', '企业'],
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
                },
                showForm: true
            }
        },
        mounted() {
        },
        methods: {
            onConfirm(value) {
                if(value == '个人') {
                    if(this.form.storeLegalPerson == null) {
                        this.$toast({
                            message: '经营者/法人不能为空',
                            icon: 'warning-o'
                        });
                    } else {
                        this.type = value;
                        this.form.aliPayType = 0;
                    }

                }else {
                    if(this.form.storeSubjectName == null) {
                        this.$toast({
                            message: '营业执照名称不能为空',
                            icon: 'warning-o'
                        });
                    } else {
                        this.type = value;
                        this.form.aliPayType = 1;
                    }
                }
                this.showPicker = false;
            },
            async submit() {
                this.loading = true;
                try {
                    if (util.getUrlKey("appId")) {
                        util.setSessionValue("appId", util.getUrlKey("appId"));
                    }
                    const result = await submit(this.form);
                    console.log(result.data)
                    this.loading = false;
                    if (result.code != '20000') {
                        this.$toast({
                            message: result.msg,
                            icon: 'warning-o'
                        });
                    } else {
                        this.$toast({
                            message: result.msg,
                            icon: 'clock-o'
                        });
                        this.$router.push({
                            name: 'merchantSuccess',
                            query: {merchantNo: result.data.merchantNo, password: result.data.password}
                        })
                    }
                } catch (e) {
                    this.loading = false;
                }

            },
            confirmArea(arr) {
                this.area = '';
                if (arr[0]) {
                    this.area += arr[0].name;
                    this.form.storeProvince = arr[0].name;
                    this.form.storeProvinceCode = arr[0].code;
                    this.form.storeProvinceCode = "200";
                }
                if (arr[1]) {
                    this.area += '-' + arr[1].name;
                    this.form.storeCity = arr[1].name;
                    this.form.storeCityCode = arr[1].code;

                }
                if (arr[2]) {
                    this.area += '-' + arr[2].name;
                    this.form.storeCounty = arr[2].name;
                    this.form.storeCountyCode = arr[2].code;
                }
                this.showArea = false;
            }
        }
    }
</script>

<style scoped>
    .box, .box2 {
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
        border-radius: 3px;
    }
    .agreement {
        position: relative;
    }
    .agreement p {
        color: #323233;
        font-size: 13px;
    }
    .agreement span {
        color: #3385ff;
    }
</style>