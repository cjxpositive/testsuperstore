<template>
 <div class=" goods-list">
<!--      数据直接在子组件中进行遍历-->
      <GoodsListItem  v-for="item in goods"  :goods_item="item"></GoodsListItem>
    </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "goods",
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods-list{
  border-top: 5px solid #eee;
  display: flex;
  /*warp是指容器一行无法显示时，进行换行*/
  margin-top: 44px;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
