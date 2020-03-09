<template>
    <div>
        <swiper :key="looplist.length">
            <div class="swiper-slide" v-for="data in looplist" :key="data.bannerId">
                <img :src="data.imgUrl"/>
            </div>
        </swiper>
        <div class="filmbar">
            <router-link tag="span" to="/film/nowplaying" activeClass="filmon">正在热映</router-link>
            <router-link tag="span" to="/film/comingsoon" activeClass="filmon">即将上映</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Swiper from "./Swiper";
import http from "@/utils/http.js";
export default {
    data(){
        return {
            looplist:[]
        }
    },
    components:{
        Swiper
    },
    mounted(){
        http.request({
      url:"/gateway?type=2&cityId=310100&k=3529285",
      headers:{
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res=>{
        this.looplist=res.data.data;
        console.log(res.data.data);
        
    })
    }
}
</script>

<style lang="scss" scoped>
    .swiper-slide{
        img{
            width: 100%;
        }
    }
    .filmbar{
        width: 100%;
        height: 30px;
        display: flex;
        span{
            display: inline-block;
            width: 50%;
            text-align: center;
            line-height: 30px;
        }
        .filmon{
            color: orangered
        }
    }
</style>