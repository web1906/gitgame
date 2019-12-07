<template>
    <div>
        <mt-header class="top"></mt-header>
        <router-link to="/index"><img :src="img" class="image"/></router-link>
        <div class="title">个人中心</div>
        <img src="../../../wnyx/public/ucbanner.jpg" class="images" />
        <mt-tab-item class="icon" v-if="!login">    
            <router-link to="/login" class="login"></router-link>
            <p class="text">享受更多贴心服务</p>
        </mt-tab-item>
        <div v-else class="name">
            <p>{{name}}</p>
            <p>欢迎</p>
        </div>
        <div class="order ol">
            <router-link to="" class="ignb">订单查询</router-link>
        </div>
        <div class="order real">
            <router-link to="" class="ignb">实名认证</router-link>
        </div>
        <div class="order url">
            <router-link to="" class="ignb">地址管理</router-link>
        </div>
        <mt-button @click="logout" v-if="!show()">注销</mt-button>
        <mt-tab-item class="footer">
            <router-link to="/login" class="log">登录</router-link>
            |
            <router-link to="/register" class="log">注册</router-link>
            返回顶部
            <p>© 2014蜗牛版权所有</p>
        </mt-tab-item>
    </div>
</template>

<script>
export default {
    data(){
        return {
            img:require("../../img/home.png"),
            name:sessionStorage.getItem("lastname"),
            login:false
        }
    },
    methods:{
        show(){
            if(sessionStorage.length==1){
                this.login=true;
            }else if(sessionStorage.length == 0){
                this.login=false;
            }
        },
        logout(){
            if(sessionStorage.length==1){
                sessionStorage.clear();
                history.go(0);
            }else{
                return;
            }
        }
    }
}
</script>

<style scoped>
    .image{
        width: 5%;
        left: 10px;
        top: 15px;
        position: absolute;
    }
    .top{
        width:100%;
        height:50px;
        display: flex;
        position: absolute;
        top:0;
        background:#f2f1ed;
        border-bottom: 1px solid #cecdca;
        z-index: 1;
    }
    .title{
        z-index: 1;
        position: relative;
        top: -25px;
        height: 0px;
        font-size: 16px;
        text-align: center;
    }
    img{
        display: flex;
        left:0;
        width:0;
        z-index: 1;
        position: none;
    }
    .images{
        width:100%;
        display: flex;
        position: relative;
        left: 0;
        top:0;
    }
    .login{
        width: 25%;
        height: 8%;
        z-index: 6;
        position: absolute;
        top: 15%;
        left: 40%;
        background: url("../../img/login.png");
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .text{
        z-index: 10;
        display: block;
        width: 150px;
        position: relative;
        left: 35%;
        top: -90px;
        font-size: 14px;
        color:#fff;
    }
    .order{
        width: 90%;
        height: 50px;
        border-radius: 20px 20px 0px 0px;
        left: 20px;
        top: -30px;
        position: relative;
        background: #faf9f7;
        z-index: 1;
        text-align: left;
        line-height: 50px;
        background-image:url("../../img/uc-order.png");
        background-repeat: no-repeat;
        background-size:8%; 
        background-position: 10px;
        border:1px solid #e5e5e1;
    }
    .real{border-radius: 0 0 0 0;border-bottom:0;}
    .url{border-radius: 0 0 20px 20px;}
    .ol{border-bottom:0;}
    .ignb{
        margin-left:50px;
        text-decoration: none;
        color:#666564;
    }
    .footer{
        width: 100%;
        position: relative;
        color:#999896;
        font-size: 14px;
        text-align: center;
        padding: 20px 0 0 0;
    }
    .log{
        color:#999896;
        text-decoration: none;
        font-size:14px;
        padding:0 10px;
    }
    .name{
        position: relative;
        top: -120px;
        z-index: 1;
        color: #fff;
    }
</style>
