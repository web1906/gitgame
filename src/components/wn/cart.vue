<template>
    <div>
        <mt-header class="top"></mt-header>
        <router-link to="/index"><img :src="img" class="image"/></router-link>
        <div class="title">我的购物车</div>
        <router-link to="/my"><img :src="img2" class="right"/></router-link>
        <mt-navbar v-model="selected" class="list">
            <mt-tab-item id="1">实物商品</mt-tab-item>
            <mt-tab-item id="2">虚拟商品</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="cartlist" v-for="(item,index) of list" :key="'info-'+index">
                    <div class="cartstart" >
                        <div class="min">
                                {{item.lname}}
                            <a @click="del" :data-id="item.id" href="javascript:;" class="redact redacts" ><span class="padding">|</span>删除</a>
                            <a href="javascript:;" class="redact redacts">编辑</a>
                        </div>
                        <div class="content">
                            <a class="clice fn-left">
                                <input type="checkbox" v-model="item.cb" @change="itemchange()" class="pic" height="20px">
                            </a>
                            <div class="good-img fn-left">
                                <img :src="'http://127.0.0.1:4000/'+item.img" class="pic" height="50px" width="50px">
                            </div>
                            <div class="goods-item">
                                <p>
                                    单价:
                                    <span class="col-red">￥
                                        <b>{{item.price}}</b>
                                    </span>
                                </p>
                                <p>
                                    数量:<span class="col-red">{{item.count}}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-pic" v-for="(item,i) of list" :key="i">
                    <p class="p1 fn-left">
                        <a href="javascript:;" class="col-img fn-left">
                            <input type="checkbox" @change="selectAll()" v-model="allcb" />
                            全选
                        </a>
                    </p>
                    <div class="redacts">
                        <p class="p2 fn-left" >
                            总计:&yen;
                            <span class="total">{{pricetotale}}</span>
                        </p>
                        <a href="javascript:;" class="redacts submit">结算</a>
                    </div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
export default {
    data(){
        return {
            selected:'1',
            img:require("../../img/back.png"),
            img2:require("../../img/user.png"),
            list:[],
            allcb:false
        }
    },
    created(){
        this.loadMore();
    },
    methods:{
        itemchange(){
            var sum=0;
            for(var item of this.list){
                if(item.cb){
                    sum++;
                }
                // console.log(sum);
                // console.log(this.list.length);
                if(sum==this.list.length){
                    this.allcb=true;
                }else{
                    this.allcb=false;
                }
            }
        },
        selectAll(){
            var all=event.target.checked;
            for(var item of this.list){
                item.cb=all;
            }
        },
        del(event){
            var id=event.target.dataset.id;
            console.log(id);
            var url="del";
            var obj={id};
            this.axios.get(url,{params:obj}).then(res=>{
                console.log(res);
                if(res.data.code > 0){
                    this.$toast("删除成功");
                    this.loadMore();
                } 
            })
        },
        loadMore(){
            var url="hopcart"
            this.axios.get(url).then(res=>{
                console.log(res.data.code);
                if(res.data.code==-1 || sessionStorage.length==0){
                    this.$messagebox("消息","请登录").then(res=>{
                        this.$router.push("/Login");
                    })
                }else{
                    var list=res.data.data;
                    for(var item of list){
                        item.cb=false;
                    }
                    this.list=list;
                    for(var item of this.list){
                    }
                }
            })
        }
    },
    computed: {
        //计算总价
        pricetotale: function() {
            var tatol = 0;
            for(var i = 0; i < this.list.length; i++) {
                var item = this.list[i];
                if(item.cb==true){
                    tatol += item.price * item.count
                }
            }
            return tatol.toString().replace(/\B(?=(\d{3})+$)/g, ',')
        }
    },
}
</script>

<style scoped>
    .image{
        display: flex;
        left:0;
        width: 30px;
        top: 7px;
        z-index: 1;
        position: absolute;
    }
    .right{
        display: flex;
        width: 30px;
        top: 7px;
        right: 0;
        padding: 0 5px;
        position: absolute;
        z-index: 1;
    }
    .top{
        width:100%;
        height:50px;
        display: flex;
        position: absolute;
        top:0;
        left: 0;
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
    .list{
        margin-top:10px;
    }
    .cartlist{
        height: 160px;
        margin-bottom: 20px;
        margin-top:10px;
        background-color: #fff;
    }
    .cartstart{
        padding: 0 15px;
    }
    .min{
        height: 40px;
        border-bottom: 1px solid #cccccc;
        line-height: 40px;
        margin-bottom: 20px;
        font-size: 14px;
        overflow: hidden;
        color:#999896;
        text-align: left;
    }
    .redacts{
        float: right;
    }
    .redact{
        display: block;
        height:40px;
        line-height:40px;
        color:#3d4245;
    }
    .padding{padding:0 5px;}
    .content{
        height: 100px;
        position: relative;
        overflow: hidden;
    }
    .clice{
        display: block;
        width: 20px;
        height: 40px;
        margin-right: 5px;
        padding-top: 10px;
    }
    .fn-left{float: left;}
    .good-img{margin-right:20px;}
    .pic{margin-top: 0;}
    .goods-item{
        margin-left: 80px;
        height: 70px;
        padding-right: 68px;
        text-align: left;
        font-size: 14px;
        margin-top: -15px;
        color:#999896;
    }
    .col-red{color:#ed4040;}
    .bottom-pic{
        width: 100%;
        height: 70px;
        position: fixed;
        left: 0;
        bottom: 0;
        padding: 0 10px;
        box-sizing: border-box;
        background-color: #fff;
        border-top: 1px solid #c6c6c6;
        z-index: 2;
    }
    .p1{
        color: #8f8f8f;
        font-size: 14px;
        margin-top: 20px;
        line-height: 30px;
    }
    .col-img{
        display: block;
        width:100px;
        color:#999896;
    }
    .mar{
        position: absolute;
        top: 25px;
        left: 15px;
    }
    .p2 {
        color: #fc5353;
        font-size: 16px;
        margin-top: 20px;
        line-height: 30px;
    }
    .submit{
        width: 120px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        display: block;
        background-color: #6dc343;
        color: #fff;
        text-align: center;
        margin: 15px 0 0 10px;
    }
</style>
