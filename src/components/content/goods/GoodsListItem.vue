<template>
  <div class="goods-item">
<!--    <img :src="goods_item.show.img" alt="" @load = 'imageLoad'>-->
    <!-- 注意这里不能加括号 -->
    <img :src="showImage"  @click="itemClick">
    <div><p>{{ goods_item.title }}</p></div>
    <span class="price">{{ "￥" + goods_item.price }}</span>
    <span class="collect">{{ "收藏" + goods_item.cfav }}</span>
    <!--    <img id="star" src="~assets/img/collect/before.png">-->
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods_item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed:{
    showImage(){
      return this.goods_item.image || this.goods_item.show.img
    }
  },
  methods:{
      // imageLoad() {
      //   this.$bus.$emit('itemImageLoad')
      // }
    itemClick(){
      //点击图片进行路由的跳转,需要进行返回的使用push方法
      this.$router.push('/detail/'+this.goods_item.iid)
    }
  }
}
</script>

<style scoped>
.goods-item {
  width: 160px;
  height: auto;
  /*text-align: center;*/

}

img {
  margin:1%;
  width: 98%;
  height:85%;
  border-radius: 5px;
}

p {
  width: 90%;
  height: 15px;
  font-size: 0.7em;
  white-space: nowrap;
  /*限制显示行数*/
  /*max-lines: 1;*/
  overflow: hidden;
  /*设置超出部分以省略号代替*/
  text-overflow:ellipsis;
  word-break: break-all;
}

.price {
  color: red;

}

span {
  font-size: 0.8em;
  margin-left: 10%;
}

#star {
  width: 15px;
  height: 15px;
}
</style>
