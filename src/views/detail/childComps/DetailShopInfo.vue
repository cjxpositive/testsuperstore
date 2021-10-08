<template>
  <div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="flex shop-name-info">
      <img :src="shop.shopLogo" alt="" class="shop-img">
      <div>{{shop.name}}</div>
    </div>
    <div class="shop-other-info">
      <div class="content">
        <div class="child">
          <p class="f16">{{shop.cSells|saveNum}}</p>
          <p>总销量</p>
        </div>
        <div  class="child">
          <p class="f16">{{shop.cGoods}}</p>
          <p>全部宝贝</p>
      </div>
      </div>
      <div class="shop-other-item shop-other-right">
        <div v-for="item in shop.score" class="child1">
          {{item.name}}&ensp;
          <span class="score" :class="{active:item.isBetter}">{{item.score}}</span>
          <span class="score-bg" :class="{active:item.isBetter}">{{item.isBetter? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <div class="enter-shop-wrap">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    //对店铺的销售总量做一个处理
    saveNum(value){
      if(value < 10000) return value;
      return (value/10000).toFixed(1)+'万'
    }
  }
}
</script>

<style scoped lang="less">
   .detail-shop-info{
     margin-top: 10%;
      .shop-name-info{
        align-items: center;
        color: black;
           img{
             border-radius: 50%;
             height: 40px;
             width: 40px;
             margin: 0 2%;
           }
      }
   }
   .content{
     border-right: 2px solid black;
     display: flex;
     width: 49%;
     justify-content: space-around;
   }
   .shop-other-info{
     display: flex;
     //按空隙进行均匀分布
     justify-content: space-around;
     align-items: center;
     margin-top: 8%;
       .child{
         text-align: center;
         color: black;
         font-size: 14px;
         .f16{
           margin-bottom: 4%;
         }
       }
     }
   .shop-other-item{
     display: flex;
     flex-wrap: wrap;
     width: 50%;
     height: 20%;
     margin-left: 10%;
     color: black;
     font-size: 13px;
     align-items: center;
     .child1{
       width: 80%;
       margin-top:2%;
       display: flex;
       justify-content: space-between;
     }
     .score{
       color: #00A000;
       margin-left:2% ;
       width:20%;
       //让文本靠右进行显示
       text-align: left;
       &.active{
         color: red;
       }
     }
     .score-bg{
       background-color: #00A000;
       color: #fff;
       margin-left: 5%;
       &.active{
         background-color: red;
       }
     }
   }
   .enter-shop-wrap{
     margin-top: 10%;
     text-align: center;
     color: rebeccapurple;
   }

</style>
