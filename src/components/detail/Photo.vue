<template>
  <div class="myphoto">
    <slot></slot>
    <ul>
      <li v-for="(data,index) in list" :key="data" @click="handleClick(index)">
        <img :src="data" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClick(index) {
      this.$emit("event", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.myphoto {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 10;

  ul{
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: 40px;
    li {
      width: 33%;
      padding: 5px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100px;
      }
    }
  }
}
</style>