//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//注册路由
Vue.use(VueRouter);

//引入组件



import Film from '@/components/Film.vue';
import Nowplaying from '@/components/film/Nowplaying.vue';
import Comingsoon from '@/components/film/Comingsoon.vue';
import Detail from '@/components/Details.vue';
import Cinema from '@/components/Cinema.vue';
//异步加载组件
const City =()=>import('@/components/City.vue');
//创建一个路由实例

const router=new VueRouter({
    // routes 描述了路由路径和组件之间的映射关系
    routes:[
        {path:'/film',component:Film,children:[
            {path:'/film/nowplaying',component:Nowplaying},
            {path:'/film/comingsoon',component:Comingsoon},
            {path:'/film',redirect:'/film/nowplaying'}
        ]},
        {path:'/',redirect:'/film'},
        {path: '/detail/:id',component: Detail},
        {path: '/cinema',component: Cinema},
        {path: '/city',component: City}
    ]
})
//抛出router实例
export default router;