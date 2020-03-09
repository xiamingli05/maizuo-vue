<template>
  <div class="detailall">
    <div class="details" v-show="isShow">
      <my-title @back="handleback" v-title="40">{{filminfo.name}}</my-title>
      <img :src="filminfo.poster" alt class="photo" />

      <div class="filmdetail">
        <h3>{{filminfo.name}}{{filminfo.filmType.name}}</h3>
        <p v-text="filminfo.category" class="category"></p>
        <p class="time">{{filminfo.premiereAt | dateFilter}}</p>
        <p class="nation" v-text="filminfo.nation + '|' + filminfo.runtime"></p>
        <p
          v-text="filminfo.synopsis"
          :class="isActive?'synopsis':''"
          class="infomation"
          @click="infoUp"
        ></p>
        <span v-text="filminfo.grade"></span>
      </div>

      <div class="actors">
        <h4 class="actoe-title">演职人员</h4>
        <div class="actor-box">
          <swiper
            :kerwindata="{
      slidesPerView: 3,
      spaceBetween: 10,
      freeMode: true
    }"
            kerwinclass="actor"
          >
            <div class="swiper-slide" v-for="(data,index) in filminfo.actors" :key="index">
              <img :src="data.avatarAddress" />
            </div>
          </swiper>
        </div>
      </div>

      <div class="filmphoto">
        <h4 @click="showphoto">剧照</h4>
        <swiper
          :kerwindata="{
      slidesPerView: 2,
      spaceBetween: 10,
      freeMode: true
    }"
          :kerwinclass="photo"
        >
          <div
            class="swiper-slide"
            v-for="(data,index) in filminfo.photos"
            :key="data"
            @click="handlePreview(index)"
          >
            <img :src="data" />
          </div>
        </swiper>
      </div>
    </div>

    <photo v-show="isPhotoShow" :list="filminfo.photos" @event="handlePreview($event)">
      <my-title @back="handlePhotoShow">剧照 ( {{filminfo.photos.length}} )</my-title>
    </photo>
  </div>
</template>

<script>
import http from "@/utils/http";
import swiper from "@/components/Swiper";
import photo from "@/components/detail/Photo";
// import Vue from 'vue';
// import { ImagePreview,Dialog } from 'vant';
// Vue.use(ImagePreview).use(Dialog)
export default {
  data() {
    return {
      filminfo: null,
      isActive: true,
      isShow: true,
      isPhotoShow: false
    };
  },
  components: {
    swiper,
    photo
  },
  methods: {
    handleback() {
      this.$router.back();
    },
    infoUp() {
      this.isActive = false;
    },
    showphoto() {
      this.isPhotoShow = true;
      this.isShow = false;
    },
    handlePhotoShow() {
      this.isPhotoShow = false;
      this.isShow = true;
    }
    // handlePreview(index){
    //   ImagePreview({
    //     images: this.filminfo.photos,
    //     startPosition: index,// 从0
    //     closeable:true,
    //     closeIconPosition:"top-left",
    //     onClose() {
    //       // do something
    //     }
    //   });
    // }
  },
  mounted() {
    http
      .request({
        url: `/gateway?filmId=${this.$route.params.id}&k=893882`,
        headers: {
          "X-Host": "mall.film-ticket.film.info"
        }
      })
      .then(res => {
        this.filminfo = res.data.data.film;
      });
  }
};
</script>

<style lang="scss" scoped>
.detailall {
  margin-bottom: 50px;
  .details {
    background: #eee;
    .photo {
      width: 100%;
      height: 180px;
    }
    .filmdetail {
      position: relative;
      padding: 15px;
      background: #fff;
      h3 {
        padding-bottom: 15px;
      }
      .synopsis {
        height: 32px;
        overflow: hidden;
      }
      p {
        padding-bottom: 8px;
        font-size: 14px;
        color: #797d82;
      }
      span {
        position: absolute;
        display: block;
        right: 10px;
        top: 10px;
        font-size: 26px;
        color: goldenrod;
        font-style: oblique;
      }
    }
    .actors {
      padding: 15px;
      background: #fff;
      h4 {
        margin: 12px 0;
      }
      .actor-box {
        img {
          width: 100%;
          height: 120px;
        }
      }
    }
    .filmphoto {
      padding: 15px;
      background: #fff;
      h4 {
        margin: 12px 0;
      }
      img {
        width: 100%;
        height: 100px;
      }
    }
  }
}
</style>