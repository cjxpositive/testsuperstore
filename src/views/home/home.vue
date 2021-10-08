<template>
  <div>
    <div id="home">
      <nav-bar class="navBar">
        <template #center><h3>购物街</h3></template>
        <!--      <template #left><h4>左标题</h4></template>-->
        <!--      <template #right><h4>右标题</h4></template>-->
      </nav-bar>
      <!--    v-show用来动态的绑定元素是否显示-->
      <TarControl
        ref="TarControl1"
        class="tar-control"
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
        v-show="isTabShow"
      ></TarControl>
      <scroll class="content"
              ref="homeScroll"
              :probeType="3"
              @scroll="contentScroll"
              :pull-up-load="true"
              @pullingUp="loadMore">
        <banner :Banner="banners" @swiperImgLoad="swiperImgLoad"></banner>
        <Recommend :recommends="recommends"></Recommend>
        <Feature></Feature>
        <TarControl
          ref="TarControl2"
          class="tar-control"
          :title="['流行', '新款', '精选']"
          @tabClick="tabClick"
        ></TarControl>
        <GoodsList :goods="showGoods"></GoodsList>
      </scroll>
      <!-- .native 原生 现在已经弃用 现在可以不加了 -->
      <back @click.native="backTop" v-show="isShowBackTop"></back>
    </div>
  </div>
</template>

<script>
//导入的文件
import NavBar from 'components/common/NavBar/NavBar.vue'//标题
import banner from 'views/home/childComps/Banner.vue'//轮播图
import Recommend from './childComps/Recommend'//商品推荐
import Feature from './childComps/Feature'//特点分类组件
import TarControl from 'components/common/TarControl/TarControl'//分类商品
import GoodsList from 'components/content/goods/GoodsList'//商品列表
//这里在可以直接将方法做一个导入
import {getHomeDate, getHomeGoods} from 'network/home.js'//调用接口
import scroll from 'components/common/betterScroll/Scroll.vue'//滚动
// import BackTop from 'components/common/backHeader/back.vue' //回到顶部
import {scrollTopMixin} from '../../common/mixins.js'

export default {
  name: 'home',
  mixins: [scrollTopMixin],
  components: {
    NavBar,
    banner,
    Recommend,
    Feature,
    TarControl,
    GoodsList,
    scroll
  },
  data() {
    return {
      index: 0,
      n: null,
      banners:[],
      recommends: [],
      currentType: 'pop',
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []},
      },
      isShowBackTop: false,
      isTabShow: false,
      saveY: 0,
      itemImgLister: null,
      tabOffsetTop: 634
    }
  },
  //保持活跃时使用的方法，将保存的y值赋给该方法，可以让页面保持在该位置
  activated() {
    this.$refs.homeScroll.scrollTo(0, this.saveY, 0)
    this.$refs.homeScroll.refresh();
  },
  deactivated() {
    //保存每次滑动到的y值
    this.saveY = this.$refs.homeScroll.scroll.y

    //取消全局的事件监听
    // this.$bus.$off('itemImgLoad', this.itemImgLister)
  },
  //方法最好写在这里面
  methods: {
    //事件监听方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.TarControl1.currentIndex = index;
      this.$refs.TarControl2.currentIndex = index;
    },
    getHomeDate() {
      //请求多个数据
      getHomeDate().then((res) => {
        //res返回的是一个对象
        this.banners = res.data.data.banner.list
        // console.log(this.banners);
        this.recommends = res.data.data.recommend.list
        // console.log(this.recommends);
      })
    },
    getHomeGoods(type) {
      //请求商品数据
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list)
        this.$refs.homeScroll.finishPullUp();
      })
    },
    contentScroll(position) {
      //判断BackTop是否显示，向下拉动时x的值均为负值，需要转成正值
      this.isShowBackTop = (-position.y) > 1000
      //当向下拉的值超过了TabControl标签栏所在的高度的话，就让它进行显示
      this.isTabShow = (-position.y) > this.tabOffsetTop
    },
    //用来加载更多的方法
    loadMore() {
      //指定给谁加载更多
      this.getHomeGoods(this.currentType)
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.TarControl2.$el.offsetTop;
    }
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  //在生命周期函数created()里面，只需要写主要逻辑
  created() {
    this.getHomeDate();
    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    //获取tabControl组件的offsetTop属性
    this.swiperImgLoad()
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
  /* padding-top: 44px; */
}

.tar-control {
  /* sticky这个属性指定当当到达一定位置后，会更改为fixed*/
  position: relative;
  /*当距离顶部44px时，position属性会更改为fixed*/
  top: 44px;
  z-index: 9;
}
.navBar{
   background-color: pink;
}
.content {
  height: calc(100vh -93px);
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 0;
}
</style>
