<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BScroll, {ObserveImage, PullUpLoad} from "better-scroll";
	BScroll.use(PullUpLoad)
	BScroll.use(ObserveImage)
	export default {
		name: 'Scroll',
		props: {
			probeType: {
				type: Number,
				default: 0
			},
      data: {
        type: Array,
        default: () => {
          return []
        }
      },
			pullUpLoad: {
				type: Boolean,
				default: false,
			}
		},
		data() {
			return {
				scroll: {}
			}
		},
		mounted() {
			//创建对象,调用函数初始化
      setTimeout(this.__initScroll,20)
    },
		methods: {
      __initScroll()
      {
        if (!this.$refs.wrapper) return
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad,
          observeImage: true
        })
        //监听滚动的位置
        if (this.probeType === 2 || this.probeType === 3) {
          this.scroll.on('scroll', position => {
            this.$emit('scroll', position)
          })
        }
        //监听上拉事件
        if (this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
          })
        }
      },
      scrollTo(x, y, time=500){
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      //进行下一次加载更多的方法
      finishPullUp() {
        //本次加载更多完成后，会调用这个下一次加载更多的方法
        this.scroll && this.scroll.finishPullUp()
      },
      //刷新方法
      refresh(){
        //refresh用来进行页面刷新的方法，可以重新计算页面中需要进行滚动的高度
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      }
    },
    watch: {
      data() {
        setTimeout(this.refresh, 20)
      }
    }
	}
</script>
<!-- 这里不能设置样式，会影响路由的使用-->
<style>
</style>
