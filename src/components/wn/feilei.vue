<template>
    <div>
        <mt-header class="top"></mt-header>
        <mt-tab-item>
            <router-link to="/index"><img src="../../img/back.png" class="image"/></router-link>
            <mt-search id="search" cancel-text="搜索" placeholder="搜索"></mt-search>
        </mt-tab-item>
        <mt-navbar v-model="selected" class="list">
            <mt-tab-item id="1">新品推荐</mt-tab-item>
            <mt-tab-item id="2">免卡专区</mt-tab-item>
            <mt-tab-item id="3">蜗牛硬件</mt-tab-item>
            <mt-tab-item id="4">九阳真经</mt-tab-item>
            <mt-tab-item id="5">免商店</mt-tab-item>
            <mt-tab-item id="6">主题馆</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" class="mt-tab-container-item" >
                <div class="size-ui left" v-for="(item,i) of list" :key="i" @click="router(item.lid)">
                        <img :src="'http://127.0.0.1:4000/'+item.img_url" class="uis"/>
                            {{item.lname}}
                        <div class="color">￥{{item.price}}</div>
                    </div>
                    <mt-button type="primary" size="large" @click="loadMore" class="bottom-btn">加载更多</mt-button>
            </mt-tab-container-item>
            <mt-tab-container-item class="mt-tab-container-item" id="2">
                <div class="size-ui left" v-for="(item,i) of list" :key="i">
                        <img :src="'http://127.0.0.1:4000/'+item.img_url" class="uis"/>
                            {{item.lname}}
                        <div class="color">￥{{item.price}}</div>
                    </div>
            </mt-tab-container-item>
            <mt-tab-container-item class="mt-tab-container-item" id="3">
               <div class="size-ui left" v-for="(item,i) of list" :key="i">
                        <img :src="'http://127.0.0.1:4000/'+item.img_url" class="uis"/>
                            {{item.lname}}
                        <div class="color">￥{{item.price}}</div>
                    </div>
            </mt-tab-container-item>
            <mt-tab-container-item class="mt-tab-container-item" id="4">
                <div class="size-ui left" v-for="(item,i) of list" :key="i">
                        <img :src="'http://127.0.0.1:4000/'+item.img_url" class="uis"/>
                            {{item.lname}}
                        <div class="color">￥{{item.price}}</div>
                    </div>
            </mt-tab-container-item>
            <mt-tab-container-item class="mt-tab-container-item" id="5">
                <div class="size-ui left" v-for="(item,i) of list" :key="i">
                        <img :src="'http://127.0.0.1:4000/'+item.img_url" class="uis"/>
                            {{item.lname}}
                        <div class="color">￥{{item.price}}</div>
                    </div>
            </mt-tab-container-item>
            <mt-tab-container-item class="mt-tab-container-item" id="6">
                <div class="size-ui left" v-for="(item,i) of list" :key="i">
                        <img :src="'http://127.0.0.1:4000/'+item.img_url" class="uis"/>
                            {{item.lname}}
                        <div class="color">￥{{item.price}}</div>
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
            list:[],
            pno:0,
            data:[]
        }
    },
    created(){
        this.loadMore();
    },
    methods:{
        router(lid){
            var url="shopping";
            var obj={lid:this.lid}; 
            this.axios.get(url,{params:obj}).then(result=>{
                console.log(lid);
                this.$router.push({path:`product/${lid}`});
                this.data=result.data.data;
          })
        },
        addCart(event){
            //将商品添加至购物车
            // 1:添加参数event事件对象
            // 2:获取三个定义属性
            var lid=event.target.dataset.lid;
            var lname=event.target.dataset.lname;
            var price=event.target.dataset.price;
            var img=event.target.dataset.img;
            console.log(lid+":"+lname+":"+price);
            // 3:创建url请求服务器地址
            var url="addcart";
            // 4.创建obj添加参数
            var obj={lid,lname,price,img};
            console.log(obj);
            // 5:发送ajax访问服务器程序
            this.axios.get(url,{params:obj}).then(res=>{
                console.log(res);
            if(res.data.code==-1){
                this.$toast("请登录");
            }else{
                this.$toast("添加成功");
            }
            })
            // 6:如果没有登录提示
            // 7.如果添加成功提示
        },
        loadMore(){
            var url="product"
            this.pno++;
            var obj={pno:this.pno};
            this.axios.get(url,{params:obj}).then(res=>{
                // console.log(res);
                // this.list=res.data.data;
                var rows=this.list.concat(res.data.data);
                this.list=rows;
            })
            
        }
    }
}
</script>

<style scoped>
    .top{
        width:100%;
        height:50px;
        display: flex;
        position: fixed;
        top:0;
        left: 0;
        background:#f2f1ed;
        border-bottom: 1px solid #cecdca;
        z-index: 1;
    }
    .mint-search{height:0;}
    .image{
        display: flex;
        left:0;
        width: 30px;
        top: 10px;
        position: fixed;
        z-index: 1;
    }
    .list{
        display: block;
        overflow: hidden;
        height:100%;
        width: 100px;
        left: 0;
        top: 50px;
        background: #f1f2ed;
        position: fixed;
        z-index: 1;
    }
    #search{
        border:0px;
        display: flex;
        height:30px;
        margin-top:-30px;
        padding:0 0 0 125px;
        border-radius: 10px;
        position: fixed;
        top: 40px;
        z-index: 1;
    }
    .mt-tab-item{padding:17px 0;}
    .mt-tab-container-item{
        width: 80%;
        margin-left: 100px;
        overflow: hidden;
        background: #fff;
        min-height: 690px;
    }
    .uis{
        display: flex;
        z-index: 1;
        left: 10px;
        margin-top: 0;
        margin-left: 10px;
        width: 90%; 
    }
    .color{color:#ff6a00;font-size:10px;}
    .size-ui{
        font-size: 10px;
        left: 10px;
        position: relative;
        width: 40%;
        padding: 20px 20px 0 0px;
    }
    .left{float: left;}
    .bottom-btn{
        width: 50%;
        margin-left:20%; 
    }
</style>
