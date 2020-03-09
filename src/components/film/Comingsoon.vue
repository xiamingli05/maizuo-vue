<template>
    <div>
        <div class="cominglist" v-for="data in cominglist" :key="data.filmid" @click="intoDetails(data.filmId)">
            <img :src="data.poster">
            <h4 v-text="data.name"></h4>
            <p>主演：{{data.actors | actorFilter}}</p>
        </div>
    </div>
</template>

<script>
import http from "@/utils/http.js";
export default {
    data(){
        return {
            cominglist:[]
        }
    },
    mounted(){
        http.request({
            url:`/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=4720306`,
            headers:{
                'X-Host': 'mall.film-ticket.film.list'
            }
            }).then(res=>{
            console.log(res.data)
            this.cominglist = res.data.data.films
            })
    },
    methods:{
        intoDetails(id){
            this.$router.push(`/detail/${id}`)
        }
    }
}
</script>

<style lang="scss" scoped>
    .cominglist{
        overflow: hidden;
        padding: 5px;
        img{
            width: 60px;
            float: left;
            margin-right: 20px;
        }
    }
</style>