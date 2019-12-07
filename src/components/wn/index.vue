<template>
    <div>
    <mt-header class="top"></mt-header>
    <img src="../../../src/assets/logo.png" width="25%" class="head">
        <mt-search id="search" cancel-text="搜索" placeholder="搜索"></mt-search>
        <mt-swipe class="lunbo" :auto="2000">
            <mt-swipe-item v-for="item in items" :key="item.id">
            <img :src="item.url" class="img"/>
            </mt-swipe-item>
        </mt-swipe>
        <div class="main">
            <div class="row" id="1">
            <div class="row-head">
                <img src="../../../wnyx/public/xptj.jpg">
            </div>
        <div class="row-body">
            <div class="flex1 row-item br1">
                <a href="javascript:;"><img src="../../../wnyx/public/4gsim.jpeg" class="f-img"></a>
            </div>
            <div class="flex1 row-item">
                <a href="#/product"><img src="../../../wnyx/public/mogame.jpeg" class="f-img"></a>
            </div>
        </div>
        </div>
        <div class="row" id="2">
        <div class="row-head">
            <img src="../../../wnyx/public/mkzq.jpg">
            <a href="javascript:;" class="more"><img src="../../../wnyx/public/more.jpg"></a>
        </div>
            <div class="row-body">
                <div class="mkleft row-item br1">
                    <a href="javascript:;"><img src="../../../wnyx/public/phonesim.jpeg" class="f-img"></a>
                </div>
                <div class="mkright row-item" style="width:50%">
                    <div class="mktop bb1">
                        <a href="javascript:;"><img src="../../../wnyx/public/30miank.jpeg" class="f-img"></a> 
                    </div>
                    <div class="mkbt">
                       <a href="javascript:;"><img src="../../../wnyx/public/guoji.jpeg" class="f-img"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" id="3">
        <div class="row-head">
            <img src="../../../wnyx/public/wnyj.jpg">
            <a href="javascript:;" class="more"><img src="../../../wnyx/public/more.jpg"></a>
        </div>
        <div class="row-body">
            <div class="flex1 row-item br1">
                <a href="javascript:;"><img src="../../../wnyx/public/wngame.jpeg" class="f-img"></a>
            </div>
            <div class="flex1 row-item">
                <a href="javascript:;"><img src="../../../wnyx/public/78c.jpeg" class="f-img"></a>
            </div>
        </div>
        </div>
        <div class="adv mb10">
            <a href="javascript:;"><img src="../../../wnyx/public/hone.jpeg"></a>
        </div>
        <div class="row" id="4">
            <div class="row-head">
                <img src="../../../wnyx/public/jyzj.jpg" alt="">
                <a href="javascript:;" class="more"><img src="../../../wnyx/public/more.jpg"></a>
            </div>
            <div class="row-body">
                <div class="flex1 row-item br1">
                    <a href="javascript:;"><img src="../../../wnyx/public/4b329908d7f991c86eb8c23580fe67cb5ed523a5.jpeg" class="f-img"></a>
                </div>
                <div class="flex1 row-item br1">
                    <a href="javascript:;"><img src="../../../wnyx/public/866d0f39eef3a2cca36b0e3f318734205fc18a79.jpeg" class="f-img"></a>
                </div>
                <div class="flex1 row-item br1">
                    <a href="javascript:;"><img src="../../../wnyx/public/2b188486da1bef3ba284572805369b3eae36281e.jpeg" class="f-img"></a>
                </div>
            </div>
        </div>
        <div class="row" id="5">
            <div class="row-head">
                <img src="../../../wnyx/public/msd.png" alt="">
                <a href="javascript:;" class="more"><img src="../../../wnyx/public/more.jpg"></a>
            </div>
            <div class="row-body">
                <div class="flex1 row-item br1">
                    <a href="javascript:;"><img src="../../../wnyx/public/4b329908d7f991c86eb8c23580fe67cb5ed523a5.jpeg" class="f-img"></a>
                </div>
                <div class="flex1 row-item br1">
                    <a href="javascript:;"><img src="../../../wnyx/public/866d0f39eef3a2cca36b0e3f318734205fc18a79.jpeg" class="f-img"></a>
                </div>
                <div class="flex1 row-item br1">
                    <a href="javascript:;"><img src="../../../wnyx/public/2b188486da1bef3ba284572805369b3eae36281e.jpeg" class="f-img"></a>
                </div>
            </div>
        </div>
        <div class="row" id="6">
            <div class="row-head">
                <img src="../../../wnyx/public/ztg.jpg" alt="">
                <a href="javascript:;" class="more"><img src="../../../wnyx/public/more.jpg"></a>
            </div>
            <div class="row-body">
                <div class="flex1 row-item br1">
                    <a href="javascript:;"><img src="../../../wnyx/public/4b329908d7f991c86eb8c23580fe67cb5ed523a5.jpeg" class="f-img"></a>
                </div>
                <div class="flex1 row-item br1">
                    <a href="javascript:;"><img src="../../../wnyx/public/866d0f39eef3a2cca36b0e3f318734205fc18a79.jpeg" class="f-img"></a>
                </div>
                <div class="flex1 row-item br1">
                    <a href="javascript:;"><img src="../../../wnyx/public/2b188486da1bef3ba284572805369b3eae36281e.jpeg" class="f-img"></a>
                </div>
            </div>
        </div>
        <div>
            <mt-tab-item class="footer">
                <router-link to="/login" class="log">登录</router-link>
                |
                <router-link to="/register" class="log">注册</router-link>
                <div class="inline"  @click="backTop(step)">返回顶部</div>
                <p>© 2014蜗牛版权所有</p>
            </mt-tab-item>
        </div>
    </div>
