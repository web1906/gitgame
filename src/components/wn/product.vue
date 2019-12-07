<template>
    <div>
        <mt-header class="top"></mt-header>
        <router-link to="/index"><img :src="img1" class="image"/></router-link>
        <div class="title">商品详情</div>
        <router-link to="/my"><img :src="img2" class="right"/></router-link>
        <mt-swipe class="pro" :auto="2000" style="bottom:20px;">
            <mt-swipe-item v-for="item in items" :key="item.id">
            <img :src="item.url" class="img"/>
            </mt-swipe-item>
        </mt-swipe>
        <div class="goods-info" v-for="(item,index) of list" :key="'info-'+index">
            <p class="p1">{{item.lname}}</p>
            <p class="p2">￥{{item.price}}</p>
            <p class="p3">原价:<del>{{item.no_price}}</del></p>
        </div>
        <div class="goods-opt fn-clear">
            <a href="javascript:;" id="spec" class="col">商品规格:</a>
        </div>
        <div class="sp-intro"><h3>商品介绍:</h3></div>
        <div class="line"></div>
        <div class="fontIntro">
            <img src="../../../wnyx/public/20170819104118_84111.jpg" >
            <img src="../../../wnyx/public/20171204163918_37165.jpg" >
            <img src="../../../wnyx/public/20171204163928_42225.jpg" >
            <img src="../../../wnyx/public/20171204163934_91240.jpg" >
            <img src="../../../wnyx/public/20171204163940_29274.jpg" >
            <img src="../../../wnyx/public/20171204163945_15520.jpg" >
            <img src="../../../wnyx/public/20171204163950_88150.jpg" >
            <img src="../../../wnyx/public/20171204163954_14921.jpg" >
            <img src="../../../wnyx/public/20171204164044_75205.jpg" >
            <img src="../../../wnyx/public/20171204164004_25386.jpg" >
            <img src="../../../wnyx/public/20171204164009_80332.jpg" >
            <img src="../../../wnyx/public/20171204164013_58031.jpg" >
            <img src="../../../wnyx/public/20171204164018_94779.jpg" >
            <img src="../../../wnyx/public/20171204164022_16909.jpg" >
            <img src="../../../wnyx/public/20171204164026_18373.jpg" >
            <img src="../../../wnyx/public/20171204164030_70490.jpg" >
            <img src="../../../wnyx/public/20171204164035_81689.jpg" >
            <img src="../../../wnyx/public/20171204164040_11169.jpg" >
        </div>
        <mt-tab-item class="footer">
            <router-link to="/login" class="log">登录</router-link>
            |
            <router-link to="/register" class="log">注册</router-link>
            返回顶部
            <p>© 2014蜗牛版权所有</p>
        </mt-tab-item>
        <div class="btns" v-for="(item,index) of list" :key="index">
            <div class="flex3">
                <a href="javascript:;" class="buy-now">立即购买</a>
            </div>
            <div class="flex2 ml25">
                <van-cell  @click="cart" class="add-to-cart">加入购物车</van-cell>
            </div>
        </div>
        <div class="puop puop-bottom" style="width:100%; z-index:2019;">
                    <van-popup class="oppo overlayer" position="bottom" :style="{height:'50%'}" v-model="show">
                        <div class="items" v-for="(item,index) of list" :key="index">
                            <div class="header" >
                                <div class="img_pic">
                                    <img :src="'http://127.0.0.1:4000/'+item.img" class="uis" />
                                </div>
                            <div class="main">
                                <div class="price-wrap"><span class="price">{{item.price}}</span></div>
                                <div class="stock">库存88件</div>
                            </div>
                            <a href="javascript:;" class="close" @click="close">X</a>
                            </div>
                            <div class="body">
                        <div class="number-wrap">
                            <div class="number-line">
                                <label for="number">购买数量</label>
                                <div data-numbox-max="88" class="mui-numbox">
                                    <mt-button class="mui-btn" @click="reduce(index)">-</mt-button>
                                    <input type="number" v-model="item.count" class="mui-input-numbox">
                                    <mt-button class="mui-btn" @click="add(index)">+</mt-button>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                        <div class="footers" v-for="(item,index) of list" :key="'info2-'+index">
                            <a @click="addCart" :data-lid="item.lid" :data-lname="item.lname" :data-count="item.count" :data-price="item.price" :data-img="item.img">加入购物车</a>
                            <a>立即购买</a>
                        </div>
                    </van-popup>
                </div>
            <div class="v-modal" style="z-index:2002" v-show="show"></div>
    </div>
