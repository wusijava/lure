<template>
    <div class="box">
        <div class="title">
            <img src="../../assets/img/icon_merchant@2x.png"/>
            <h3>{{store}}</h3>
            <p>
                {{area}}
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
                          value="420000"
                          @confirm="confirmArea"
                          @cancel="showArea=false"
                />
            </van-popup>
        </div>
        <div class="content">
            <van-tabs v-model="active" animated swipeable color="#587FFF" title-active-color="#3385ff" title-inactive-color="#2c3e50"
                      line-width="40">
                <van-tab title="异业">
                    <div class="radio-check" v-for="(item,index) in stateList"
                         :key="index"
                         :class="activeState==index ? 'activeClass' : '' "
                    >
                        <input type="radio" name="num"
                               :value="item.stateStr"
                               @click="changeState(index)"
                        >
                        <label>
                            <h2>{{item.title}}</h2>
                            {{item.stateStr}}
                        </label>
                    </div>
                </van-tab>
                <van-tab title="手机购">
                    手机购
                </van-tab>
                <van-tab title="其他">
                    其他
                </van-tab>
            </van-tabs>
        </div>
        <div class="footer">
            <van-row>
                <van-col span="8">
                    <h1><span>￥</span>200</h1>
                </van-col>
                <van-col span="8" style="margin-top: 12px">
                    <p>冻结金额：300</p>
                    <p>￥832/期*24</p>
                </van-col>
                <van-col span="8">
                    <van-button type="info" size="large" block @click="toPay">下一步</van-button>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    // import {getList} from '@/api/trade'
    import areaJson from '@/util/area'
    import util from '../../util/util';

    export default {
        name: "tradeIndex",
        data() {
            return {
                store: '武汉市大武汉1911店',
                showArea: false,
                areaList: areaJson,
                area: '湖北',
                storeProvince: '',
                storeProvinceCode: '',
                storeCity: '',
                storeCityCode: '',
                active: 'a',
                activeList: ['异业','手机购','其他'],
                stateList:[
                    {
                        id: 1,
                        state: '',
                        title: '套餐名称11',
                        stateStr: '套餐描述套餐描述套餐描述套餐描述套餐描述11'
                    },
                    {
                        id: 2,
                        state: 0,
                        title: '套餐名称22',
                        stateStr: '套餐描述套餐描述套餐描述套餐描述套餐描述22'
                    },
                    {
                        id: 2,
                        state: 0,
                        title: '套餐名称22',
                        stateStr: '套餐描述套餐描述套餐描述套'
                    },
                    {
                        id: 3,
                        state: 0,
                        title: '套餐名称33',
                        stateStr: '套餐描述套餐描述套餐描述套餐描述套'
                    },
                    {
                        id: 4,
                        state: 0,
                        title: '套餐名称44',
                        stateStr: '套餐描述套餐描述套餐描述套餐描述套餐描述22'
                    },
                    {
                        id: 5,
                        state: 0,
                        title: '套餐名称55',
                        stateStr: '套餐描述套餐描述套餐描述套餐描述套餐描述22'
                    },
                ],
                activeState: 0
            }
        },
        mounted() {
            this.getList()
        },
        methods: {
            getList: async function() {
                let params = {};
                const result = await getList(params);

                const toast = this.$toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: true,
                    message: '请稍后...',
                });
                let second = 3;
                const timer = setInterval(() => {
                    second--;
                    if (second) {
                        if(result.status !== 200) {
                            toast.message = `网络异常，请重新查询`;
                        }
                    } else {
                        if (result.data.code == 20000) {
                            if(result.data.data.content.length > 0) {
                                this.showEmpty = false;
                                this.list = result.data.data.content;
                            }else {
                                this.showEmpty = true;
                                this.list = [];
                                this.pageTotal = 0;
                                this.currentPage = 0;
                            }
                        }else if( result.data.code == 40015) {
                            this.$dialog.alert({
                                message: result.data.msg,
                            }).then(() => {
                                this.$router.push({name:'login'})
                            });
                        }else {
                            this.$dialog.alert({
                                message: result.data.msg
                            })
                        }
                        clearInterval(timer);
                        this.$toast.clear();
                    }
                }, 1000);
            },
            confirmArea(arr) {
                this.area = '';
                if (arr[0]) {
                    this.area += arr[0].name;
                    this.storeProvince = arr[0].name;
                    this.storeProvinceCode = arr[0].code;
                    this.storeProvinceCode = "200";
                }
                if (arr[1]) {
                    this.area += arr[1].name;
                    this.storeCity = arr[1].name;
                    this.storeCityCode = arr[1].code;

                }
                this.showArea = false;
            },
            changeState(index){
                //把index值赋给active，点击改变样式
                this.activeState=index;
            },
            toPay() {
                this.$router.push({name:'create'});
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
        padding: 15px;
        margin-bottom: 10px;
    }
    .content {
        margin-bottom: 80px;
        padding-top: 0;
    }
    .title h3 {
        display: inline;
        margin: 0 0 0 10px;
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
    .footer {
        position: fixed;
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
    .footer p {
        font-size: 0.75rem;
        margin: 5px 0;
        text-align: center;
    }
    .footer h1 {
        font-size: 2.25rem;
        text-align: center;
        line-height: 26px;
    }
    .footer span {
        font-size: 1.125rem;
    }
</style>