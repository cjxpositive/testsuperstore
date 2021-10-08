import Router from 'vue-router'
import vue from 'vue'
vue.use(Router)
 //路由懒加载
 const home =()=>import('../views/home/home')
 const shopping =()=>import('../views/shopping/shopping')
 const classify=() =>import('../views/classify/classify')
 const my =()=>import('../views/my/my')
 const detail =()=>import('../views/detail/detail')

 const routes =[
   {
     path:'',
     redirect:'/home'
   },
   {
     path:'/home',
     component:home
   },
   {
     path:'/shopping',
     component:shopping
   },
   {
     path:'/classify',
     component:classify
   },
   {
     path:'/my',
     component:my
   },
   {
     //后面跟上iid，用来给路径加上后缀
     path:'/detail/:iid',
     component:detail
   }
 ]
const router = new Router({
  mode:'history',
  routes

})
export default  router
