<template>
  <div id="app">
      <navbar></navbar>
      <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components:{
    Navbar
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
</style>
