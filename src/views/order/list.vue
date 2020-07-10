<template>
    <div class="box">
        <div class="header">
            <van-button icon="filter-o" type="info" block size="small" @click="showPopup" class="filter-head">筛选</van-button>
        </div>
        <!-- 筛选条件弹窗 -->
        <van-popup v-model="show" position="top" :style="{ height: '100%'}" :close-on-click-overlay="false">
            <van-form class="filter" @submit="toSearch(0)">
                <!-- 1 -->
                <van-field
                        name="订单号"
                        placeholder="输入和商汇订单号"
                        clearable
                        type="number"
                        v-model="query.outOrderNo"
                />
                <!-- 1 -->
                <!-- 2 -->
                <van-field
                        name="渠道编号"
                        placeholder="输入渠道编号"
                        clearable
                        type="number"
                        v-model="query.wayId"
                />
                <!-- 2 -->
                <!-- 3 -->
                <van-field
                        name="收款账号"
                        placeholder="输入收款账号"
                        clearable
                        type="number"
                        v-model="query.sellerNo"
                />
                <!-- 3 -->
                <!-- 4 -->
                <van-field
                        name="手机号"
                        placeholder="输入办理手机号"
                        clearable
                        type="number"
                        v-model="query.phoneNumber"
                        @blur.native.capture="onInputBlur"
                />
                <!-- 4 -->
                <!-- 选择开始时间弹窗 -->
                <van-field
                        readonly
                        clickable
                        name="datetimePicker"
                        :value="date"
                        placeholder="请选择时间"
                        @click="showStartDate = true"
                />
                <van-popup v-model="showStartDate" position="bottom">
                    <van-datetime-picker
                            title="选择时间"
                            type="date"
                            :min-date="minDate"
                            :max-date="maxDate"
                            @confirm="onConfirmDate"
                            @cancel="onCancelDate"
                    />
                </van-popup>
                <!-- 选择结束时间弹窗 -->
                <van-popup v-model="showEndDate" position="bottom">
                    <van-datetime-picker
                            title="选择时间"
                            type="date"
                            :min-date="minDate"
                            :max-date="maxDate"
                            @confirm="onEndDate"
                            @cancel="onCancelDate"
                    />
                </van-popup>
                <!-- 选择地区弹窗 -->
                <van-field
                        readonly
                        clickable
                        name="areaPicker"
                        v-model="area"
                        placeholder="请选择地区"
                        @click="showArea = true"
                />
                <van-popup v-model="showArea" position="bottom">
                    <van-picker
                            title="选择地区"
                            show-toolbar
                            :columns="areaColumns"
                            @confirm="onConfirmArea"
                            @cancel="onCancel"
                    />
                </van-popup>

                <div class="radio">
                    <p>请选择交易状态</p>
                    <div class="radio-check" v-for="(item,index) in stateList" :key="item.state" :class="activeState==index ? 'activeClass' : '' ">
                        <input type="radio" name="num"
                               :value="item.stateStr"
                               @click="changeState(index,item.state)"
                        >
                        <label>{{item.stateStr}}</label>
                    </div>
                </div>

                <div class="radio">
                    <p>请选择业务类型</p>
                    <div class="radio-check" v-for="(item,index) in bizTypeList" :key="item.type" :class="activeType==index ? 'activeClass' : '' ">
                        <input type="radio" name="num"
                               :value="item.bizType"
                               @click="changeType(index,item.type)"
                        >
                        <label>{{item.bizType}}</label>
                    </div>
                </div>

                <div class="search">
                    <van-row>
                        <van-col span="10">
                            <van-button type="default" class="btn-cancel" @click="cancelPopup">
                                取消
                            </van-button>
                        </van-col>
                        <van-col span="14" style="text-align: right">
                            <van-button type="info" native-type="submit" class="btn-search">
                                查询
                            </van-button>
                        </van-col>
                    </van-row>
                </div>
            </van-form>
        </van-popup>

        <!-- 详情弹窗 -->
        <van-popup v-model="showDetails" class="detail" :close-on-click-overlay="false" closeable >
            <h4>订单详情</h4>
            <div class="detail-main">
                <p><span class="left">和商会订单号</span><span class="right">{{details.outOrderNo}}</span></p>
                <p><span class="left">订单类型</span><span class="right">{{details.bizTypeDesc}}</span></p>
                <p v-if="details.authNo == null || details.authNo.length <= 36"><span class="left">授权订单号</span><span class="right">{{details.authNo}}</span></p>
                <p v-if="details.authNo !== null && details.authNo.length > 36" class="overflow-hide"><span class="left">授权订单号</span><span class="right">{{details.authNo}}</span></p>
                <p><span class="left">办理手机</span><span class="right">{{details.phoneNumber}}</span></p>
                <p><span class="left">捆绑期数</span><span class="right">{{details.num}}</span></p>
                <p><span class="left">冻结金额</span><span class="right">{{details.amount}}</span></p>
                <p><span class="left">结算金额</span><span class="right">{{details.settleAmount}}</span></p>
                <p><span class="left">返佣金额</span><span class="right">{{details.rebate}}</span></p>
                <p><span class="left">红包金额</span><span class="right">{{details.redPacketAmount}}</span></p>
                <p><span class="left">红包领取状态</span><span class="right">{{details.redPacketStateDesc}}</span></p>
                <p><span class="left">红包领取账号</span><span class="right">{{details.redPacketSellerNo}}</span></p>
                <p v-if="details.storeName == null || details.storeName.length <= 36"><span class="left">门店名称</span><span class="right">{{details.storeName}}</span></p>
                <p v-if="details.storeName !== null && details.storeName.length > 36" class="overflow-hide"><span class="left">门店名称</span><span class="right">{{details.storeName}}</span></p>
                <p><span class="left">渠道编码</span><span class="right">{{details.wayId}}</span></p>
                <p v-if="details.title == null || details.title.length <= 36"><span class="left">套餐标题</span><span class="right">{{details.title}}</span></p>
                <p v-if="details.title !== null && details.title.length > 36" class="overflow-hide"><span class="left">套餐标题</span><span class="right">{{details.title}}</span></p>
                <p><span class="left">收款账号</span><span class="right">{{details.sellerNo}}</span></p>
                <p><span class="left">收款人</span><span class="right">{{details.name}}</span></p>
                <p><span class="left">交易时间</span><span class="right">{{details.createTime}}</span></p>
                <p><span class="left">结束时间</span><span class="right">{{details.finishTime}}</span></p>
                <p><span class="left">订单状态</span><span class="right">{{details.stateStr}}</span></p>
                <p><span class="left">当前状态</span><span class="right">{{details.dealStateStr}}</span></p>
            </div>
        </van-popup>

        <div class="content">
            <van-empty image="search" description="暂无匹配订单" v-show="showEmpty"/>
            <div class="list" v-for="item in list" :key="item.id">
                <van-row style="border-bottom: 1px solid #E6EBF2; padding-bottom: 5px">
                    <van-col span="5">
                        <p :class="{
                            'color-1':item.state===0,
                            'color-2':item.state===1,
                            'color-3':item.state===2,
                            'color-4':item.state===3}">
                            {{item.stateStr}}
                        </p>
                    </van-col>
                    <van-col span="4"><p style="letter-spacing: -1px">{{item.createTimeSort}}</p></van-col>
                    <van-col span="15"><p style="text-align: right">订单编号：{{item.outOrderNo}}</p></van-col>
                </van-row>
                <van-row style="padding: 5px 0;">
                    <van-col span="12"><h4>结算金额</h4></van-col>
                    <van-col span="12"><h4 style="text-align: right">{{item.settleAmount}}</h4></van-col>
                </van-row>
                <van-row>
                    <van-col span="12"><p style="margin-top: 5px;">办理手机：{{item.phoneNumber}}</p></van-col>
                    <van-col span="12" style="text-align: right">
                        <van-button type="info" plain hairline round size="small" class="btn-small" @click="toDetails(item)">
                            详情
                        </van-button>
                    </van-col>
                </van-row>
            </div>
        </div>
        <div class="footer">
            <van-pagination v-model="currentPage" :page-count="pageTotal" mode="simple" @change="changePage"/>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    // import {orderList} from "../../api/order";
    export default {
        name: 'order-list',
        data() {
            return {
                list: [
                    {
                        amount: "360",
                        authNo: null,
                        bizType: 1,
                        bizTypeDesc: "和分期业务",
                        createTime: "2020-07-07 03:14:04",
                        createTimeSort: "07-07 03:14",
                        dealState: 4,
                        dealStateStr: "等待通知",
                        finishTime: "",
                        id: 262,
                        informFile: null,
                        informFileHold: null,
                        loanTime: "",
                        merchantNo: "DZZMH123456",
                        name: "章慕寒",
                        num: 36,
                        outOrderNo: "159406281814185269646",
                        outTradeNo: null,
                        overTimeState: null,
                        phoneNumber: "13027129244",
                        reason: "等待通知",
                        rebate: null,
                        rebateState: null,
                        redPacketAmount: null,
                        redPacketSellerNo: null,
                        redPacketStateDesc: "未领取",
                        redPacketTypeDesc: "无",
                        sellerNo: "987744792@qq.com",
                        settleAmount: "300.00",
                        showRebate: null,
                        state: 0,
                        stateStr: "等待支付",
                        storeName: "3C数码专卖店（点赞测试）",
                        title: "10元升档_插卡类（点赞测试）",
                        type: null,
                        wayId: "ZMH123456",
                    }
                ],
                fontColor:{
                    color: '#666'
                },
                currentPage: 0,
                pageTotal: 0,
                show: false,
                showStartDate: false,
                showEndDate: false,
                beginDate: '',
                overDate: '',
                date: '',
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                showArea: false,
                area: '',
                areaCode: '',
                areaColumns: [
                    {
                        text: '全部',
                        code: 0
                    },
                    {
                        text: '广州市',
                        code: 200
                    },
                    {
                        text: '汕尾市',
                        code: 660
                    },
                    {
                        text: '阳江市',
                        code: 200
                    },
                    {
                        text: '揭阳市',
                        code: 663
                    },
                    {
                        text: '茂名市',
                        code: 668
                    },
                    {
                        text: '江门市',
                        code: 750
                    },{
                        text: '韶关市',
                        code: 751
                    },{
                        text: '惠州市',
                        code: 752
                    },
                    {
                        text: '梅州市',
                        code: 753
                    },
                    {
                        text: '汕头市',
                        code: 754
                    },
                    {
                        text: '深圳市',
                        code: 755
                    },
                    {
                        text: '珠海市',
                        code: 756
                    },
                    {
                        text: '佛山市',
                        code: 757
                    },
                    {
                        text: '肇庆市',
                        code: 758
                    },
                    {
                        text: '湛江市',
                        code: 759
                    },
                    {
                        text: '中山市',
                        code: 760
                    },
                    {
                        text: '河源市',
                        code: 762
                    },
                    {
                        text: '清远市',
                        code: 763
                    },
                    {
                        text: '云浮市',
                        code: 766
                    },
                    {
                        text: '潮州市',
                        code: 768
                    },
                    {
                        text: '东莞市',
                        code: 767
                    }
                ],
                stateList:[
                    {
                        id: 1,
                        state: '',
                        stateStr: '全部'
                    },
                    {
                        id: 2,
                        state: 0,
                        stateStr: '待支付'
                    },
                    {
                        id: 3,
                        state: 1,
                        stateStr: '交易完成'
                    },
                    {
                        id: 4,
                        state: 2,
                        stateStr: '交易退款'
                    },
                    {
                        id: 5,
                        state: 3,
                        stateStr: '退款中'
                    },
                    {
                        id: 6,
                        state: -1,
                        stateStr: '交易关闭'
                    }
                ],
                bizTypeList: [
                    {
                        id: 1,
                        type: 0,
                        bizType: '全部'
                    },
                    {
                        id: 2,
                        type: 1,
                        bizType: '和分期'
                    },
                    {
                        id: 3,
                        type: 2,
                        bizType: '物联网卡'
                    }
                ],
                activeState: 0,
                state: 0,
                activeType: 0,
                type: 0,
                details: {
                    authNo: '',
                    title: '',
                    storeName: ''
                },
                showDetails: false,
                keyboardOutOrderNo: false,
                keyboardWayId: false,
                keyboardSellerNo: false,
                keyboardPhoneNumber: false,
                query:{
                    outOrderNo: '',
                    wayId: '',
                    sellerNo: '',
                    phoneNumber:''
                },
                showEmpty: false
            }
        },
        mounted() {
            this.getList(this.currentPage - 1, 10);
        },
        methods: {
            showPopup() {
                this.show = true;
            },
            cancelPopup() {
                this.show = false;
                this.query.outOrderNo = '';
                this.query.wayId = '';
                this.query.sellerNo = '';
                this.query.phoneNumber = '';
                this.area = '';
                this.areaCode = ''
                this.date = '';
                this.activeState = 0;
                this.activeType = 0;
            },
            onConfirmDate(startDate) {
                this.showStartDate = false;
                this.beginDate = moment(startDate).format('YYYY-MM-DD');
                this.onEndDate();
                this.showEndDate = true;
            },
            onEndDate(endDate) {
                this.overDate = moment(endDate).format('YYYY-MM-DD');
                if(this.beginDate > this.overDate){
                    this.overDate = this.beginDate;
                }
                this.date = this.beginDate + '－' + this.overDate;
                this.showEndDate = false;
            },
            onCancelDate() {
                this.date = ''
                this.showStartDate = false;
                this.showEndDate = false;
            },
            toSearch(isSearch) {
                this.show = false;
                if (isSearch == 0) {
                    this.currentPage = 0;
                }
                this.getList(this.currentPage, 10)
            },
            getList: async function(cp,c) {
                let params = {};
                params.page = cp;
                params.limit = c;
                if (this.query.outOrderNo){
                    params.outOrderNo = this.query.outOrderNo;
                }
                if (this.query.wayId){
                    params.wayId = this.query.wayId;
                }
                if (this.query.sellerNo){
                    params.sellerNo = this.query.sellerNo;
                }
                if (this.query.phoneNumber){
                    params.phoneNumber = this.query.phoneNumber;
                }
                if (this.areaCode){
                    params.city = this.areaCode;
                }
                if (this.date != '') {
                    params.startTime = this.beginDate;
                    params.endTime = this.overDate;
                }
                if (this.activeState){
                    params.state = this.state;
                }
                if (this.activeType){
                    params.bizType = this.type;
                }

                const result = await orderList(params);

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
                                this.pageTotal = result.data.data.totalPages;
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
            changePage: function (cp) {
                this.getList((cp-1), 10)
            },
            onConfirmArea(obj) {
                this.showArea = false;
                this.area = obj.text;
                this.areaCode = obj.code;
            },
            onCancel() {
                this.showArea = false;
            },
            changeState(index,i){
                //把index值赋给active，点击改变样式
                this.activeState=index;
                this.state=i;
            },
            changeType(index,i){
                //把index值赋给active，点击改变样式
                this.activeType=index;
                this.type=i;
            },
            toDetails: async function(info) {
                this.showDetails = true;
                this.details = info
            }
        }
    }
</script>

<style scoped>
    html,
    body {
        width: 100%;
        height: 100%;
    }
    .box{
        display:flex; /*父元素的定义为flex布局*/
        width:100%;
        height: calc(100vh - 0px); /* 高度自适应*/
        flex-direction: column; /*定义排列方向为竖排*/
        background: #F3F3F5;
    }
    .box .header{
        height: 35px;
        margin: 5px 12px;
    }
    .box .content{
        flex:1; /*中间分配剩下的所有空间*/
        overflow:auto;
        margin: 0 12px;
    }
    .content .list{
        background: #ffffff;
        border-radius: 3px;
        padding: 8px;
        margin-bottom: 8px;
    }
    .content .list p {
        font-size: 0.625rem;
        margin: 0;
        line-height: 16px;
    }
    .content .list h4 {
        font-size: 1rem;
        margin: 0;
        color: #121212;
        line-height: 24px;
    }
    .filter-head{
        background: #ffffff;
        color: #121212;
        border: 0;
    }
    .box .footer{
        height: 65px;
    }
    .van-pagination {
        line-height: 60px;
    }
    .box .footer >>>.van-pagination__item {
        height: 65px;
    }
    .van-button{
        border-radius: 3px;
    }
    .btn-small{
        height:24px;
        min-width: 50px;
        line-height: 24px;
        font-size: 0.625rem;
    }
    .color-1{
        color: #2873FF;
    }
    .color-2{
        color: #269B26;
    }
    .color-3{
        color: #FF8400;
    }
    .color-4{
        color: #9C00FF;
    }
    .filter{
        margin: 15px;
    }
    .van-cell {
        background-color: #F3F3F5;
        border-radius: 3px;
        line-height: 22px;
        font-size: 11px;
        margin-bottom: 8px;
    }
    .radio{
        margin-bottom: 20px;
    }
    .radio p{
        font-size: 0.625rem;
    }
    .radio span{
        font-size: 0.625rem;
        background: #F3F3F5;
        border: 1px solid #F3F3F5;
        border-radius: 5px;
        padding: 5px 8px;
        margin-right: 8px;
    }
    .search{
        margin-top: 45px;
    }
    .search .btn-cancel{
        width: 90%;
    }
    .search .btn-search{
        width: 100%;
    }

    .radio-label,
    .radio-check {
        display: inline-block;
        position: relative;
        margin-right: 5px;
    }
    .radio-check input[type="radio"] {
        appearance: none; /*清楚默认样式*/
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
        background: #b4b4b4;
    }
    .radio-check input[type="radio"] {
        opacity: 0;
    }
    .radio-check label {
        display: inline-block;
        /* min-width: 50px; */
        height: 24px;
        font-size: 0.625rem;
        line-height: 24px;
        text-align: center;
        padding-right: 10px;
        border: 1px solid #F3F3F5;
        background-color: #F3F3F5;
        border-radius: 5px;
        padding-left: 10px;
        cursor: pointer;
    }
    .radio-check input[type="radio"]:checked + label + span {
        background-color: #EFF3FF;
        color: #2873FF;
        opacity: 1;
    }
    .activeClass{
        color: #2873FF;
        border: 1px solid #2873FF;
        background-color: #EFF3FF;
        border-radius: 5px;
    }
    .detail{
        width: 90%;
        height: 90%;
        border-radius: 3px;
    }
    .detail h4{
        font-size: 1rem;
        text-align: center;
    }
    .detail .detail-main{
        padding: 0 10px 10px 10px;
    }
    .detail .detail-main p{
        font-size: 0.625rem;
        line-height: 16px;
    }
    .detail .detail-main .left{
        text-align: left;
        color: #555555;
    }
    .detail .detail-main .right{
        text-align: right;
        float: right;
        display: block;
        width: 70%;
        letter-spacing:0.5px;
    }
    .overflow-hide{
        height: 32px;
        line-height: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .input-overlay{
        background-color: black;
        opacity: 0.2;
        width: 90%;
        height:40px;
        z-index: 999;
    }
</style>