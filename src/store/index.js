import Vue from 'vue';
import Vuex from 'vuex';
import cinema from './module/cinemaModule';
import city from './module/cityModule';
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

//状态管理(共享)


const store = new Vuex.Store({
  modules:{
    cinema,
    city
  },
  plugins: [createPersistedState()]  //数据持久化
})
export default store
