<template>
  <div v-if="Object.keys(goods).length !== 0">
    <div class="title">{{goods.title}}</div>
    <div class="price-wrap">
      <div class="new-price">{{goods.price}}</div>
      <div class="old-price">{{goods.oldPrice}}</div>
      <div class="discount-desc" v-if="goods.discountDesc">{{goods.discountDesc}}</div>
    </div>
    <div class="other-info">
      <div>{{goods.columns[0]}}</div>
      <div>{{goods.columns[1]}}</div>
      <div>{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="serves-wrap">
      <div v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        {{goods.services[index-1].name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props:{
    goods: {
      type: Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped lang="less">
 .title{
   color: black;
   margin-top: 3%;
 }
 .price-wrap{
   margin-top: 3%;
   display: flex;
   align-items: end;
   .new-price{
     font-size:20px;
     color:red;
     margin-left: 3%;
   }
   .old-price{
     margin-left: 3%;
     font-size: 14px;
     text-decoration: line-through;
   }
   .discount-desc{
     padding: 3px;
     border-radius: 5px;
     margin-left: 3%;
     font-size: 12px;
     background-color: hotpink;
     color: white;
   }
 }
 .other-info{
     display: flex;
     //第一个元素靠左边，最后一个元素靠右边进行排放
     margin-top: 6%;
     justify-content: space-between;
   font-size: 14px;
 }
 .serves-wrap{
   display: flex;
   //第一个元素靠左边，最后一个元素靠右边进行排放
   margin-top: 15%;
   justify-content: space-between;
   font-size: 10px;
   align-items: center;
   padding-bottom: 6%;
   border-bottom: 5px solid #eee;
   img{
     height: 15px;
     width: 15px;
     //设置图片垂直对齐
     vertical-align: middle;
   }
 }
</style>
