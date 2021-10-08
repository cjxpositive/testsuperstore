<template>
  <div class="wrapper">
    <div class="container">
  
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>  
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>  
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>  
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>

    </div>
  </div>
</template>
<script>
 import BScroll from '@better-scroll/core'
 import PullUp from '@better-scroll/pull-up'
 //在这里使用PullUp插件
 BScroll.use(PullUp)
export default {
  name: "category",
  data(){
    return{
      scroll:null
    }
  },
//将组件挂载到模板上
   mounted(){
     this.scroll = new BScroll(document.querySelector('.wrapper'),{
      probeType:3,
      //把结果向上传
      pullUpLoad:true,
      click:true
    })
    //回调函数
    this.scroll.on('scroll',(position)=>{
      console.log(position)
    })
    this.scroll.on('pullingUp',()=>{
       console.log('上拉加载更多！');
    })
  }

}
</script>

<style scoped>
 .wrapper{
   width: 100%;
   height: 200px;
   background-color: pink;
   /*隐藏超出div的内容*/
   overflow: hidden;
 }
 /* .container{
   /* height: 170px; */
 /* } */ 
</style>
