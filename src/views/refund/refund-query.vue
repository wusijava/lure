<template>
    <div class="box">
        <van-form style="margin-top: 10px" @submit="toSearch">
            <van-field
                    v-model="username"
                    type="text"
                    placeholder="请输入湖北移动订单编号"
            />
            <van-field
                    v-model="password"
                    type="text"
                    placeholder="请输入门店渠道编号"
            />
            <div style="margin: 16px;">
                <van-button class="button" block type="info" native-type="submit">
                    查询
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import {submit} from '@/api/merchant'
    import util from '../../util/util';

    export default {
        name: "refundIndex",
        data() {
            return {
                username: '',
                password: '',
            }
        },
        mounted() {
        },
        methods: {
            toSearch() {
                this.$router.push({name:'refundConfirm'});
            }
        }
    }
</script>

<style scoped>
    .box{
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
</style>