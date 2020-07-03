<template>
    <div class="login">
        <div class="padding25">
            <div class="logo">
                <van-row>
                    <van-col span="8"></van-col>
                    <van-col span="8">
                        <img src="../../src/assets/img/JDlogo@2x.png"/>
                    </van-col>
                    <van-col span="8"></van-col>
                </van-row>
            </div>

            <div class="content-list">
                <div class="list-item">
                    <nut-textinput
                            class="item-input"
                            v-model="username"
                            placeholder="请输入用户名"
                            :clearBtn="false"
                            :hasBorder="false"
                    />
                </div>

                <div class="list-item" v-if="ifDisplay">
                    <nut-textinput
                            v-model="password"
                            placeholder="请输入密码"
                            type="text"
                            :clearBtn="false"
                            :hasBorder="false"
                    />

                    <span class="eyes-open" @click="ifDisplay = !ifDisplay">
                        <img src="../../src/assets/img/btn_key_visible@2x.png"/>
                    </span>
                </div>
                <div class="list-item" v-else>
                    <nut-textinput
                            v-model="password"
                            placeholder="请输入密码"
                            type="password"
                            :clearBtn="false"
                            :hasBorder="false"
                    />

                    <span class="eyes-closed" @click="ifDisplay = !ifDisplay">
                        <img src="../../src/assets/img/btn_key_disvisible@2x.png"/>
                    </span>

                </div>

                <div class="list-info">
                <div class="info" v-show="infoShow">
                    <nut-icon
                            type="action"
                            size="12px"
                            color="#FF4C4C"
                    >
                    </nut-icon>
                    <span>{{msg}}</span>
                </div>
            </div>

                <div class="list-button">
                    <nut-button block class="submit" @click="toLogin">登录</nut-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {login} from '../api/user'

    export default {
        name: 'login',
        data() {
            return {
                username: '',
                password: '',
                ifDisplay: false,
                infoShow: false,
                msg:''
            }
        },
        mounted() {

        },
        methods: {
            toLogin() {
                if(this.username == '' || this.password == '') {
                    this.infoShow = true
                    this.msg = '用户名密码不能为空'
                } else{
                    let query = new Object()
                    query.username = this.username
                    query.password = this.password
                    login(query).then(json =>{
                        console.log(json)
                        if(json.data.code === "20000") {
                            localStorage.setItem('login_token', json.headers.authorization)
                            this.$router.push({name:'home'})
                        }else {
                            this.infoShow = true
                            this.msg = json.data.msg
                        }
                    })
                }
            },
        }
    }
</script>

<style scoped>
    @media only screen and (min-width: 320px) {
        .login {
            height: 568px;
            background: #ffffff;
        }

        .logo img {
            width: 66px;
        }
        .eyes-closed {
            position: absolute;
            top: 226px;
            right: 30px;
        }
        .eyes-closed img {
            height: 6px;
        }

        .eyes-open {
            position: absolute;
            top: 226px;
            right: 30px;
        }

        .eyes-open img {
            height: 12px;
        }
    }

    @media only screen and (min-width: 360px) {
        .login {
            height: 100%;
            min-height: 640px;
            background: #ffffff;
        }

        .logo img {
            width: 66px;
        }
    }

    @media only screen and (min-width: 375px)and (min-height: 667px) {
        .login {
            height: 100%;
            min-height: 667px;
            background: #ffffff;
        }

        .logo img {
            width: 68px;
        }

        .eyes-closed {
            position: absolute;
            top: 230px;
            right: 30px;
        }

        .eyes-closed img {
            height: 6px;
        }

        .eyes-open {
            position: absolute;
            top: 230px;
            right: 30px;
        }

        .eyes-open img {
            height: 12px;
        }
    }

    @media only screen and (min-width: 375px)and (min-height: 812px) {
        .login {
            height: 100%;
            min-height: 812px;
            background: #ffffff;
        }

        .logo img {
            width: 68px;
        }

        .eyes-closed {
            position: absolute;
            top: 230px;
            right: 30px;
        }

        .eyes-closed img {
            height: 6px;
        }

        .eyes-open {
            position: absolute;
            top: 230px;
            right: 30px;
        }

        .eyes-open img {
            height: 12px;
        }
    }

    @media only screen and (min-width: 384px) {
        .login {
            height: 100%;
            min-height: 640px;
            background: #ffffff;
        }

        .logo img {
            width: 70px;
        }

        .eyes-closed {
            position: absolute;
            top: 231px;
            right: 30px;
        }

        .eyes-closed img {
            height: 6px;
        }

        .eyes-open {
            position: absolute;
            top: 231px;
            right: 30px;
        }

        .eyes-open img {
            height: 12px;
        }
    }

    @media only screen and (min-width: 412px) {
        .login {
            height: 100%;
            min-height: 732px;
            background: #ffffff;
        }

        .logo img {
            width: 76px;
        }

        .eyes-closed {
            position: absolute;
            top: 238px;
            right: 30px;
        }

        .eyes-closed img {
            height: 7px;
        }

        .eyes-open {
            position: absolute;
            top: 238px;
            right: 30px;
        }

        .eyes-open img {
            height: 14px;
        }
    }

    @media only screen and (min-width: 414px) {
        .login {
            height: 100%;
            min-height: 736px;
            background: #ffffff;
        }

        .logo img {
            width: 76px;
        }
    }

    @media only screen and (min-width: 414px)and (min-height: 896px) {
        .login {
            height: 100%;
            min-height: 896px;
            background: #ffffff;
        }

        .logo img {
            width: 76px;
        }
    }

    @media only screen and (min-height: 938px) {
        .login {
            height: 100%;
            min-height: 938px;
            background: #ffffff;
        }

        .logo img {
            width: 76px;
        }
    }

    .padding25 {
        padding: 25px;
    }

    .logo {
        text-align: center;
        margin-top: 45px;
        overflow-y: hidden;
    }

    .content-list {
        margin-top: 45px;
    }

    .list-item {
        line-height: 40px;
        font-size: 14px;
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #f1f1f1;
    }

    .list-info {
        height: 16px;
    }

    .info {
        font-size: 12px;
        color: #FF4C4C;
        margin-top: 5px;
    }

    .info span {
        position: relative;
        top: -2px;
        margin-left: 2px;
    }

    .list-button {
        margin-top: 20px;
    }

    .list-button .submit {
        background: #E2231A;
        border-radius: 6px;
        height: 50px;
    }

    .forget {
        font-size: 13px;
        color: #bbbbbb;
        text-align: right;
    }

    .forget a:link, a:visited, a:hover, a:active {
        color: #bbbbbb;
    }

    .list-bottom a {
        color: #E2231A;
    }
    .list-bottom {
        font-size: 13px;
        color: #bbbbbb;
        text-align: center;
        margin-top: 30px;
    }



</style>
