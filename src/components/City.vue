<template>
  <div class="city">
    <van-search v-model="mycity" show-action placeholder="请输入搜索关键词"  @search="onSearch" />

    <van-index-bar :index-list="indexList" :sticky="false">
      <div v-for="(data,index) in citylist" :key="index">
        <van-index-anchor :index="data.index">{{data.index}}</van-index-anchor>
        <van-cell :title="item.name" v-for="(item,index) in data.list" :key="index" @click="handleClick(item)" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { Search,IndexBar, IndexAnchor,Cell } from "vant";
import {mapMutations} from 'vuex'
import http from '@/utils/http';

Vue.use(Search);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
export default {
  data() {
    return {
      mycity: "",
      citylist:[],
      indexList:[],
      allcity:[]
    };
  },
  mounted(){
    http.request({
      url:"/gateway?k=6373009",
      headers:{
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res=>{
      // console.log(res.data.data.cities)
      this.dataFilter(res.data.data.cities)
      console.log(this.citylist);
      this.allcity=res.data.data.cities;
    })
  },
  methods:{
    ...mapMutations("city",["setCityName","setCityId"]),
    dataFilter(cities){
      var letterArr = []
      for(var i=65;i<91;i++){
        letterArr.push(String.fromCharCode(i))
      }

      //filter 遍历26个字母， 跟cities数据.pinyin.首字母.大写 进行过滤
      var cityArr = []
      for(var j=0;j<letterArr.length;j++){
        // console.log()
        var temparr = cities.filter(item=>item.pinyin.substring(0,1).toUpperCase()===letterArr[j])
        //收集datalist数据
        temparr.length && cityArr.push({
          index:letterArr[j],
          list:temparr
        })

        // 收集indexList，右边的数据
        temparr.length && this.indexList.push(letterArr[j])
      }

      this.citylist = cityArr
    },
    onSearch(val){
        let searcharr=this.allcity.filter(item=>item.pinyin.includes(val)|| item.name.includes(val));
        
        this.citylist=searcharr;
        console.log(this.citylist);
        this.indexList=[];
        
    },
    handleClick(item){
      // console.log("1111111")

      // 修改vuex 共享的 城市数据
      this.setCityName(item.name)
      this.setCityId(item.cityId)

      // localStoreage
      // localStorage.setItem("cityId",item.cityId)
      // localStorage.setItem("cityName",item.name)

      this.$router.back();
    }  
}
};
</script>

<style lang="scss" scoped>
</style>