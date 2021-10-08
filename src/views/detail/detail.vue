<template>
  <div id="detail">
    <!--   详情页标题-->
    <detail-nar-bar @btnClick="btnClick" ref="navbar"></detail-nar-bar>
    <Scroll class="content" ref="scroll" :probeType="3" @scroll="colorFollow">
      <!--      <div v-for="item in this.$store.state.cartList">-->
      <!--        {{item}}-->
      <!--      </div>-->
      <!--    详情页图片-->
      <detail-s-wiper :top-images="topImages"></detail-s-wiper>
      <!--    详情页商品信息展示-->
      <detail-base-info :goods="goods"></detail-base-info>
      <!--    商家信息组件-->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!--    商家详情信息图片组件-->
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <!--    商品参数信息组件-->
      <detail-param-info :param="param" ref="param"></detail-param-info>
      <!--    评论信息展示  -->
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <!--    对组件进行复用,推荐信息展示  -->
      <goods-list ref="goodsList" :goods="recommends"></goods-list>
    </Scroll>
    <!--    回到顶部组件  -->
    <back @click.native="backClick" v-show="isShow"></back>
    <!--    底部导航栏 注意:前面是发过来的事件，后面是自己创建的事件  -->
    <detail-bottom-bar @addToCart="addCart"></detail-bottom-bar>
<!--    <toast :message =message :toastShow="toastShow"></toast>-->

  </div>
</template>

<script>
import DetailSWiper from "./childComps/DetailSWiper";//商品图片轮播组件
import DetailNarBar from "./childComps/DetailNarBar";//顶部导航栏
import {getDetail, Goods, Shop, Param, RecommendInfo} from "../../network/detail";//从接口中获取数据进行展示
import DetailBaseInfo from "./childComps/DetailBaseInfo";//商品详细信息展示
import DetailShopInfo from "./childComps/DetailShopInfo";//商家信息详情
import Scroll from "components/common/betterScroll/Scroll";//滚动组件
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";//商家详情图片组件
import DetailParamInfo from "./childComps/DetailParamInfo";//商品参数信息
import DetailCommentInfo from "./childComps/DetailCommentInfo";//商品评论信息
import GoodsList from "components/content/goods/GoodsList";//推荐商品信息复用
import back from "components/common/backHeader/back";//回到顶部组件
import DetailBottomBar from "./childComps/DetailButtomBar";//底部导航栏
// import Toast from "components/common/toast/toast";//弹窗
import {mapActions} from 'vuex';//映射函数
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      param: {},
      commentInfo: [],
      scrollY: [],
      currentIndex: 0,
      //推荐信息变量
      recommends: [],
      isShow: false,
      // message:'',
      // toastShow: false
    }
  },
  components: {
    // Toast,
    DetailNarBar,
    DetailSWiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    back,
    DetailBottomBar
  },
  methods: {
    //使用这个方法就不需要使用this.$store.dispatch来去vuex里面添加映射了
    ...mapActions(['addCart1']),
    addCart() {
      //获取购物车需要展示的数据
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.discountDesc;
      product.price = this.goods.lowNowPrice;
      product.iid = this.iid;
      //使用映射函数之后进行调用时，这个函数命名不要跟methods中的函数冲突
      this.addCart1(product).then(res => {
        // this.toastShow = true
        // this.message = res
        // setTimeout(() => {
        //   this.toastShow = false
        //   this.message = ''
        // }, 2000)
           this.$toast.$toast.show(res,2000)
      })
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    InfoArray() {
      this.scrollY.push(0)
      this.scrollY.push(this.$refs.param.$el.offsetTop)
      this.scrollY.push(this.$refs.comment.$el.offsetTop)
      this.scrollY.push(this.$refs.goodsList.$el.offsetTop)
    },
    btnClick(index) {
      this.InfoArray()
      this.$refs.scroll.scrollTo(0, -this.scrollY[index], 200)
    },
    colorFollow(position) {
      this.InfoArray()
      //获取y坐标
      const positionY = (-position.y)
      //如果大于了一定的高度就让返回顶部的小图标显示出来
      this.isShow = positionY > 600;
      for (let i = 0; i < 4; i++) {
        if (positionY >= this.scrollY[i]) {
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      }
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    //根据iid请求详情数据
    getDetail(this.iid).then(res => {
      const data = res.data.result;
      // console.log(data)
      //获取顶部信息
      this.topImages = data.itemInfo.topImages
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo)
      //获取店铺信息
      this.shop = new Shop(data.shopInfo)
      //获取商家详情图片
      this.detailInfo = data.detailInfo
      //获取参数信息
      this.param = new Param(data.itemParams.info, data.itemParams.rule)
      //取出评论信息,判断有没有评论信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list
      }
      //请求推荐数据
      RecommendInfo().then(res => {
        this.recommends = res.data.data.list
        // console.log(this.recommends);
      })
    })
  },
  mounted() {
    //offsetTop是偏移量，是参数组件相对于顶部的偏移高度,挂载之后就无法获取偏移量了，所以不能在mounted里面写

  }
}
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 11;
  /*注意这里需要设置背景颜色才能完成覆盖*/
  background-color: #fff;
}

.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 52px;
  bottom: 0;
}

</style>
