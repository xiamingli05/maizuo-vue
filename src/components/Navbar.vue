<template>
    <ul class="nav">
        <router-link v-for="data in navlist" :key="data.path" tag="li" :to="data.path" activeClass="tabon">
            <i class="iconfont" :class="data.icon"></i>
            <span v-text="data.text"></span>
        </router-link>
    </ul>
</template>

<script>
export default {
    data(){
        return {
                    navlist:[
                {
                path:'/film',
                text:'电影1',
                icon:'icon-all'
                },
                {
                path:'/cinema',
                text:'影院1',
                icon:'icon-category'
                },
                {
                path:'/center',
                text:'我的1',
                icon:'icon-account'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav{
        position: fixed;
        bottom: 0;
        width: 100%;
        left: 0;
        height: 50px;
        background: white;
        display: flex;
        font-size: 12px;
        z-index: 1000;
        
        .tabon{
            color: orangered;
        }
        li{
            flex:1;
            height: 100%;
            list-style: none;
            i{
                line-height: 24px;
                text-align: center;
                display:block;
            }
            span{
                line-height: 26px;
                text-align: center;
                display:block;
            }
        }
    }
</style>