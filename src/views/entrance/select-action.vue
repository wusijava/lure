<template>
    <div class="box">
        <van-notice-bar
                left-icon="volume-o"
                text="使用过程中,遇到任何问题,请联系开发人员:吴思,联系电话:18602702325"
        />

        <div class="content">
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
                    <img src="../../../src/assets/img/jita2.png"/>
                    <p>销售记录</p>
                </div>
                <div class="module" @click="spend">
                    <img src="../../../src/assets/img/mai.png"/>
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
                    <img src="../../../src/assets/img/dog.png"/>
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
                    <img src="../../../src/assets/img/dy.png"/>
                    <p>用户注册</p>
                </div>
                <div class="module" @click="register">
                    <img src="../../../src/assets/img/qd.png"/>
                    <p>敬请期待</p>
                </div>
            </div>
        </div>
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
    Vue.use(Popup);
    Vue.use(ActionSheet);
    Vue.use(Rate);
    Vue.use(ShareSheet);
    export default {
        name: "selectAction",
        data(){
            return{
                value: 0,
                showRate: true,
                appId: '',
                indexData:[],
                row:null,
                showShare: false,
                options: [
                    { name: '微信', icon: 'wechat' },
                    { name: '微博', icon: 'weibo' },
                    { name: '复制链接', icon: 'link' },
                    { name: '分享海报', icon: 'poster' },
                    { name: '二维码', icon: 'qrcode' },
                ],
                show: false,
                num :localStorage.getItem("num")
            }
        },
        //页面加载就开始查询按钮数据
        mounted() {
            if(this.num==1){
                Dialog.alert({
                    //title: '标题',
                    message: '就问你我是不是最帅的?',
                    theme: 'round-button',
                }).then(() => {
                    this.show =true
                });
            }

        },
        methods:{
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
                Dialog.alert({
                    //title: '标题',
                    message: '不要点了 还没时间做!',
                    theme: 'round-button',
                }).then(() => {
                });
            }
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

</style>