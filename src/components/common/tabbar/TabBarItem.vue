<template>
  <div class="tab-bar-item" @click="itemClick">
<!--    使用具名插槽可以实现图片和文本的灵活替换-->
    <div v-if="isAcitve"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:{
      typ:String,
    },
    activeColor: {
      typ:String,
      default: 'red'
    }
  },
  computed:{
    isAcitve(){
       //判断当前的path是不是等于所处路由的path，在这里前面的path是所处路由的path，后面的path是从主组件中传过来的path，如果这两个相等
      //说明处于同一界面
      return this.$route.path.indexOf(this.path)
    },
    activeStyle(){
      return this.isAcitve?{}:{color:this.activeColor}
    }
  },
  data(){
    return{
    }
  },
  methods:{
     itemClick(){
       //不需要进行返回的推荐使用replace方法
         this.$router.replace(this.path)
     }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  /*公认最合适高度*/
  height: 49px;
  font-size: 13px;
}
img{
  height: 22px;
  width: 22px;
  margin-top: 3px;
}
.active{
  color: red;
}
</style>
