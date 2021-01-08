<template>

    <div class="box">
        <van-overlay :show="showOver" @click="showOver = false" />
        <van-notice-bar
                left-icon="volume-o"
                :text=this.gunDong
        />
        <van-notice-bar
                left-icon="volume-o"
                :text=this.weather
        />
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
           <!-- <p>刷新次数: {{ count }}</p>-->

        <div class="content">
            <van-count-down :time="chuXi" style="margin-bottom: 20px">
                <template #default="timeData">
                    <span class="colon">距离2021年除夕:</span>
                    <span class="block">{{ timeData.days }}</span>
                    <span class="colon">天</span>
                    <span class="block">{{ timeData.hours }}</span>
                    <span class="colon">小时</span>
                    <span class="block">{{ timeData.minutes }}</span>
                    <span class="colon">分</span>
                    <span class="block">{{ timeData.seconds }}</span>
                    <span class="colon">秒</span>
                </template>
            </van-count-down>
            <van-count-down :time="time" style="margin-bottom: 20px">
                <template #default="timeData">
                    <span class="colon">距离2021年元宵:</span>
                    <span class="block">{{ timeData.days }}</span>
                    <span class="colon">天</span>
                    <span class="block">{{ timeData.hours }}</span>
                    <span class="colon">小时</span>
                    <span class="block">{{ timeData.minutes }}</span>
                    <span class="colon">分</span>
                    <span class="block">{{ timeData.seconds }}</span>
                    <span class="colon">秒</span>
                </template>
            </van-count-down>

            <div style="margin-bottom: 25px">
                <div class="module" style="margin-right: 25px" @click="toBusiness(1)">
                    <img src="../../../src/assets/img/gu.png"/>
                    <p>新增销售</p>
                </div>
                <div class="module" @click="toSign">
                    <img src="../../../src/assets/img/jita.png"/>
                    <p>新增消费</p>
                </div>
            </div>
            <div>
                <div class="module" style="margin-right: 25px" @click="toRefund">
                    <!--<img src="../../../src/assets/img/jita2.png"/>-->
                    <van-icon name="../lq.png" size="33" :badge="this.orderNum"/>
                    <p>销售记录</p>
                </div>
                <div class="module" @click="spend">
                    <!--<img src="../../../src/assets/img/mai.png"/>-->
                    <van-icon name="../fj.png" size="33" :badge="this.spendNum"/>
                    <p>消费记录</p>
                </div>
            </div>
            <div style="margin-top: 25px">
                <div class="module" style="margin-right: 25px" @click="monitor">
                    <img src="../../../src/assets/img/jk.png"/>
                    <p>监控记录</p>
                </div>
                <div class="module" @click="proState">
                    <img src="../../../src/assets/img/gu2.png"/>
                    <p>商品状态</p>
                </div>
            </div>
            <div style="margin-top: 25px">
                <div class="module" style="margin-right: 25px" @click="homework">
                    <img src="../../../src/assets/img/book.png"/>
                    <p>添加作业</p>
                </div>
                <div class="module" @click="homeworkList">
                    <img src="sxj.png"/>
                    <p>作业记录</p>
                </div>
            </div>
            <div style="margin-top: 25px">

                <div class="module" style="margin-right: 25px" @click="toSearch">
                    <img src="../../../src/assets/img/Guitar.png"/>
                    <p>用户登录</p>
                </div>
                <div class="module" @click="logout">
                    <img src="../../../src/assets/img/ex.png"/>
                    <p>退出系统</p>
                </div>
            </div>
            <div style="margin-top: 25px">

                <div class="module" style="margin-right: 25px" @click="register">
                    <img src="../../../src/assets/img/jl.png"/>
                    <p>显示距离</p>
                </div>
                <div class="module" @click="housework">
                    <img src="../../../src/assets/img/qd.png"/>
                    <p>家务安排</p>
                </div>
            </div>
            <div style="margin-top: 25px">

                <div class="module" style="margin-right: 25px" @click="myTask">
                    <van-icon name="../bf.png" size="33" :badge="this.pageTotal"/>
                   <!-- <img src="../../../src/assets/img/dog2.png"/>-->
                    <p>我的任务</p>
                </div>

                <div class="module" @click="toTask">
                    <van-icon name="../xj.png" size="33" :badge="this.pageTotalTo"/>
                    <!--<img src="../../../src/assets/img/mt.png"/>-->
                    <p>我指派的</p>
                </div>
            </div>
            <div style="margin-top: 25px">
                <div class="module" style="margin-right: 25px" @click="myAdd">
                    <img src="../../../src/assets/img/ditu.png"/>
                    <p>我的位置</p>
                </div>
                <div class="module" @click="goHome">
                    <img src="../../../src/assets/img/pc.png"/>
                    <p>回家之路</p>
                </div>
            </div>
            <div style="margin-top: 25px">
                <div class="module" style="margin-right: 25px" @click="address">
                    <img src="../../../src/assets/img/zj.png"/>
                    <p>我的足迹</p>
                </div>
                <div class="module" @click="ssq">
                    <img src="../../../src/assets/img/ssq.png"/>
                    <p>人生巅峰</p>
                </div>
            </div>
            <div style="margin-top: 25px">
                <div class="module" style="margin-right: 25px" @click="remind">
                    <img src="../../../src/assets/img/nz.png"/>
                    <p>提醒记录</p>
                </div>
                <div class="module" @click="not">
                    <img src="../../../src/assets/img/wwc.png"/>
                    <p>敬请期待</p>
                </div>
            </div>
            <div style="margin-top: 25px">
                <div class="module" style="margin-right: 25px" @click="goodLuck">
                    <img src="../../../src/assets/img/mt.png"/>
                    <p>飞黄腾达</p>
                </div>
                <div class="module" @click="buyLuck">
                    <img src="../../../src/assets/img/money.png"/>
                    <p>衣紧还乡</p>
                </div>
            </div>
            <div style="margin-top: 25px">
                <div class="module" style="margin-right: 25px" @click="faQiDaiMai">
                    <img src="../../../src/assets/img/buy.png"/>
                    <p>发起代买</p>
                </div>
                <div class="module" @click="myOrder">
                    <img src="../../../src/assets/img/cai.png"/>
                    <p>代买订单</p>
                </div>
            </div>
        </div>
        </van-pull-refresh>
        <van-cell title="显示分享面板" @click="showShare = true" />
        <van-share-sheet
                v-model="showShare"
                title="立即分享给好友"
                :options="options"
                @select="onSelect"
        />
        <!--<van-cell is-link @click="showPopup">展示弹出层</van-cell>-->
        <van-popup v-model="show">
            <div>请对开发人员颜值评分:</div>
            <div >
                <van-rate v-model="value" v-show="showRate" @click.native="rateChange"
                          icon="like" void-icon="like-o" size="40px"/>
            </div>


        </van-popup>
      <!--  <van-rate v-model="value" v-show="showRate"/>-->



    </div>
