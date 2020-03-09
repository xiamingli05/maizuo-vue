<template>
    <div class="title">
        <i class="iconfont icon-back" @click="handleClick()"></i>
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    methods:{
        handleClick(){
            this.$emit('back');
        }
    }
}
</script>

<style lang="scss" scoped>
    .title{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 40px;
        background: white;
        text-align:center;
        line-height: 40px;
        i{
            position: absolute;
            left: 0;
            top:0;
            background: #eee;
            border-radius: 50%;
            display: block;
            height: 30px;
            width: 30px;
            text-align: center;
            line-height: 30px;
            margin: 5px;
        }
    }
</style>