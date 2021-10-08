import Toast from "./toast";
import Vue from "vue";
const obj ={ }
obj.install=function (){
  //1.创建组件构造器,注意里面的这个名字不要跟创建的对象的名字重复了，不然会报错
  const toastContrustor =Vue.extend(Toast)
  //2.new的方式，根据组件的构造器，可以创建出来一个组件对象
  const toast = new toastContrustor()
  //3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast =toast;
}
export default obj
