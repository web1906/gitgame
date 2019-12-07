import Vue from 'vue'
import Vuex from 'vuex'

// const store = Vuex.store()


Vue.use(Vuex)

export default new Vuex.Store({
    state:{ //共享:数据
        fa:12, //共享:亮哥发量
        cartCount:0,
        login:false,
        uname:""
      },
      mutations:{
        setUname(state,uname){
          state.uname=unmae;
        }
      },
      actions: { //专门负责发送异步ajax请求，从服务器端获取数据
        login(context,user){ //context代表整个vuex对象
          (async function(){
            var result=await axios.get("/users/signin",{
              params:user
            });
            context.commit("setUname",result.data.uname);
          })()
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