</div>
</template>

<script>
 import Vue from 'vue';
 import {Swipe, SwipeItem} from 'mint-ui';
 import { Navbar, TabItem } from 'mint-ui';

 Vue.component(Navbar.name, Navbar);
 Vue.component(TabItem.name, TabItem);

export default {
     components: {
  'mt-swipe': Swipe,
  'mt-swipe-item': SwipeItem
 },
 props:{
    step:{   //此数据是控制动画快慢的
       type:Number,
       default:50  
    }
        },
 data () {
  return {
  items: [{
   href:'http://google.com', url: require('../../../wnyx/public/lunbo.jpg')
  }, {
   href: 'http://baidu.com', url: require('../../../wnyx/public/lunbo.jpg')
  }, {
   href: 'http://baidu.com', url: require('../../../wnyx/public/lunbo.jpg')
  }, {
   href: 'http://baidu.com', url: require('../../../wnyx/public/lunbo.jpg')
  }],
  }
 },
 methods:{
    backTop(i){
        //参数i表示间隔的幅度大小，以此来控制速度
        document.documentElement.scrollTop-=i;
        if (document.documentElement.scrollTop>0) {
            var c=setTimeout(()=>this.backTop(i),15);
        }else {
            clearTimeout(c);
        }
    }
 }
}
</script>

<style scoped>
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
    .head{
        display: flex;
        top: 5px;
        z-index: 1;
        left: 10px;
        width: 10%;
        position: absolute;
    }
    .color{background:#fff;}
    #search{
        border:0px;
        display: flex;
        height:30px;
        margin-top:-25px;
        padding:0 0 0 125px;
        border-radius: 10px;
        position: relative;
        top: -5px;
    }
    .main{margin-top:10px;}
    .lunbo {
        height: 200px;
        position: relative;
        top:0;
    }
    .mint-swipe-indicators{z-index: 10;}
    .mint-swipe-indicator.is-active{background:#fff;}
    .mint-swipe-indicator{opacity: 0.5;}
    .desc {
        font-weight: 600;
        opacity: .9;
        padding: 5px;
        height: 20px;
        line-height: 20px;
        position: absolute;
        top:20px;
        color: #fff;
        z-index: 20;
    }
    .menu{
        background: #ddd;
        margin-top:5px;
    }
    .row-head{
        height: 44px;
        line-height: 44px;
        border-bottom: 1px solid #f0f0f0;
        position: relative;
        padding: 0 20px;
        text-align: left;
    }
    .row-body{
        display: -webkit-box;
        box-sizing: border-box;
    }
    .flex1 {
        -webkit-box-flex: 1;
        width: 0;
        box-sizing: border-box;
    }
    .row-head img{
        height:100%
    }
    .row {
        background-color: #fff;
        margin-bottom: 10px;
    }
    .more {
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        margin-right: 10px;
    }
    .row-item a {
        width: 100%;
        display: block;
    }
    .br1 {
        border-right: 1px solid #f0f0f0;
    }
    .mkleft{
        width: 50%;
    }
    .f-img {
        width: 100%;
    }
    .mkbt,.mktop {
        width: 100%;
    }
    .adv a img {
        width: 100%;
    }
    .mint-swipe-indicators{bottom:0;}
    
    .inline{
        padding: 5px 0 0 0;
        display: inline-block;
    }
    .log{
        color:#999896;
        text-decoration: none;
        font-size:14px;
        padding:0 10px;
    }
</style>
