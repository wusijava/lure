<template>
    <div>
        <h4 style="margin-top: 30px ;text-align: center">毒鸡汤+网易云热评</h4>
        <h3 style="margin-top: 30px ;text-align: center">毒鸡汤</h3>
        <van-field
                v-model="this.eng"
                rows="2"
                autosize
                type="textarea"
                show-word-limit
        />
        <h3 style="margin-top: 30px ;text-align: center">网易云热评</h3>
        <van-field
                v-model="this.chi"
                rows="2"
                autosize
                type="textarea"
                show-word-limit
        />
    <div>

    </div>
        <div style="margin-top: 20px">
            <van-button round block type="warning" @click="next">再来一碗</van-button>
        </div>
        <div style="margin-top: 20px">
            <van-button round block type="info" @click="back">返回首页</van-button>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import {ImagePreview} from "vant";
    Vue.use(ImagePreview);
    import { Image as VanImage } from 'vant';

    Vue.use(VanImage);
    import {du,wangYi} from '../../api/homework'

    export default {
        name: "du",
        data() {
            return {
                eng: '',
                chi: '1',
                mp3: '',
                source: '',
                url: ''
            }
        },
        mounted() {
            this.wangYi();
            this.du();

        },
        methods: {
            async du(){
                let result = await du();
                if(result.data.code=="200"){
                    this.eng=result.data.newslist[0].content
                }

            },
            async wangYi(){
                let result = await wangYi();
                if(result.data.code=="200"){
                    this.chi=result.data.newslist[0].content
                }
            },
            back(){
                this.$router.push({name:'selectAction'});
            },
            next(){
                this.du()
                this.wangYi()
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
