// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from "axios"
import MintUi from 'mint-ui'
import "./font/iconfont.css"
import "mint-ui/lib/style.css"
import 'vant/lib/index.css';
import Popup from 'vant';


axios.defaults.baseURL="http://127.0.0.1:4000/"
axios.defaults.withCredentials=true
Vue.prototype.axios=axios 

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Popup)
Vue.use(MintUi)
Vue.use(Vuex)

var store = new Vuex.Store({
  state:{ //共享:数据
    fa:12, //共享:亮哥发量
    cartCount:0,
    count:1,
    show:false
  },
  mutations:{//修改共享数据
  reduce(state){
    state.cartCount--;
  },
  gain(state){
    state.cartCount++;
  },
  clears(state){
    state.cartCount = 0;//清空
  },
  subItem(state){
  state.fa--; //一次减一根
  },
  clear(state){
  state.fa = 0;//清空
  }
  },
  getters:{//获取共享数据
  getCart(state){
    return state.cartCount;
  },
  getFa(state){
  return state.fa;
  }
  },
  actions:{
    modifyCount:(context)=>{
      setTimeout(()=>{
        context.commit("clear");
      },500)
    }
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
