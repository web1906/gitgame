<template>
    <div>
        <header class="mint-header is-fixed header">
            <router-link to="/" slot="left">
                <mt-button icon="back" style="color:#807f7d">back</mt-button>
            </router-link>
            <div class="mint-header-button is-left"></div>
                <h1 class="mint-header-title">登&nbsp;录</h1>
            <div class="mint-header-button is-right"></div>
        </header>
        <div class="login-content">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="uname" :attr="{autofocus:true}"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
        <mt-button size="large" @click="login" class="btn">登录</mt-button>
        <router-link to="/register" class="reg">注 册</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            uname:"",
            upwd:""
        }
    },
    methods:{
        login(){
           var name=this.uname;
           var pwd=this.upwd;
           console.log(name,pwd);
           var yz=/^[a-z0-9]{3,12}$/i;
           if(yz.test(name)==false){
               console.log(1);
               this.$messagebox("用户名格式不正确");
               return;
           }
           if(yz.test(pwd)==false){
               this.$messagebox("","密码格式不正确");
               return;
           }
           var url="login";
           var obj={uname:name,upwd:pwd};
           this.axios.get(
               url,
               {params:obj}
           ).then(res=>{
               console.log(res.data.code);
               if(res.data.code<0){
                   this.$messagebox("消息","用户名或密码有误");
               }else{
                   this.$toast("登录成功");
                   sessionStorage.setItem("lastname",name);
                   console.log(sessionStorage);
                   this.$router.push("/my");
              }
           });
        }
    }
}
</script>

<style scoped>
    .header{
        background:#f2f1ed;
        color:#807f7d;
        font-size:16px;
    }
    .btn{
        background:#f3c959;
        color:#000;
        margin-top:10px;
    }
    .reg{
        position: absolute;
        left: 15px;
        margin-top: 5px;
        color: #f3c959;
    }
    .login-content{padding: 20px;}
</style>
