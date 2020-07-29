<template>
    <div class="box">
        <div class="title">
            <img src="../../assets/img/icon_merchant@2x.png"/>
            <h3>{{store.storeName}}</h3>
            <p>
                {{storeProvince}}-{{storeCity}}
                <img src="../../assets/img/btn_mine_skip@3x.png"
                     style="width: 11px;height: 7px; margin-left: 5px;"
                     @click="showArea = true"
                />
            </p>
            <van-popup
                    v-model="showArea"
                    position="bottom"
                    :style="{ height: '50%' }"
                    round
            >
                <van-area :area-list="areaList"
                          :columns-num="2"
                          @confirm="confirmArea"
                          @cancel="showArea=false"
                />
            </van-popup>
        </div>
        <div class="content">
            <van-tabs v-model="active" animated swipeable color="#587FFF" title-active-color="#3385ff" title-inactive-color="#2c3e50"
                      line-width="50" :ellipsis="false" @change="changeTab">
                <van-tab v-if="mealList.length > 0" v-for="(item,index) in mealList" :key="item.name" :value="index" :title="item.name"
                         title-style="width: 100px;word-break:break-all;height:50px;line-height:18px;
                                      display: flex;align-items: center;justify-content: space-around;flex-direction: column;
                                     "
                >
                    <div class="radio-check" v-for="(i,index) in item.mealInfoList"
                         :class="activeState==index ? 'activeClass' : '' "
                    >
                        <input type="radio"
                               :value="index"
                               @click="changeState(index, i)"
                        >
                        <label>
                            <h2>{{i.name}}</h2>
                            {{i.desc}}
                        </label>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <div id="footer">
            <van-row>
                <van-col span="8">
                    <h1><span>￥{{info.payAmt}}</span></h1>
                </van-col>
                <van-col span="8" style="margin-top: 12px">
                    <p>冻结金额：{{info.settleAmt}}</p>
                    <p>￥{{info.eachAmt}}/期*{{info.num}}</p>
                </van-col>
                <van-col span="8">
                    <van-button type="info" size="large" block @click="toPay">下一步</van-button>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    import {getStore,getMealList} from '../../api/trade'
    import areaJson from '@/util/area'
    import util from '../../util/util';

    export default {
        name: "tradeIndex",
        data() {
            return {
                store: {},
                area: '',
                showArea: false,
                areaList: areaJson,
                storeProvince: '',
                storeProvinceCode: '',
                storeCity: '',
                storeCityCode: '',
                active: 'a',
                mealList:[],
                activeState: 0,
                info: {},
                empty: true
            }
        },
        mounted() {
            this.getStore();
        },
        methods: {
            getStore: async function() {
                let params = {};
                params.username = localStorage.getItem('username')
                const result = await getStore(params);
                const toast = this.$toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: true,
                    message: '请稍后...',
                });
                let second = 4;
                const timer = setInterval(() => {
                    second--;
                    if(result.data.code == '20000') {
                        this.store = result.data.data
                        this.storeProvince = result.data.data.provinceName
                        this.storeCity = result.data.data.cityName
                        this.storeProvinceCode = result.data.data.provinceCode
                        this.storeCityCode = result.data.data.cityCode
                        this.getList();
                    }else {
                        this.$toast({
                            message: result.data.msg,
                            icon: 'warning-o'
                        });
                        this.$router.push({name:'login'})
                    }
                    clearInterval(timer);
                }, 1000);
            },
            getList: async function() {
                let params = {};
                if(this.storeCityCode == null) {
                    params.type = 1 //1、省 2、市
                    params.areaCode = this.storeCityCode
                }else if(this.storeCityCode == '420001') {
                    params.type = 1
                    params.areaCode = this.storeProvinceCode
                } else {
                    params.type = 2
                    params.areaCode = this.storeCityCode
                }

                const result = await getMealList(params);
                const toast = this.$toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: true,
                    message: '请稍后...',
                });
                let second = 4;
                const timer = setInterval(() => {
                    second--;
                    if (result.data.code == '20000') {
                        this.$toast.clear();
                        if (result.data.data.length > 0) {
                            this.mealList = result.data.data
                            this.info = this.mealList[0].mealInfoList[0]
                        } else {
                            this.mealList = ['暂无数据']
                        }
                    } else if (result.data.code == '40015') {
                        this.$toast({
                            message: result.data.msg,
                            icon: 'warning-o'
                        });
                        this.$router.push({name:'login'})
                    } else {
                        this.$toast({
                            message: result.data.msg,
                            icon: 'warning-o'
                        });
                        this.$router.push({name:'login'})
                    }
                    clearInterval(timer);
                },1000)
            },
            confirmArea(arr) {
                if (arr[0]) {
                    this.storeProvince = arr[0].name;
                    this.storeProvinceCode = arr[0].code;
                }
                if (arr[1]) {
                    this.storeCity = arr[1].name;
                    this.storeCityCode = arr[1].code;
                }
                this.showArea = false;
                this.getList();
            },
            changeState(index, item){
                //把index值赋给active，点击改变样式
                this.activeState = index;
                this.info = item
            },
            changeTab: function(name) {
                console.log(name)
                this.activeState = name;
                this.info = this.mealList[name].mealInfoList[0]
            },
            toPay() {
                localStorage.setItem('info', JSON.stringify(this.info));
                localStorage.setItem('store', JSON.stringify(this.store))
                this.$router.push({
                    name:'create',
                    // query: {
                    //     mealDetail: this.info,
                    //     wayId:this.store.wayId,
                    //     storeNo:this.store.storeNo
                    // }
                });
            }
        }
    }
