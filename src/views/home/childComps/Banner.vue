<template>
      <Swiper>
        <SwiperItem  v-for="item in Banner">
          <!--必须加到img里面才能监听到-->
          <img class="picture" :src="item.image" @load="ImageLoad">
        </SwiperItem>
      </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'

export default {
  name: 'Banner',
  data() {
    return {
      index: 0,
      isActive: false,
      isLoad: false,
      oldValue: 0,
      newValue: 0,
      imgArr: null,
      time: null
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    Banner: {
      type: Array,
      default(){
        return []
      }
    },
  },
  methods: {
    ImageLoad() {
      //使用isLoad使命令只执行一次，因为判断为true后，之就变成了true了
      if (!this.isLoad) {
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }
    },
    move() {

    }
  },

  mounted: function () {
    //实现轮播图
    //   setInterval(() => {
    //       this.index++;
    //       //关闭上一个定时器
    //       clearInterval(this.time);
    //       this.time = setInterval(() => {
    //           this.oldValue = parseInt(getStyle(this.imgArr, 'left'));
    //           this.newValue = parseInt(this.oldValue - 9 + 'px');
    //           this.$refs.imgArr.style.left = this.newValue + 'px';
    //           // console.log(this.newValue)
    //           if (this.newValue === -324 * this.index) {
    //             // console.log('====')
    //             // this.$refs.imgArr.style.left = 0 + 'px';
    //             clearInterval(this.time)
    //           }
    //           if (this.newValue === -324 * 4) {
    //             // console.log('----')
    //             //将this.index重新置零
    //             this.index = 0;
    //             this.$refs.imgArr.style.left = 0 + 'px';
    //           }
    //         }
    //         , 30)
    //     }
    //     , 3000)
    //
    //   function getStyle(obj, name) {
    //     //该方法用于获取任意样式
    //     if (window.getComputedStyle) {
    //       return getComputedStyle(obj, null)[name];
    //     }
    //   }
    // },
  }
}
</script>

<style>
/*.picture {*/
/*  height: 200px;*/
/*}*/

</style>
