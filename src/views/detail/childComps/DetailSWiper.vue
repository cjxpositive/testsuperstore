<template>
    <swiper class="DetailSwiper">
      <swiper-item  v-for="item in topImages">
        <img :src="item">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
  name: "DetailSWiper",
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.DetailSwiper{
  /*z-index使层级关系 ，层级高的会在层级低的的上面*/
  height: 300px;
  overflow: hidden;
}


</style>
