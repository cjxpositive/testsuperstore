import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from  './store'//vuex的仓库
import Toast from "./components/common/toast";//自定义弹窗插件
import VueLazyLoad from "vue-lazyload";//图片懒加载插件
import FastClick from "fastclick"
//使用自定义弹窗插件
Vue.use(Toast)
Vue.prototype.$bus = new Vue()
//使用VueLazyload懒加载插件
Vue.use(VueLazyLoad,{
  //图片未加载到时的一个占位图片
  preLoadL:1,
  loading:require('./assets/img/other/img.png')
})
//给body元素设置fastClick
FastClick.attach(document.body)
new Vue({
  router,
  store,
  render:h=>h(App)
}).$mount('#app')
