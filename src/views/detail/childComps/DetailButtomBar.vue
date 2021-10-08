<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"><img src="~assets/img/detail/service.png"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"><img src="~assets/img/detail/shop1.png"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"><img src="~assets/img/detail/select.png"></i>
        <span class="text">收藏</span>
      </div>
  </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailButtomBar",
  methods:{
    addToCart(){
       this.$emit('addToCart')
    }
  }
}
</script>

<style scoped lang="less">
img{
  margin-top: 5%;
  height: 25px;
  width: 25px;
}
.bottom-bar {
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display:flex;
  .bar-left{
    width: 50%;
    display: flex;
    justify-content: space-around;
    background-color: white;
    .text{
      display:block;
      font-size: 13px;
      text-align: center;
    }
  }
  .bar-right{
    width: 50%;
    display: flex;
    text-align: center;
    //这个属性不能使用百分比，必须使用像素才能生效
    font-size: 13px;
    line-height: 49px;
    .cart{
      width: 50%;
      background-color: yellow;
      color: black;
    }
    .buy{
      width: 50%;
      background-color: deeppink;
      color: white;
    }
  }
}
</style>