</template>

<script>
import {Swipe, SwipeItem} from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';

export default {
    components: {
  'mt-swipe': Swipe,
  'mt-swipe-item': SwipeItem
 },
    data(){
        return {
            items: [
                {url: require('../../../wnyx/public/20170818172100598.jpg')},
                {url: require('../../../wnyx/public/20170829102311131.jpg')},
                {url: require('../../../wnyx/public/20170829102356540.jpg')},
                {url: require('../../../wnyx/public/20170829102409732.jpg')},
                {url: require('../../../wnyx/public/20170829102423766.jpg')},
                {url: require('../../../wnyx/public/20170829102437952.jpg')}
                ],
            img1:require("../../img/home.png"),
            img2:require("../../img/user.png"),
            list:[],
            show:false,
            count:1
        }
    },
    created(){
        this.loadMore();
    },
    methods:{
        add:function(index){
			this.list[index].count++	 
        },
        reduce:function(index){
			if(this.list[index].count<=1){
				this.list[index].count = 1
			}else {
			    this.list[index].count--
			}
		},
        cart(){
            this.show=true;
        },
        close(){
            this.show=false;
        },
        addCart(event){
            //将商品添加至购物车
            // 1:添加参数event事件对象
            // 2:获取三个定义属性
            var lid=event.target.dataset.lid;
            var lname=event.target.dataset.lname;
            var price=event.target.dataset.price;
            var count=event.target.dataset.count;
            var img=event.target.dataset.img;
            console.log(lid+":"+lname+":"+count+":"+price);
            // 3:创建url请求服务器地址
            var url="addcart";
            // 4.创建obj添加参数
            var obj={lid,lname,price,count,img};
            console.log(obj);
            // 5:发送ajax访问服务器程序
            this.axios.get(url,{params:obj}).then(res=>{
                console.log(res);
            if(res.data.code==-1){
                this.$toast("请登录");
            }else{
                this.$toast("添加成功");
                this.show=false;
            }
            })
            // 6:如果没有登录提示
            // 7.如果添加成功提示
        },
        loadMore(){
            var url="shopping";
            this.lid=this.$route.params && this.$route.params.lid;
            var obj={lid:this.lid};
            this.axios.get(url,{params:obj}).then(result=>{
                console.log(result);
            var rows=this.list.concat(result.data.data);
            this.list=rows;
          })
        }
    }
}
</script>