</template>

<script>
    import Vue from 'vue';
    import { ShareSheet } from 'vant';
    import { Toast } from 'vant';
    import { Dialog } from 'vant';
    import { Rate } from 'vant';
    import { ActionSheet } from 'vant';
    import { Popup } from 'vant';
    import { Icon  } from 'vant';
    import { CountDown } from 'vant';
    import { PullRefresh } from 'vant';
    import { Overlay } from 'vant';
    import axios from '../../config/axios'
    Vue.use(Overlay);
    Vue.use(PullRefresh);
    Vue.use(CountDown);
    import {location} from "../../assets/js/location";
    import {sendMsg,saveAdd} from '../../api/homework';
    import {myTask,taoList,orderList} from "../../api/order";
    Vue.use(Popup);
    Vue.use(ActionSheet);
    Vue.use(Rate);
    Vue.use(ShareSheet);
    Vue.use(Icon );
    export default {
        name: "selectAction",
        data(){
            return{
                isLoading: false,
                count: 0,
                chuXi: 1612972801000-(new Date()).getTime(),
                time: 1614268801000-(new Date()).getTime(),
                value: 0,
                showRate: true,
                appId: '',
                indexData:[],
                row:null,
                showShare: false,
                user: '',
                options: [
                    { name: '微信', icon: 'wechat' },
                    { name: '微博', icon: 'weibo' },
                    { name: '复制链接', icon: 'link' },
                    { name: '分享海报', icon: 'poster' },
                    { name: '二维码', icon: 'qrcode' },
                ],
                show: false,
                num :localStorage.getItem("num"),
                city: '',
                lat: '',
                lng: '',
                jwd: '',
                myDis: 0,
                timer: null,
                pageTotal: '',
                pageTotalTo: '',
                orderNum: '',
                spendNum: '',
                showOver :false,
                gunDong: localStorage.getItem("address"),
                weather: ''
            }
        },
        //页面加载就开始查询按钮数据
        mounted() {

            this.getList();
            this.getTo();
            this.getOrderList();
            this.getSpendNum();
            setInterval(this.getLocation(),5000);


            if(localStorage.getItem("username")=="admin"){
                this.user="当前登录账号:吴思"
                // <h4>经度:{{this.lng}}纬度:{{this.lat}}区域:{{this.city}}</h4>
            }
            if(localStorage.getItem("username")=="zmx"){
                this.user="当前登录账号:张明霞"
            }
            if(this.num==1){
                Dialog.alert({
                    //title: '标题',
                    message: '就问你我是不是最帅的?',
                    theme: 'round-button',
                }).then(() => {
                    this.show =true
                });
            }
            /*let time = 2
            let intervalFunc = window.setInterval(() => {
                this.distanceCatCom();
                time = time - 1
                if (time < 1) {
                    window.clearInterval(intervalFunc)
                }
            }, 5000)*/
              /*  this.timer=setInterval(
                    this.distanceCatCom
                    , 5000);*/
                let time =1;
                this.timer=setInterval(()=>{
                    this.distanceCatCom();
                    time--;
                    if(time<0){
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                },6000)
            //this.getAddress()
            //this.distanceCat()


        },
        methods:{
            buyLuck(){
                this.$router.push({name:'ssqRecord'});
            },
            goodLuck(){
                this.$router.push({name:'buySsq'});
            },
            remind(){
                this.$router.push({name:'remind'});
            },
            not(){
                this.showOver=true
            },
            address(){
                this.$router.push({name:'myAddress'});
            },
            toSign(){
                this.$router.push({name:'create'});
            },
            toBusiness(info){
                this.$router.push({name:'taoBao'});
            },
            toRefund() {
                this.$router.push({name:'taoList'});
            },
            toSearch() {
                this.$router.push({name:'login'});
            },
            spend(){
                this.$router.push({name:'orderList'});
            },
            proState(){
                this.$router.push({name:'productState'});
            },
            homework(){
                this.$router.push({name:'addHomework'});
            },
            homeworkList(){
                this.$router.push({name:'homeworkList'});
            },
            monitor(){
                this.$router.push({name:'monitor'});
            },
            logout(){
                this.$router.push({name:'logout'});
            },
            onSelect(option) {
                Toast(option.name+",暂未实现具体逻辑,敬请期待!");
                this.showShare = false;
            },
            rateChange(){
                if(this.value!=5){
                    localStorage.setItem("num",this.num+1);
                    this.show=false
                    const toast = Toast.loading({
                        duration: 0, // 持续展示 toast
                        forbidClick: true,
                        message: '不是满分,系统正在卸载!',
                    });

                    let second = 6;
                    const timer = setInterval(() => {
                        second--;
                        if (second) {
                            if(second==6){
                                toast.message = `正在卸载软件!`;
                            }
                            if(second==5){
                                toast.message = `正在破坏cpu!`;
                            }
                            if(second==4){
                                toast.message = `正在破坏内存!`;
                            }
                            if(second==3){
                                toast.message = `正在抹掉手机硬盘数据!`;
                            }
                            if(second==2){
                                toast.message = `正在启动手机爆炸程序!`;
                            }
                            if(second==1){
                                toast.message = `有缘再见!`;
                            }

                        } else {
                            clearInterval(timer);
                            // 手动清除 Toast
                            Toast.clear();
                            this.$router.push({name:'logout'});
                        }
                    }, 1000);
                }else {
                    localStorage.setItem("num",this.num+1);
                    this.show =false
                }
            },
            register(){
               /* Dialog.alert({
                    //title: '标题',
                    message: '不要点了 还没时间做!',
                    theme: 'round-button',
                }).then(() => {
                });*/
               //console.log(this.myDis)
               this.distanceCat()
            },
            housework(){
                this.$router.push({name:'houseworkAdd'});
            },
            myTask(){
                this.$router.push({name:'myTask'});
            },
            toTask(){
                this.$router.push({name:'toTask'});
            },
            myAdd(){
                window.location.href="https://m.amap.com/navi/?dest="+this.jwd+"&destName=%E6%88%91%E7%9A%84%E4%BD%8D%E7%BD%AE&hideRouteIcon=1&key=9138ad0023cb8e79ca816509aac42747"
            }, getLocation() {
                let _that = this;
                let geolocation = location.initMap("map-container"); //定位
                AMap.event.addListener(geolocation, "complete", result => {
                    _that.lat = result.position.lat;
                    _that.lng = result.position.lng;
                    this.lat=result.position.lat;
                    this.lng = result.position.lng;
                    this.jwd=(result.position.lng)+","+(result.position.lat);
                    console.log(this.jwd)
                    this.getWeath(this.jwd)
                    _that.province = result.addressComponent.province;
                    _that.city = result.addressComponent.city;
                    _that.district = result.addressComponent.district;
                   this.city=result.addressComponent.district;
                    let params = {};
                    params.province=result.addressComponent.province;
                    params.city=result.addressComponent.city;
                    params.district=result.addressComponent.district;
                    params.lng=result.position.lng;
                    params.lat=result.position.lat;
                    params.user=this.user
                    //this.gunDong=this.user+" 经度: "+this.lng+" 纬度: "+this.lat+" 区域: "+this.city
                    AMap.plugin('AMap.Geocoder', function() {
                        var geocoder = new AMap.Geocoder({
                            city: '027'
                        })

                        var lnglat = [result.position.lng, result.position.lat]

                        geocoder.getAddress(lnglat, function(status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                                //console.log(result)
                                //console.log(result.regeocode.formattedAddress)
                                params.address=result.regeocode.formattedAddress
                                localStorage.setItem("address",params.user+" 地址: "+result.regeocode.formattedAddress)
                                //console.log(localStorage.getItem("address"))
                                saveAdd(params);
                            }

                        })
                    })

                });
            },
            goHome(){
                window.location.href="https://m.amap.com/navi/?start="+this.jwd+"&dest=114.148418,30.485467&destName=回家路线&key=9138ad0023cb8e79ca816509aac42747"
            },
            distanceCat(){
                //var dis = ''
                var map = new AMap.Map('container', {
                    resizeEnable: true,
                    center: [116.397428, 39.90923], // 地图中心点
                    zoom: 13 // 地图显示的缩放级别
                })
                // 步行导航
                AMap.plugin(['AMap.Walking'], () => {
                    // 根据起终点坐标规划步行路线
                    new AMap.Walking({}).search(
                        [this.lng,this.lat],
                        [114.146769,30.484865],
                        function(status, result) {
                            //console.log(this.jwd)
                            if (status === 'complete') {
                                Dialog.alert({
                                    message: '离家的距离:'+result.routes[0].distance+"米",
                                    theme: 'round-button',
                                }).then(() => {
                                });
                            } else {
                                console.log(result)
                            }

                        }
                    )
                })
            },
            distanceCatCom: async function(){
                //var dis = ''
                var map = new AMap.Map('container', {
                    resizeEnable: true,
                    center: [116.397428, 39.90923], // 地图中心点
                    zoom: 13 // 地图显示的缩放级别
                })
                // 步行导航
                AMap.plugin(['AMap.Walking'], () => {
                    //console.log(this.jwd)
                    // 根据起终点坐标规划步行路线
                    new AMap.Walking({}).search(
                        [this.lng,this.lat],
                        [114.26263,30.614824],//公司门口经纬度
                        async function(status, result) {
                            //console.log(result.routes[0].distance)
                            if(parseInt(result.routes[0].distance)>150&&result.routes[0].distance<500){
                              /*  Dialog.alert({
                                    message: '离开公司打卡提醒',
                                    theme: 'round-button',
                                }).then(() => {
                                });//离开公司100米触发*/
                                let params = {};
                                params.user = "吴思";
                                const result =await  sendMsg(params);

                                //clearInterval(this.timer);
                            }
                        }
                    )
                })
            },
            getList: async function(cp,c) {
                let params = {};
                params.type=1
                if(this.value1){
                    params.state=this.value1
                }

                const result = await myTask(params);
                this.$toast.clear();
                if (result.data.code == '20000') {

                    if(result.data.data.content.length > 0) {
                        this.pageTotal = result.data.data.totalElements;
                    }else {
                        this.list = [];
                    }
                }else {
                    this.$toast({
                        message: result.data.msg,
                        icon: 'warning-o'
                    });
                }
            },
            getTo: async function() {
                let params = {};
                params.type=2
                const result = await myTask(params);
                this.$toast.clear();
                if (result.data.code == '20000') {
                    if(result.data.data.content.length > 0) {
                        //console.log(result)
                        this.pageTotalTo = result.data.data.totalElements;
                    }else {
                        this.list = [];
                    }
                }else {
                    this.$toast({
                        message: result.data.msg,
                        icon: 'warning-o'
                    });
                }
            },
            getOrderList: async function() {
                let params = {};
                const result = await taoList(params);
                this.$toast.clear();
                if (result.data.code == '20000') {
                    if(result.data.data.content.length > 0) {
                        this.orderNum = result.data.data.totalElements;
                    }else {
                        this.list = [];
                    }
                }else {
                    this.$toast({
                        message: result.data.msg,
                        icon: 'warning-o'
                    });
                }
            },
            getSpendNum: async function(cp,c) {
                let params = {};
                const result = await orderList(params);
                if (result.data.code == '20000') {
                    if(result.data.data.content.length > 0) {
                        this.spendNum = result.data.data.totalElements;
                    }else {
                        this.list = [];
                    }
                }else {
                    this.$toast({
                        message: result.data.msg,
                        icon: 'warning-o'
                    });
                }
            },
            onRefresh() {
                setTimeout(() => {
                    Toast('刷新成功');
                    this.isLoading = false;
                }, 1000);
                this.getSpendNum()
                this.getLocation()
            },
            getWeath:async  function(jwd){
                let res= await  fetch('https://geoapi.qweather.com/v2/city/lookup?location='+jwd+'&key=b941bbcd687b486aa07aab8586dc115e')
                let result = await res.json()
                let res2= await  fetch('https://devapi.qweather.com/v7/weather/3d?location='+result.location[0].id+'&key=b941bbcd687b486aa07aab8586dc115e')
                let result2 = await res2.json()
                this.weather="天气情况："+result2.daily[0].fxDate+"日:"+result2.daily[0].tempMin+"度~"+result2.daily[0].tempMax+"度,"+result2.daily[0].textDay+","+result2.daily[1].fxDate+"日:"+result2.daily[1].tempMin+"度~"+result2.daily[1].tempMax+"度,"+result2.daily[1].textDay+","+result2.daily[2].fxDate+"日:"+result2.daily[2].tempMin+"度~"+result2.daily[2].tempMax+"度,"+result2.daily[2].textDay
            },
            ssq(){
                this.$router.push({name:'ssq'});
            },
            myOrder(){

            },
            faQiDaiMai(){
                this.$router.push({name:'daiMai'});
            }
           /* getAddress(){
                AMap.plugin('AMap.Geocoder', function() {
                    var geocoder = new AMap.Geocoder({
                        // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                        city: '027'
                    })

                    var lnglat = [114.26461, 30.60261]

                    geocoder.getAddress(lnglat, function(status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                          console.log(result)
                        }
                    })
                })
            }*/

        }
    }
</script>

<style scoped>
    .box{
        width: 100%;
    }
    .box::before {
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #ffffff;
    }
    .content {
        position: relative;
        text-align: center;
        margin: 25px 10px;
    }
    .module {
        background-color: #ffffff;
        box-shadow: 1px 1px 8px 1px #D2DDFF;
        border-radius: 8px;
        padding: 20px;
        width: 30%;
        display: inline-block;
    }
    .module img{
        width: 33px;
    }
    .module p{
       margin: 0;
    }
     .content {
         padding: 16px 16px 160px;
     }
    .colon {
        display: inline-block;
        margin: 0 4px;
        color: #ee0a24;
    }
    .block {
        display: inline-block;
        width: 22px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        background-color: #ee0a24;}
</style>