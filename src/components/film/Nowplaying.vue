<template>
    <div>
        <div class="playinglist" v-for="data in playinglist" :key="data.filmid" @click="intoDetails(data.filmId)">
            <img :src="data.poster">
            <h4 v-text="data.name"></h4>
            <span v-text="'观众评分：'+data.grade"></span>
            <p>主演：{{data.actors | actorFilter}}</p>
        </div>
    </div>
</template>

<script>
import http from "@/utils/http.js";
export default {
    data(){
        return {
            playinglist:[]
        }
    },
    mounted(){
        http.request({
            url:`/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=8317728`,
            headers:{
                'X-Host': 'mall.film-ticket.film.list'
            }
            }).then(res=>{
            console.log(res.data)
            this.playinglist = res.data.data.films
            })
    },
    methods:{
        intoDetails(id){
            this.$router.push(`/detail/${id}`);
        }
    }
}
</script>

<style lang="scss" scoped>
    .playinglist{
        overflow: hidden;
        padding: 5px;
        img{
            width: 60px;
            float: left;
            margin-right: 20px;
        }
    }
</style>