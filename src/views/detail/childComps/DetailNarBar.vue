<template>
  <div>
    <nav-bar class="nav-bar" ref="navNar">
      <template #left>
        <div class="nav-left" @click="backClick">
          <img class="back" src="~assets/img/tabbar/back.png" alt="">
        </div>
      </template>
      <!--    插槽必须使用新方法来使用-->
      <template #center>
        <div class="nav-center-content">
          <div v-for="(item,index) in titles"
               class="nav-center"
               :class="{active: currentIndex === index}"
               @click="btnClick(index)">
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";

export default {
  name: "DetailNarBar",
  components:
    {NavBar},
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    btnClick(index) {
      this.currentIndex = index;
      this.$emit('btnClick',index)
    },
    backClick(){
      //返回上一级
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.nav-bar{
  margin-top: 5px;
  border-bottom: 2px solid #eee;
  position: fixed;
  top: 0;
}
.nav-center-content {
  display: flex;
}

.nav-center {
  color: black;
  /*使里面的北荣进行均等分*/
  flex: 1;
}

.active {
  color: red;
}
.nav-left{
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back{
  height: 30px;
  width: 30px;
}
</style>
