<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="left-child" >
        <img v-if="cartLength===cartAllLength" @click="ClearAll" src="~assets/img/shopping/pitchOn.png">
        <img v-else @click="CheckAll" src="~assets/img/shopping/pitch off.png">
      </div>
      <div class="text"><span>全选</span></div>
    </div>
    <div class="center"><span>合计：{{totalPrice}}</span></div>
    <div class="right"><span>去计算({{cartLength}})</span></div>
  </div>
</template>

<script>
export default {
  name: "CartBottomBar",
  data(){
    return{
      length:this.$store.state.cartList.length
    }
  },
  methods:{
    //当处于全不选的时候，我们可以添加全选按钮
    CheckAll(){
      //直接遍历数组里面的内容
       for(let item of this.$store.state.cartList){
         item.checked=true
       }
    },
    //当处于全选的时候，我们可以添加全不选按钮
    ClearAll(){
      for(let item of this.$store.state.cartList){
        item.checked=false
      }
    }
  },
  computed:{
    //价格汇总
    cartAllLength(){
      //将商品的长度作为返回值返回
      return this.$store.state.cartList.length
    },
    totalPrice(){
      //使用filter对数组进行过滤
      return '￥'+this.$store.state.cartList.filter(item =>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue+item.price*item.count//每次想乘的结果会保留在preValue里面
      },0).toFixed(2)//toFixed 用来指定保留几位小数
    },
    cartLength(){
      return this.$store.state.cartList.filter(item =>{
        return item.checked
      }).length  //前面这个值是返回所有处于选中状态的数组，
    }
  }
}
</script>

<style scoped lang="less">
.bottom-bar {
  position: fixed;
  width: 100%;
  height: 40px;
  left: 0;
  right: 0;
  bottom: 49px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}

.left {
  width: 20%;
  display: flex;
  margin-left: 2%;
  .left-child {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    position: absolute;
    width: 18px;
    height: 18px;
  }
  .text {
    color: black;
    font-size: 13px;
    width: 50%;
  }
}

.center{
  width: 40%;
  line-height: 40px;
  font-size: 13px;
}
.right {
  width: 25%;
  font-size: 13px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  color: white;
  background-color: orangered;
}


</style>
