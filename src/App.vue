<template>
  <div id="app">
<!--   将detail这个组件排除在外-->
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
     <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/MainTabBar/MainTabBar";
export default {
  name: 'App',
  components:{
    MainTabBar
    // category
  }

}
</script>

<style>
/*引入外部样式*/
@import "./assets/css/base.css";
</style>
