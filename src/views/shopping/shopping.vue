<template>
<div id="shopping">
<!--  标题栏-->
    <div class="nav-bar">
      <div class="center-bar"></div>
        <span>购物车({{cartLength}})</span>
    </div>
   <scroll class="content" ref="scroll">
<!--  商品信息展示-->
     <shop-goods-info></shop-goods-info>
   </scroll>
  <cart-bottom-bar class="bottom-bar"></cart-bottom-bar>
</div>
</template>

<script>
import Scroll from "components/common/betterScroll/Scroll";
import ShopGoodsInfo from "./child/shopGoodsInfo";
import CartBottomBar from "./child/CartBottomBar";
export default {
  name: "shopping",
  data(){
    return{
    }
  },
  components:{
    CartBottomBar,
    ShopGoodsInfo,
    Scroll
  },
  activated() {
    //刷新界面
    this.$refs.scroll.refresh()
  },
  computed:{
    cartLength(){
      //将商品的长度作为返回值返回
      return this.$store.state.cartList.length
    }
  }
}
</script>

<style scoped lang="less">
#shopping{
  height: 100vh;
  position: relative;
}
.content{
  height: 100vh -135px;
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 89px;
}
.nav-bar{
  background-color: pink;
  color: white;
  font-size: 16px;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  text-align: center;
  line-height: 44px;
}
.bottom-bar{
  background-color: #eee;
}

</style>