<style scoped>
    .pro{
        position: relative;
        top:-10px;
        height: 414px;
    } 
    .img{
        height: auto;
        width: 100%;
    }
    .right{
        width: 7%;
        top: 10px;
        padding: 0 5px;
        position: absolute;
        left: auto;
        z-index: 1;
        right: 10px;
    }
    .image{
        width: 5%;
        left: 10px;
        top:10px;
        position: absolute;
        z-index: 1;
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
        height: 0px;
        font-size: 16px;
        top:-25px;
        text-align: center;
    }
    .goods-info{
        padding: 0 20px;
        text-align: left;
    }
    .p1{
        font-size: 20px;
        color: #000000;
        margin: 15px 0 15px 0;
    }
    .p2{
        color: #fc5353;
        font-size: 24px;
        margin-bottom: 10px;
    }
    .p3{
        font-size: 20px;
        color: #b2b2b2;
        margin-bottom: 10px;
    }
    .goods-opt{
        height: 48px;
        line-height: 48px;
        padding: 0 20px;
    }
    .col{
        height: 48px;
        width: 100%;
        padding: 0 15px 0 0;
        box-sizing: border-box;
        color: #666564;
        display: flex;
        font-size: 14px;
        line-height: 48px;
        border-top: 1px solid #e5e5e1;
        border-bottom: 1px solid #e5e5e1;
        background: url(../../img/arrow-right.png) right center no-repeat;
        background-size: 10px;
    }
    .sp-intro h3{
        font-size: 16px;
        color: #666564;
        margin: 10px 0 10px 20px;
        text-align: left;
        font-weight: normal;
    }
    .line{
        margin: 0 20px;
        height: 0;
        border-top: 1px solid #e5e5e1;
    }
    .fontIntro{padding: 0 10px;}
    .fontIntro img {
        width: 100%;
        display: block;
    }
    .btns{
        display: -webkit-box;
        position: fixed;
        width: 100%;
        height: 90px;
        padding: 15px;
        box-sizing: border-box;
        left: 0;
        bottom: 0;
        z-index: 2;
        background-color: #fff;
    }
    .flex3{
        -webkit-box-flex: 3;
        box-sizing: border-box;
    }
    .buy-now{
        display: block;
        width: 100%;
        height: 60px;
        background-color: #6dc343;
        text-align: center;
        line-height: 60px;
        color: #fff;
        font-size: 20px;
    }
    .add-to-cart{
        display: block;
        width: 100%;
        height: 60px;
        background-color: #fc5353;
        text-align: center;
        line-height: 40px;
        color: #fff;
        font-size: 18px;
    }
    .flex2 {
        -webkit-box-flex: 2;
        box-sizing: border-box;
    }
    .puop{
        position: fixed;
        background: #fff;
        top: 50%;
        left: 50%;
        -webkit-transform: translate3d(-50%, -50%, 0);
        transform: translate3d(-50%, -50%, 0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: .2s ease-out;
        transition: .2s ease-out;
    }
    .puop-bottom{
        top: auto;
        right: auto;
        bottom: 0;
        left: 50%;
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0);
    }
    .oppo{
        width: 100%;
        min-height: 375px;
        max-height: 475px;
        background-color: #fff;
    }
    .oppo .items{
        padding:10px;
    }
    .oppo .items .header{
        padding: 10px 0 20px 126px;
        position: relative;
    }
    .oppo .items .header .img_pic{
        width: 20%;
        position: absolute;
        top: -5px;
        left: 35px;
        border-radius: 4px;
        overflow: hidden;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 1px;
        background-color: #fff;
    }
    .oppo .items .header .main{
        color: #051b28;
        font-size: 13px;
        line-height: 18px;
        padding-right: 20px;
        text-align: left;
    }
    .oppo .items .header .main .price-wrap{
        width: 210px;
    }
    .oppo .items .header .main .price-wrap .price{
        font-family: arial;
        font-size: 16px;
        color: #FF0036;
        word-wrap: break-word;
    }
    .oppo .items .header .close{
        position: absolute;
        top: 6px;
        right: 10px;
    }
    .oppo .items .body .number-wrap .number-line{
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        padding: 10px 0px;
        line-height: 30px;
        text-align: left;
    }
    .oppo .items .body .number-wrap label{
        padding-left: 10px;
        color: #666;
        font-size: 13px;
        font-weight: 400;
    }
    .body{margin-top:15px;}
    .mui-numbox{
        display: inline-block;
        position: relative;
        right: -180px;
    }
    .mui-btn{height: 30px;}
    .mui-input-numbox{
        width: 30px;
        height: 25px;
        text-align: center;
    }
    .footer{
        width: 100%;
        height: 100px;
        position:relative;
        bottom: -5px;
        text-align: center;
    }
    .footers{
        width: 100%;
        height: 50px;
        position:absolute;
        bottom: 0;
        text-align: center;
    }
    .oppo .footers a{
        float: left;
        width: 50%;
        color: #fff;
        background-color: #FF0036;
        display: block;
        line-height: 50px;
    }
    .oppo .footers a:nth-of-type(1){
        background:#ffbc00;
    }
    .v-modal{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background: #000;
    }
    .uis{
        width: 100%;
    }
</style>
