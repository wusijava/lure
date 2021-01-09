<template>
    <div>
        <van-notice-bar
                left-icon="volume-o"
                text=从百度及其他网页实时爬取开奖号码,从百度及其他网页实时爬取开奖号码~~~~
        />
        <h3 style="text-align: center">本期购买期号:{{this.thisNum}}</h3>
        <div style="font-size: 20px;margin-top: 20px">百度:{{this.term}}期&nbsp;红:{{this.red1}}&nbsp;{{this.red2}}&nbsp;{{this.red3}}&nbsp;{{this.red4}}&nbsp;{{this.red5}}&nbsp;{{this.red6}}&nbsp;蓝:{{this.blue}}&nbsp;</div>
        <div style="font-size: 20px;margin-top: 20px">其他:{{this.term2}}期&nbsp;红:{{this.red7}}&nbsp;{{this.red8}}&nbsp;{{this.red9}}&nbsp;{{this.red10}}&nbsp;{{this.red11}}&nbsp;{{this.red12}}&nbsp;蓝:{{this.blue2}}&nbsp;</div>
        <!--<div style="margin-top: 50px">
            <van-button round block type="warning" @click="getOnlineNum(1)">百度获取</van-button>
        </div>
        <div style="margin-top: 50px">
            <van-button round block type="warning" @click="getOnlineNum(2)">其他获取</van-button>
        </div>-->
        <div style="margin-top: 50px">
            <van-button round block type="info" @click="back">返回首页</van-button>
        </div>

    </div>


</template>

<script>
    import moment from 'moment';
    import Vue from "vue";
    import { Switch } from 'vant';
    Vue.use(Switch);
    import { Toast } from 'vant';
    import { Calendar } from 'vant';
    Vue.use(Calendar);
    import { Field } from 'vant';
    Vue.use(Field);
    import { Picker } from 'vant';
    Vue.use(Picker);
    import { Notify } from 'vant';
    import {getOnlineNum,faQiDaiMai,suiJi,getResult} from '../../api/homework'
    import { ContactEdit } from 'vant';
    Vue.use(ContactEdit);
    import { Stepper } from 'vant';
    Vue.use(Stepper);
    export default {
        name: "getOnlineNum",
        data() {
            return {
                red1: '',
                red2: '',
                red3: '',
                red4: '',
                red5: '',
                red6: '',
                blue: '',
                value: '1',
                ssqNum:'',
                content: '',
                remark: '',
                tel: '',
                text: '',
                digit: '',
                number: '',
                password: '',
                date: '',
                show: false,
                checked: false,
                user: '',
                userShow: false,
                thisNum: '',
                value2: '',
                term: '',
                red7: '',
                red8: '',
                red9: '',
                red10: '',
                red11: '',
                red12: '',
                blue2: '',
                term2: ''
            }
        },
        mounted() {
            this.getResult()
            this.getOnlineNum(1)
            this.getOnlineNum(2)
        },
        methods: {
            getOnlineNum: async function(type){
                console.log(type)
                let query=new Object();
                query.type=type
                let result = await getOnlineNum(query);
                this.ssqNum=result.data.data
                if (result.data.code == "20000") {
                    if(type==1){
                        this.red1=result.data.data.red1
                        this.red2=result.data.data.red2
                        this.red3=result.data.data.red3
                        this.red4=result.data.data.red4
                        this.red5=result.data.data.red5
                        this.red6=result.data.data.red6
                        this.blue=result.data.data.blue
                        this.term=result.data.data.term
                    }else{
                        this.red7=result.data.data.red1
                        this.red8=result.data.data.red2
                        this.red9=result.data.data.red3
                        this.red10=result.data.data.red4
                        this.red11=result.data.data.red5
                        this.red12=result.data.data.red6
                        this.blue2=result.data.data.blue
                        this.term2=result.data.data.term
                    }

                }

            },
            getResult: async function(){
                let result = await getResult();
                this.thisNum=result.data.data

            },
            formatDate(date) {
                return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            },
            onConfirm1(date) {
                this.show = false;
                this.date = this.formatDate(date);
            },
            async onSubmit(values) {
                let params = {}
                params.red1=this.red1
                params.red2=this.red2
                params.red3=this.red3
                params.red4=this.red4
                params.red5=this.red5
                params.red6=this.red6
                params.blue=this.blue
                params.term=this.ssqNum
                params.num=this.value
                params.buyer=this.user
                params.rate=this.value2
                params.type=2
                let result = await faQiDaiMai(params);
                let data = result.data;
                if (data.code == "20000") {
                    Notify(result.data.data);
                    this.content=''
                    this.remark=''
                    this.checked=''
                    this.date=''
                    this.user=''
                    this.$router.push({name:'ssqRecord'});
                } else {
                    Notify({
                        message: data.msg,
                        duration: 5000,
                    });
                }

            },
            back(){
                this.$router.push({name:'selectAction'});
            },
        onConfirm2(value, index) {
            console.log("confirm2")
            this.user=value
            this.userShow=false
            Toast(`已选择任务指派给：${value}`);
        },
        onChange(picker, value, index) {
            Toast(`当前值：${value}`);
        },
        onCancel() {
            Toast('取消选择');
            this.userShow=false
        },
        userOpen(){
            this.userShow=true
        },
            async suiJi(){
                let result = await suiJi();
                console.log(result)

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
    .upload-left {
        padding: 10px 16px;
    }
    .upload-left .upload-title {
        font-size: 14px;
        color: #646566;
        text-align: left;
    }
    .upload-left .upload-label {
        font-size: 12px;
        color: #3385ff;
        text-align: left;
    }
    .upload-right {
        padding: 20px 20px 10px 20px;
    }
    .img-upload {
        float: right;
        border:1px dashed #bbbbbb;
        width: 80px;
        height: 80px;
        color: #8a8a8a;
        background-color: #ffffff;
    }
    .sign-img {
        width: 80px;
        height: 80px;
        float: right;
    }
    .sign-img img {
        width:80px;
        height:80px;
        float: right;
    }
    .sign-img img[src='']{
        border: none;
    }
    .mini-font {
        font-size: 12px;
        text-align: right;
        margin-top: 0;
        margin-right: 20px;
        color: #969799;
    }
</style>
