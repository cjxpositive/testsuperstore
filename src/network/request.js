import axios from "axios";

export function  request(config){

  const instance =axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000
  })
  //interceptors拦截器,会调用use函数，use函数里需要传入两个函数，一个是拦截成功，一个是拦截失败
  /*
  * 请求拦截的作用
  * 1.比如：config中的一些信息不符合服务器要求
  * 2.每次发送网络请求时希望在界面展示一些请求的图标
  * 3.某些网络请求（比如：token），必须携带一些特殊信息
  * */
  // instance.interceptors.request.use(config=>{
  //   // console.log(config);
  //   return config
  // },error => {
  //   console.log(error);
  // })
  // //2.2响应拦截response,拦截之后会很快响应
  // instance.interceptors.response.use(config=>{
  //   // console.log(config);
  //   // return config
  //   return config.data
  // },error => {
  //   console.log(error);
  // })

  return instance(config)
}


