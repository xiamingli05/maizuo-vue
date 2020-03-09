<template>
  <div class="cinema">
    <div class="title">
      <div class="left" @click="cityChange('/city')" v-text="cityName"></div>
      <div>影院</div>
      <div class="right">
        <i class="iconfont icon-search" @click="handleChangePage"></i>
      </div>
    </div>

    <div class="select">
      <div @click="isAreaShow=!isAreaShow" :class="isAreaShow?'active':''">{{current}}</div>
      <div>App订票</div>
      <div>最近去过</div>
    </div>

    <div class="area" v-show="isAreaShow">
      <ul>
        <li
          v-for="data in arealist"
          :key="data"
          @click="handleArea(data)"
          :class="data===current?'active':''"
        >{{data}}</li>
      </ul>
    </div>

    <div class="content">
      <ul>
        <cinema-item v-for="data in computedDatalist" :key="data.cinemaId" :data="data"></cinema-item>
      </ul>
    </div>
  </div>
</template>

<script>
import cinemaItem from "@/components/cinema/CinemaItem";
import { mapState , mapActions , mapMutations } from "vuex"; //mapState 是vuex提供的切割函数，
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      isAreaShow: false,
      current: "全城"
    };
  },
  components: {
    cinemaItem
  },
  computed: {
    ...mapState("cinema", ["cinemaList"]),
    ...mapState("city", ["cityName","cityId"]),
    //所有区的计算属性
    arealist(){
      //对象=>里面的某个属性
      var newarr = this.cinemaList.map(item=>item.districtName)
      //利用set结构进行数组去重，Array.from 把类数组结构转换成数组结构
      var arealist =["全城",...Array.from(new Set(newarr))]
      return arealist
    },
    //根据选择的不同区域，过滤出相应区域的影院
    computedDatalist(){
      if(this.current ==="全城") return this.cinemaList
      return this.cinemaList.filter(item=>item.districtName===this.current)
    }
  },
  beforeMount() {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      overlay: true, //是否显示背景遮罩层
      duration: 0 //不会消失
    });
  },
  mounted() {
      
    // disptch 到 vuex中action
    if (this.cinemaList.length === 0) {
      this.getCinemaAction().then(res => {
        Toast.clear();
        console.log(res);
      });
    } else {
      Toast.clear();
    }
  },
  methods: {
    ...mapActions("cinema", ["getCinemaAction"]),
    ...mapMutations("cinema",["setCinemaList"]),
    handleArea(data) {
      //改变current值， current值改变， 计算属性自动计算一遍
      this.current = data;
      this.isAreaShow = false;
    },
    handleChangePage() {
      this.$router.push(`/cinema/search`); //跳转路径
    },
    cityChange(path){
        if(path==='/city'){
            //清空共享状态 vuex cinemaList
        this.setCinemaList([]);
        }
        this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.active {
  border: 1px solid red !important;
}
.title {
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: white;
  z-index: 10;
  div {
    flex: 1;
    text-align: center;
  }
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
}

.select {
  display: flex;
  position: fixed;
  top: 40px;
  left: 0px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: white;
  z-index: 10;
  div {
    flex: 1;
    text-align: center;
  }
}
.content {
  position: relative;
  top: 80px;
}

.area {
  position: fixed;
  top: 80px;
  left: 0px;
  width: 100%;
  background: white;
  z-index: 10;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 25%;
      padding: 5px;
      box-sizing: border-box;
      text-align: center;
      list-style: none;
      // border:1px solid gray;
    }
  }
}
</style>