</script>

<style scoped>
    .box::before {
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #F2F5FA;
    }
    .title, .content {
        background: #ffffff;
        position: relative;
        padding: 10px;
        margin-bottom: 10px;
    }
    .content {
        margin-bottom: 80px;
    }
    .content >>> .van-tabs--line .van-tabs__wrap {
        height: 50px;
    }

    .title h3 {
        display: inline;
        margin: 0 0 0 10px;
        font-size: 1.1em;
    }
    .title p {
        margin: 0 0 0 44px;
        font-size: 15px;
    }
    .title img {
        width: 33px;
        height: 33px;
        vertical-align: middle;
        display: inline-block;
    }
    .radio-label,
    .radio-check {
        display: block;
        position: relative;
        margin-top: 15px;
    }
    .radio-check input[type="radio"] {
        appearance: none; /*清除默认样式*/
        -webkit-appearance: none;
        /* opacity: 0; */
        outline: none;
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 50%;
        background: #ffffff;
    }
    .radio-check input[type="radio"] {
        opacity: 0;
    }
    .radio-check label {
        display: block;
        height: 100%;
        font-size: 0.75rem;
        line-height: 24px;
        text-align: left;
        border: 1px solid #E3E3E3;
        background-color: #ffffff;
        border-radius: 5px;
        padding: 10px;
    }
    .radio-check input[type="radio"]:checked + label + h2 {
        color: #2873FF;
        opacity: 1;
        border-radius: 6px;
    }
    .radio-check h2{
        font-size: 1.125rem;
        text-align: left;
        font-weight: normal;
        margin: 5px 0;
    }
    .activeClass label{
        border: 1px solid #2873FF;
        background-color: #E0F0FF;
        border-radius: 5px;
        display: block;
        height: 100%;
    }
    #footer {
        position: fixed;
        display: block;
        z-index: 999;
        bottom: 0;
        height: 80px;
        width: 100%;
        background: #ffffff;
        box-shadow: 0 -1px 8px 1px #EFF3FF;
    }
    .van-button--large {
        height: 80px;
        line-height: 78px;
        border-radius: 0;
    }
    #footer p {
        font-size: 0.75rem;
        margin: 5px 0;
        text-align: center;
    }
    #footer h1 {
        font-size: 2.25rem;
        text-align: center;
        line-height: 26px;
    }
    #footer span {
        font-size: 1.125rem;
    }
</style>