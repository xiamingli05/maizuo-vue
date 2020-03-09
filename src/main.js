import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/index.js'
 //引入全局过滤器
import '@/utils/filter';
//引入全局组件
import '@/utils/component';
//引入全局自定义指令
import '@/utils/directive';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
