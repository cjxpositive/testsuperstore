<template>
<div class="recommend">
  <div v-for="item in recommends">
    <a :href="item.link">
      <img :src="item.image">
    </a>
    <div class="text">{{item.title}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "Recommend",
  props:{
    recommends:{
      type:Array
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  height: 120px;
  /*top: 244px;*/
  /*position: absolute;*/
  text-align: center;
  font-size: 13px;
  /*border: 3px solid rgba(238, 230, 230, 0.6);*/
  border-bottom: 10px solid  #eee;
}
img {
  width: 70px;
  height: 70px;
  margin: 10px 5px;
  /*position: absolute;*/
}
a{
 width: 80px;
  height: 100px;
}

</style>
