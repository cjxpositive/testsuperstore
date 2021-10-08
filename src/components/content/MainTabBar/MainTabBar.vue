<template>
    <tab-bar>
      <tab-bar-item path="/home">
        <template #item-icon><img src="~assets/img/tabbar/Home.png"></template>
        <template #item-icon-active><img src="~assets/img/tabbar/Home (1).png"></template>
        <template #item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/classify">
        <template #item-icon><img src="~assets/img/tabbar/Category.png"></template>
        <template #item-icon-active><img src="~assets/img/tabbar/Category (1).png"></template>
        <template #item-text><div>分类</div></template>
      </tab-bar-item>

      <tab-bar-item path="/shopping">
        <template #item-icon><img src="~assets/img/tabbar/Buy.png"></template>
        <template #item-icon-active><img src="~assets/img/tabbar/Buy (1).png"></template>
        <template #item-text><div>购物车</div></template>
      </tab-bar-item>

      <tab-bar-item path="/my">
        <template #item-icon><img src="~assets/img/tabbar/Profile.png"></template>
        <template #item-icon-active><img src="~assets/img/tabbar/Profile (1).png"></template>
        <template #item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  activeColor: '',
  components: {
    TabBar,
    TabBarItem
  }

}
</script>

<style scoped>

</style>
