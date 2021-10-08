<template>
  <div class="shop-info">
    <div class="goods-info" v-for="item in this.$store.state.cartList">
      <div class="left" @click="btnClick(item)">
        <img v-if="item.checked" src="~assets/img/shopping/pitchOn.png">
        <img v-else src="~assets/img/shopping/pitch off.png">
      </div>
      <div class="center"><img :src="item.image"></div>
      <div class="right">
        <div>{{ item.title }}</div>
        <div class="right-child">
          <div class="price">￥{{ item.price }}</div>
          <div><span class="X">X</span>{{ item.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopGoodsInfo",
  methods:{
    btnClick(item){
      item.checked = !item.checked
    }
  }
}
</script>

<style scoped lang="less">
.goods-info {
  display: flex;
  width: 100%;
  height: auto;
  border-bottom: 3px solid #eee;

  .center {
    width: 25%;
    height: 100%;
    padding: 2% 0;

    img {
      height: 70%;
      width: 100%;
      border-radius: 5px;

    }
  }

  .left {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-left: 2%;

    img {
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .right {
    width: 50%;
    font-size: 13px;
    padding: 2% 5%;
    .right-child {
      margin-top: 25%;
      display: flex;
      justify-content: space-between;
    }

    .price {
      color: red;
    }

    .X {
      font-size: 10px;
    }
  }
}
</style>
