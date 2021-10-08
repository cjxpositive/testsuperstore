import back from "components/common/backHeader/back.vue";
// 图片列表刷新
export const imgRefrashMixin = {
  mounted() {
    //请求数据列表后刷新
    this.itemImgLister = () => {
      this.$refs.scroll.refresh();
    }
    this.$bus.$on('itemImgLoad', this.itemImgLister);
  }
}

//返回顶部
export const scrollTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    back
  },
  methods: {
    backTop() {
      //返回顶部
      this.$refs.homeScroll.scrollTo(0, 0);
    }
  }
}
